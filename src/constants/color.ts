export const COLOR_FORMATS = {
  CssHex: { group: 'CSS', label: 'Hex' },
  CssHsl: { group: 'CSS', label: 'HSL' },
  CssRgb: { group: 'CSS', label: 'RGB' },
  SwiftAppKitHsb: { group: 'Swift', label: 'NSColor HSB' },
}

export const GROUPED_COLOR_FORMAT_NAMES: Record<string, ColorFormatName[]> = {}

for (const [colorFormatName, colorFormat] of Object.entries(COLOR_FORMATS)) {
  if (!(colorFormat.group in GROUPED_COLOR_FORMAT_NAMES)) {
    GROUPED_COLOR_FORMAT_NAMES[colorFormat.group] = []
  }

  GROUPED_COLOR_FORMAT_NAMES[colorFormat.group]?.push(colorFormatName as ColorFormatName)
}

export const RGBA_COMPONENT_NAMES = {
  r: 'Red',
  g: 'Green',
  b: 'Blue',
  a: 'Alpha',
}

export type ColorFormatName = keyof typeof COLOR_FORMATS
