import { colord, type HslaColor, type Colord, type RgbaColor } from 'colord'

export function colorFromString(colorStr: string): Color {
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
  return color.hue(hue)
}

export function colorWithSaturation(color: Color, saturation: number): Color {
  const hslaColor = getColorHslaComponents(color)

  return colord({ h: hslaColor.h, s: saturation, l: hslaColor.l, a: hslaColor.a })
}

export function colorWithLightness(color: Color, lightness: number): Color {
  const hslaColor = getColorHslaComponents(color)

  return colord({ h: hslaColor.h, s: hslaColor.s, l: lightness, a: hslaColor.a })
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
