import { describe, expect, test } from 'vitest'

import { colorFromStringInput, getSerializedColor, isEqualSerializedColor, type SerializedColor } from '@/libs/color'

describe('colorFromStringInput', () => {
  const testInputs: [string[], SerializedColor][] = [
    [['#6abf40', '6abf40'], { h: 100, s: 50, l: 50, a: 1 }],
    [['#6abf4080', '6abf4080'], { h: 100, s: 50, l: 50, a: 0.5 }],
  ]

  test.each(testInputs)("should parse '%j'", async (inputs, color) => {
    for (const input of inputs) {
      expect(isEqualSerializedColor(getSerializedColor(colorFromStringInput(input)), color)).toBe(true)
    }
  })
})
