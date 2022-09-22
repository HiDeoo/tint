import { colord, type Colord, type RgbaColor } from 'colord'

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

export function getColorRgbaComponents(color: Color): RgbaColor {
  return color.toRgb()
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
