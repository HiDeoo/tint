export const COLOR_FORMATS = ['hex', 'hsl'] as const

export const GROUPED_COLOR_FORMATS: Record<string, ColorFormat[]> = {
  Haha: ['hex'],
  Amazing: ['hsl'],
}

export type ColorFormat = typeof COLOR_FORMATS[number]
