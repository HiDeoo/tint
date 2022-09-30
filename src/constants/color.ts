export const COLOR_FORMATS = ['hex', 'hsl', 'rgb'] as const

export const GROUPED_COLOR_FORMATS: Record<string, ColorFormat[]> = {
  Haha: ['hex'],
  Amazing: ['hsl', 'rgb'],
}

export const RGBA_COMPONENT_NAMES = {
  r: 'Red',
  g: 'Green',
  b: 'Blue',
  a: 'Alpha',
}

export type ColorFormat = typeof COLOR_FORMATS[number]
