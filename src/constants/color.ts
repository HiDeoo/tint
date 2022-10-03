export const COLOR_FORMATS = {
  CssHex: { group: 'CSS', label: 'Hex' },
  CssHsl: { group: 'CSS', label: 'HSL' },
  CssRgb: { group: 'CSS', label: 'RGB' },
  SwiftAppKitHsb: { group: 'Swift', label: 'NSColor HSB' },
  SwiftAppKitRgb: { group: 'Swift', label: 'NSColor RGB' },
  SwiftUiKitHsb: { group: 'Swift', label: 'UIColor HSB' },
  SwiftUiKitRgb: { group: 'Swift', label: 'UIColor RGB' },
  CgColorRgb: { group: 'Swift', label: 'CGColor RGB' },
  CgColorCmyk: { group: 'Swift', label: 'CGColor CMYK' },
  SwiftUiHsb: { group: 'Swift UI', label: 'HSB' },
  SwiftUiRgb: { group: 'Swift UI', label: 'RGB' },
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
