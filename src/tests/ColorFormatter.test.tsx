import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { ColorFormatter } from '@/components/color/preview/ColorFormatter'
import { COLOR_FORMATS, type ColorFormat } from '@/constants/color'
import { colorFromSerializedColor, type SerializedColor } from '@/libs/color'
import { editorFormatSignal } from '@/signals/editor'

const colorTests: [SerializedColor, Record<ColorFormat, string>][] = [
  [
    { h: 0, s: 0, l: 0, a: 1 },
    {
      hex: '#000000',
      hsl: 'hsl(0, 0%, 0%)',
    },
  ],
]

describe.each(colorTests)('%o', (color, results) => {
  test.each(COLOR_FORMATS)("should properly in '%s' format", (format) => {
    editorFormatSignal.value = format

    render(<ColorFormatter color={colorFromSerializedColor(color)} />)

    expect(screen.getByText(results[format])).toBeDefined()
  })
})
