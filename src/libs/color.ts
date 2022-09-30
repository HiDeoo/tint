import { colord, type HslaColor, type Colord, type RgbaColor, getFormat } from 'colord'

import { COLOR_FORMATS, RGBA_COMPONENT_NAMES, type ColorFormat } from '@/constants/color'
import { settingsHexLowercaseSignal, settingsHexPrefixSignal } from '@/signals/settings'

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

  if (!format || !isValidColorFormat(format)) {
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

export function getColorString(color: Color, format: ColorFormat = 'hsl', useSettings = false): string {
  switch (format) {
    case 'hsl': {
      return color
        .toHslString()
        .replace(
          /hsla?\((\d+), (\d+%), (\d+%)(?:, (\d+))?/,
          (_match, hue, saturation, lightning, alpha) =>
            `hsl(${hue} ${saturation} ${lightning}${alpha ? ` / ${alpha}` : ''}`
        )
    }
    case 'hex': {
      let hexStr = color.toHex()

      if (useSettings && !settingsHexLowercaseSignal.value) {
        hexStr = hexStr.toUpperCase()
      }

      if (useSettings && !settingsHexPrefixSignal.value) {
        hexStr = hexStr.replace('#', '')
      }

      return hexStr
    }
    case 'rgb': {
      return color
        .toRgbString()
        .replace(
          /rgba?\((\d+), (\d+), (\d+)(?:, (\d+))?/,
          (_match, red, blue, green, alpha) => `rgb(${red} ${blue} ${green}${alpha ? ` / ${alpha}` : ''}`
        )
    }
    default: {
      throw new Error(`Unsupported color format '${format}'.`)
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

function isValidColorFormat(format: string): format is ColorFormat {
  return COLOR_FORMATS.includes(format as ColorFormat)
}

export type Color = Colord

export type RgbaComponent = keyof RgbaColor

// https://github.com/microsoft/TypeScript/issues/31940#issuecomment-841712377
// eslint-disable-next-line @typescript-eslint/ban-types
export type SerializedColor = HslaColor & {}
