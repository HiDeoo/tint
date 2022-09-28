import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { ColorFormatter } from '@/components/color/toolbar/ColorFormatter'
import { COLOR_FORMATS, type ColorFormat } from '@/constants/color'
import { colorFromSerializedColor, type SerializedColor } from '@/libs/color'
import { editorFormatSignal } from '@/signals/editor'
import { settingsHexLowercaseSignal } from '@/signals/settings'

const testColors: [SerializedColor, Record<ColorFormat, string>][] = [
  [
    { h: 0, s: 0, l: 0, a: 1 },
    {
      hex: '#000000',
      hsl: 'hsl(0, 0%, 0%)',
    },
  ],
  [
    { h: 0, s: 0, l: 100, a: 1 },
    {
      hex: '#ffffff',
      hsl: 'hsl(0, 0%, 100%)',
    },
  ],
  [
    { h: 180, s: 25, l: 75, a: 0.5 },
    {
      hex: '#afcfcf80',
      hsl: 'hsla(180, 25%, 75%, 0.5)',
    },
  ],
]

describe.each(testColors)('%o', (color, results) => {
  test.each(COLOR_FORMATS)("should properly format in '%s' format", (format) => {
    editorFormatSignal.value = format

    render(<ColorFormatter color={colorFromSerializedColor(color)} />)

    expect(screen.getByText(results[format])).toBeDefined()
  })
})

describe('settings', () => {
  test('should use lowercase or uppercase for hexadecimal colors', () => {
    const color = colorFromSerializedColor({ h: 100, s: 50, l: 50, a: 1 })

    editorFormatSignal.value = 'hex'
    settingsHexLowercaseSignal.value = true

    const { rerender } = render(<ColorFormatter color={color} />)

    expect(screen.getByText('#6abf40')).toBeDefined()

    settingsHexLowercaseSignal.value = false

    rerender(<ColorFormatter color={color} />)

    expect(screen.getByText('#6ABF40')).toBeDefined()
  })
})
