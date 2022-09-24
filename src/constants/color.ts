export const COLOR_FORMATS = ['hex', 'hsl'] as const

export type ColorFormat = typeof COLOR_FORMATS[number]
