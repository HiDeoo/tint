export const COLOR_FORMATS = ['hex', 'hsl'] as const

export const GROUPED_COLOR_FORMATS: Record<string, ColorFormat[]> = {
  Haha: ['hex'],
  Amazing: ['hsl'],
}

export const RGBA_COMPONENT_NAMES = {
  r: 'Red',
  g: 'Green',
  b: 'Blue',
  a: 'Alpha',
}

export type ColorFormat = typeof COLOR_FORMATS[number]
