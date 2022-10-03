import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest'

import { ColorFormatter } from '@/components/color/toolbar/ColorFormatter'
import { type ColorFormatName, COLOR_FORMATS } from '@/constants/color'
import { colorFromSerializedColor, type SerializedColor } from '@/libs/color'
import { editorFormatSignal } from '@/signals/editor'
import { settingsHexLowercaseSignal, settingsHexPrefixSignal } from '@/signals/settings'

const testColors: [SerializedColor, Record<ColorFormatName, string>][] = [
  [
    { h: 0, s: 0, l: 0, a: 1 },
    {
      CssHex: '#000000',
      CssHsl: 'hsl(0 0% 0%)',
      CssRgb: 'rgb(0 0 0)',
      SwiftAppKitHsb: 'NSColor(hue: 0, saturation: 0, brightness: 0, alpha: 1)',
    },
  ],
  [
    { h: 0, s: 0, l: 100, a: 1 },
    {
      CssHex: '#ffffff',
      CssHsl: 'hsl(0 0% 100%)',
      CssRgb: 'rgb(255 255 255)',
      SwiftAppKitHsb: 'NSColor(hue: 0, saturation: 0, brightness: 1, alpha: 1)',
    },
  ],
  [
    { h: 180, s: 25, l: 75, a: 0.5 },
    {
      CssHex: '#afcfcf80',
      CssHsl: 'hsl(180 25% 75% / 0.5)',
      CssRgb: 'rgb(175 207 207 / 0.5)',
      SwiftAppKitHsb: 'NSColor(hue: 0.5, saturation: 0.15, brightness: 0.81, alpha: 0.5)',
    },
  ],
  [
    { h: 111, s: 63, l: 55, a: 0.33 },
    {
      CssHex: '#5ad54454',
      CssHsl: 'hsl(111 63% 55% / 0.33)',
      CssRgb: 'rgb(90 213 68 / 0.33)',
      SwiftAppKitHsb: 'NSColor(hue: 0.31, saturation: 0.68, brightness: 0.83, alpha: 0.33)',
    },
  ],
]

beforeEach(() => {
  settingsHexLowercaseSignal.value = true
  settingsHexPrefixSignal.value = true
})

describe.each(testColors)('%o', (color, results) => {
  test.each(Object.keys(COLOR_FORMATS) as ColorFormatName[])("should properly format in '%s' format", (format) => {
    editorFormatSignal.value = format

    render(<ColorFormatter color={colorFromSerializedColor(color)} />)

    expect(screen.getByText(results[format])).toBeDefined()
  })
})

describe('settings', () => {
  test('should use lowercase or uppercase for hexadecimal colors', () => {
    const color = colorFromSerializedColor({ h: 100, s: 50, l: 50, a: 1 })

    editorFormatSignal.value = 'CssHex'
    settingsHexLowercaseSignal.value = true

    const { rerender } = render(<ColorFormatter color={color} />)

    expect(screen.getByText('#6abf40')).toBeDefined()

    settingsHexLowercaseSignal.value = false

    rerender(<ColorFormatter color={color} />)

    expect(screen.getByText('#6ABF40')).toBeDefined()
  })

  test('should use # prefix or not for hexadecimal colors', () => {
    const color = colorFromSerializedColor({ h: 100, s: 50, l: 50, a: 1 })

    editorFormatSignal.value = 'CssHex'
    settingsHexPrefixSignal.value = true

    const { rerender } = render(<ColorFormatter color={color} />)

    expect(screen.getByText('#6abf40')).toBeDefined()

    settingsHexPrefixSignal.value = false

    rerender(<ColorFormatter color={color} />)

    expect(screen.getByText('6abf40')).toBeDefined()
  })
})
