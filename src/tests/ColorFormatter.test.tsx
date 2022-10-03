import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest'

import { ColorFormatter } from '@/components/color/toolbar/ColorFormatter'
import { type ColorFormatName, COLOR_FORMATS } from '@/constants/color'
import { colorFromSerializedColor, type SerializedColor } from '@/libs/color'
import { editorFormatSignal } from '@/signals/editor'
import { settingsHexLowercaseSignal, settingsCssHexPrefixSignal } from '@/signals/settings'

const testColors: [SerializedColor, Record<ColorFormatName, string>][] = [
  [
    { h: 0, s: 0, l: 0, a: 1 },
    {
      CssHex: '#000000',
      CssHsl: 'hsl(0 0% 0%)',
      CssRgb: 'rgb(0 0 0)',
      SwiftAppKitHsb: 'NSColor(hue: 0, saturation: 0, brightness: 0, alpha: 1)',
      SwiftAppKitRgb: 'NSColor(red: 0, green: 0, blue: 0, alpha: 1)',
      SwiftUiKitHsb: 'UIColor(hue: 0, saturation: 0, brightness: 0, alpha: 1)',
      SwiftUiKitRgb: 'UIColor(red: 0, green: 0, blue: 0, alpha: 1)',
      CgColorRgb: 'CGColor(red: 0, green: 0, blue: 0, alpha: 1)',
      CgColorCmyk: 'CGColor(genericCMYKCyan: 0, magenta: 0, yellow: 0, black: 1, alpha: 1)',
      SwiftUiHsb: 'Color(hue: 0, saturation: 0, brightness: 0)',
      SwiftUiRgb: 'Color(red: 0, green: 0, blue: 0)',
      AndroidHex: 'Color.valueOf(0xff000000)',
      AndroidRgb: 'Color.valueOf(0f, 0f, 0f)',
    },
  ],
  [
    { h: 0, s: 0, l: 100, a: 1 },
    {
      CssHex: '#ffffff',
      CssHsl: 'hsl(0 0% 100%)',
      CssRgb: 'rgb(255 255 255)',
      SwiftAppKitHsb: 'NSColor(hue: 0, saturation: 0, brightness: 1, alpha: 1)',
      SwiftAppKitRgb: 'NSColor(red: 1, green: 1, blue: 1, alpha: 1)',
      SwiftUiKitHsb: 'UIColor(hue: 0, saturation: 0, brightness: 1, alpha: 1)',
      SwiftUiKitRgb: 'UIColor(red: 1, green: 1, blue: 1, alpha: 1)',
      CgColorRgb: 'CGColor(red: 1, green: 1, blue: 1, alpha: 1)',
      CgColorCmyk: 'CGColor(genericCMYKCyan: 0, magenta: 0, yellow: 0, black: 0, alpha: 1)',
      SwiftUiHsb: 'Color(hue: 0, saturation: 0, brightness: 1)',
      SwiftUiRgb: 'Color(red: 1, green: 1, blue: 1)',
      AndroidHex: 'Color.valueOf(0xffffffff)',
      AndroidRgb: 'Color.valueOf(1f, 1f, 1f)',
    },
  ],
  [
    { h: 180, s: 25, l: 75, a: 0.5 },
    {
      CssHex: '#afcfcf80',
      CssHsl: 'hsl(180 25% 75% / 0.5)',
      CssRgb: 'rgb(175 207 207 / 0.5)',
      SwiftAppKitHsb: 'NSColor(hue: 0.5, saturation: 0.15, brightness: 0.81, alpha: 0.5)',
      SwiftAppKitRgb: 'NSColor(red: 0.69, green: 0.81, blue: 0.81, alpha: 0.5)',
      SwiftUiKitHsb: 'UIColor(hue: 0.5, saturation: 0.15, brightness: 0.81, alpha: 0.5)',
      SwiftUiKitRgb: 'UIColor(red: 0.69, green: 0.81, blue: 0.81, alpha: 0.5)',
      CgColorRgb: 'CGColor(red: 0.69, green: 0.81, blue: 0.81, alpha: 0.5)',
      CgColorCmyk: 'CGColor(genericCMYKCyan: 0.15, magenta: 0, yellow: 0, black: 0.19, alpha: 0.5)',
      SwiftUiHsb: 'Color(hue: 0.5, saturation: 0.15, brightness: 0.81, opacity: 0.5)',
      SwiftUiRgb: 'Color(red: 0.69, green: 0.81, blue: 0.81, opacity: 0.5)',
      AndroidHex: 'Color.valueOf(0x80afcfcf)',
      AndroidRgb: 'Color.valueOf(0.69f, 0.81f, 0.81f, 0.5f)',
    },
  ],
  [
    { h: 111, s: 63, l: 55, a: 0.33 },
    {
      CssHex: '#5ad54454',
      CssHsl: 'hsl(111 63% 55% / 0.33)',
      CssRgb: 'rgb(90 213 68 / 0.33)',
      SwiftAppKitHsb: 'NSColor(hue: 0.31, saturation: 0.68, brightness: 0.83, alpha: 0.33)',
      SwiftAppKitRgb: 'NSColor(red: 0.35, green: 0.84, blue: 0.27, alpha: 0.33)',
      SwiftUiKitHsb: 'UIColor(hue: 0.31, saturation: 0.68, brightness: 0.83, alpha: 0.33)',
      SwiftUiKitRgb: 'UIColor(red: 0.35, green: 0.84, blue: 0.27, alpha: 0.33)',
      CgColorRgb: 'CGColor(red: 0.35, green: 0.84, blue: 0.27, alpha: 0.33)',
      CgColorCmyk: 'CGColor(genericCMYKCyan: 0.58, magenta: 0, yellow: 0.68, black: 0.17, alpha: 0.33)',
      SwiftUiHsb: 'Color(hue: 0.31, saturation: 0.68, brightness: 0.83, opacity: 0.33)',
      SwiftUiRgb: 'Color(red: 0.35, green: 0.84, blue: 0.27, opacity: 0.33)',
      AndroidHex: 'Color.valueOf(0x545ad544)',
      AndroidRgb: 'Color.valueOf(0.35f, 0.84f, 0.27f, 0.33f)',
    },
  ],
]

beforeEach(() => {
  settingsHexLowercaseSignal.value = true
  settingsCssHexPrefixSignal.value = true
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

    editorFormatSignal.value = 'AndroidHex'
    settingsHexLowercaseSignal.value = true

    rerender(<ColorFormatter color={color} />)

    expect(screen.getByText('Color.valueOf(0xff6abf40)')).toBeDefined()

    settingsHexLowercaseSignal.value = false

    rerender(<ColorFormatter color={color} />)

    expect(screen.getByText('Color.valueOf(0xFF6ABF40)')).toBeDefined()
  })

  test('should use # prefix or not for CSS hexadecimal colors', () => {
    const color = colorFromSerializedColor({ h: 100, s: 50, l: 50, a: 1 })

    editorFormatSignal.value = 'CssHex'
    settingsCssHexPrefixSignal.value = true

    const { rerender } = render(<ColorFormatter color={color} />)

    expect(screen.getByText('#6abf40')).toBeDefined()

    settingsCssHexPrefixSignal.value = false

    rerender(<ColorFormatter color={color} />)

    expect(screen.getByText('6abf40')).toBeDefined()
  })
})
