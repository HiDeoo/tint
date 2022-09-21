export function isColorPickerAvailable() {
  return 'EyeDropper' in globalThis
}

export async function pickColor() {
  if (!isColorPickerAvailable()) {
    throw new Error('Color picker is not supported in this browser.')
  }

  const eyeDropper = new EyeDropper()

  const color = await eyeDropper.open()

  // TODO(HiDeoo) Type as hex
  return color.sRGBHex
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
