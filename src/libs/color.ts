import { colord, type HslaColor, type Colord, type RgbaColor } from 'colord'

export function colorFromString(colorStr: string): Color {
  return colord(colorStr)
}

export function colorFromHsla(hslaColor: HslaColor): Color {
  return colord(hslaColor)
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

export function getColorRgbaComponents(color: Color): RgbaColor {
  return color.toRgb()
}

export function getColorHslaComponents(color: Color): HslaColor {
  return color.toHsl()
}

export function getColorString(color: Color, format: ColorFormat = 'hsl'): string {
  switch (format) {
    case 'hsl': {
      return color.toHslString()
    }
    default: {
      throw new Error(`Unsupported color format '${format}'.`)
    }
  }
}

export type Color = Colord

export type RgbaComponent = keyof RgbaColor

type ColorFormat = 'hsl'
