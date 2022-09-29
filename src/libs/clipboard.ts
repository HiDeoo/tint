import { colorFromStringInput, getColorString, type Color } from '@/libs/color'
import { editorFormatSignal } from '@/signals/editor'
import { addColorToHistory } from '@/signals/history'
import { addToast } from '@/signals/toasts'

export function writeColorToClipboard(color: Color) {
  const formattedColor = getColorString(color, editorFormatSignal.value, true)

  addColorToHistory(color)

  try {
    navigator.clipboard.writeText(formattedColor)

    addToast({ intent: 'success', message: 'COPIED' })
  } catch {
    addToast({ intent: 'error', message: 'Unable to copy color to the clipboard.' })
  }
}

export async function readColorFromClipBoard() {
  let clipboardText: string | undefined

  try {
    clipboardText = await navigator.clipboard.readText()
  } catch {
    return addToast({ intent: 'error', message: 'Unable to read color from clipboard.' })
  }

  try {
    const color = colorFromStringInput(clipboardText)

    return color
  } catch {
    return addToast({ intent: 'error', message: 'Unable to paste unsupported color format.' })
  }
}
