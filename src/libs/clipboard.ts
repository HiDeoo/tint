import { colorFromStringInput, getColorString, type Color } from '@/libs/color'
import { editorFormatSignal } from '@/signals/editor'
import { addColorToHistory } from '@/signals/history'

export function writeColorToClipboard(color: Color) {
  const formattedColor = getColorString(color, editorFormatSignal.value)

  addColorToHistory(color)

  try {
    navigator.clipboard.writeText(formattedColor)
  } catch {
    throw new Error('// TODO(HiDeoo)')
  }
}

export async function readColorFromClipBoard() {
  let clipboardText: string | undefined

  try {
    clipboardText = await navigator.clipboard.readText()
  } catch {
    throw new Error('// TODO(HiDeoo)')
  }

  try {
    const color = colorFromStringInput(clipboardText)

    return color
  } catch {
    throw new Error('// TODO(HiDeoo)')
  }
}
