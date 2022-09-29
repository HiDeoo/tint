import { type Color, colorFromString } from '@/libs/color'

export function isColorPickerAvailable() {
  return 'EyeDropper' in globalThis
}

export async function pickColor() {
  if (!isColorPickerAvailable()) {
    throw new Error('Color picker is not supported in this browser.')
  }

  let color: Color | undefined

  try {
    const eyeDropper = new EyeDropper()

    const { sRGBHex } = await eyeDropper.open()

    color = colorFromString(sRGBHex)
  } catch {
    // We can safely ignore this error as it is thrown when the user cancels the pick operation.
  }

  return color
}

declare class EyeDropper {
  constructor()

  public open(options?: ColorSelectionOptions): Promise<ColorSelectionResult>
}

interface ColorSelectionOptions {
  signal: AbortSignal
}

interface ColorSelectionResult {
  sRGBHex: string
}
