import { colord, type HslaColor, type Colord, type RgbaColor, getFormat } from 'colord'

import { type ColorFormatName, COLOR_FORMATS, RGBA_COMPONENT_NAMES } from '@/constants/color'
import { settingsHexLowercaseSignal, settingsHexPrefixSignal } from '@/signals/settings'

const decimalFormatter = new Intl.NumberFormat('en', {
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
  style: 'decimal',
  useGrouping: false,
})

export function colorFromSerializedColor(serializedColor: SerializedColor): Color {
  return colord(serializedColor)
}

// The color string is assumed to be a valid & supported format.
export function colorFromString(colorStr: string): Color {
  return colord(colorStr)
}

export function colorFromStringInput(colorStr: string | undefined): Color {
  if (!colorStr) {
    throw new Error('Color string is not defined.')
  }

  const format: string | undefined = getFormat(colorStr)

  if (!format || !isValidColorFormatName(format)) {
    throw new Error('Invalid color format.')
  }

  return colord(colorStr)
}

export function colorWithRgbaComponents(color: Color, rgba: Partial<RgbaColor>): Color {
  return colord({
    r: rgba.r ?? color.rgba.r,
    g: rgba.g ?? color.rgba.g,
    b: rgba.b ?? color.rgba.b,
    a: rgba.a ?? color.rgba.a,
  })
}

export function colorWithAlpha(color: Color, alpha: number): Color {
  return color.alpha(alpha)
}

export function colorWithHue(color: Color, hue: number): Color {
  return color.hue(hue < 360 ? hue : hue - 10 ** -6)
}

export function colorWithSaturation(color: Color, saturation: number): Color {
  const hslaColor = getColorHslaComponents(color)

  return colord({
    h: hslaColor.h,
    s: saturation > 0 ? saturation : 10 ** -6,
    l: hslaColor.l,
    a: hslaColor.a,
  })
}

export function colorWithLightness(color: Color, lightness: number): Color {
  const hslaColor = getColorHslaComponents(color)

  return colord({
    h: hslaColor.h,
    s: hslaColor.s,
    l: lightness > 0 ? (lightness < 100 ? lightness : 100 - 10 ** -6) : 10 ** -6,
    a: hslaColor.a,
  })
}

export function getSerializedColor(color: Color): SerializedColor {
  return getColorHslaComponents(color)
}

export function getColorRgbaComponents(color: Color): RgbaColor {
  return color.toRgb()
}

export function getColorHslaComponents(color: Color): HslaColor {
  return color.toHsl()
}

export function getColorString(color: Color, formatName: ColorFormatName = 'CssHsl', useSettings = false): string {
  switch (formatName) {
    case 'CssHsl': {
      const hslaColor = color.toHsl()

      return `hsl(${hslaColor.h} ${hslaColor.s}% ${hslaColor.l}%${hslaColor.a < 1 ? ` / ${hslaColor.a}` : ''})`
    }
    case 'CssHex': {
      let hexStr = color.toHex()

      if (useSettings && !settingsHexLowercaseSignal.value) {
        hexStr = hexStr.toUpperCase()
      }

      if (useSettings && !settingsHexPrefixSignal.value) {
        hexStr = hexStr.replace('#', '')
      }

      return hexStr
    }
    case 'CssRgb': {
      const rgbaColor = color.toRgb()

      return `rgb(${rgbaColor.r} ${rgbaColor.g} ${rgbaColor.b}${rgbaColor.a < 1 ? ` / ${rgbaColor.a}` : ''})`
    }
    case 'SwiftAppKitHsb':
    case 'SwiftUiKitHsb': {
      const prefix = formatName === 'SwiftAppKitHsb' ? 'NSColor' : 'UIColor'

      const hsbaColor = color.toHsv()

      const h = formatDecimal(hsbaColor.h, 'angle')
      const s = formatDecimal(hsbaColor.s, 'percent')
      const b = formatDecimal(hsbaColor.v, 'percent')

      return `${prefix}(hue: ${h}, saturation: ${s}, brightness: ${b}, alpha: ${hsbaColor.a})`
    }
    case 'SwiftAppKitRgb':
    case 'SwiftUiKitRgb': {
      const prefix = formatName === 'SwiftAppKitRgb' ? 'NSColor' : 'UIColor'

      const rgbaColor = color.toRgb()

      const r = formatDecimal(rgbaColor.r, 'rgb')
      const g = formatDecimal(rgbaColor.g, 'rgb')
      const b = formatDecimal(rgbaColor.b, 'rgb')

      return `${prefix}(red: ${r}, green: ${g}, blue: ${b}, alpha: ${rgbaColor.a})`
    }
    default: {
      throw new Error(`Unsupported color format '${formatName}'.`)
    }
  }
}

export function getRgbaComponentName(componentName: RgbaComponent) {
  return RGBA_COMPONENT_NAMES[componentName]
}

export function isEqualSerializedColor(lSerializedColor: SerializedColor, rSerializedColor: SerializedColor): boolean {
  return (
    lSerializedColor.h === rSerializedColor.h &&
    lSerializedColor.s === rSerializedColor.s &&
    lSerializedColor.l === rSerializedColor.l &&
    lSerializedColor.a === rSerializedColor.a
  )
}

function isValidColorFormatName(format: string): format is ColorFormatName {
  return format in COLOR_FORMATS
}

function formatDecimal(value: number, unit: 'angle' | 'percent' | 'rgb'): string {
  return decimalFormatter.format(value / (unit === 'angle' ? 360 : unit === 'percent' ? 100 : 255))
}

export type Color = Colord

export type RgbaComponent = keyof RgbaColor

// https://github.com/microsoft/TypeScript/issues/31940#issuecomment-841712377
// eslint-disable-next-line @typescript-eslint/ban-types
export type SerializedColor = HslaColor & {}
