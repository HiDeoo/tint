import { colorFromStringInput, getColorString, type Color } from '@/libs/color'
import { editorFormatSignal } from '@/signals/editor'
import { addColorToHistory } from '@/signals/history'
import { settingsCopySoundSignal } from '@/signals/settings'
import { addToast } from '@/signals/toasts'

let writeSound: HTMLAudioElement | undefined

export function writeColorToClipboard(color: Color) {
  const formattedColor = getColorString(color, editorFormatSignal.value, true)

  addColorToHistory(color)

  try {
    navigator.clipboard.writeText(formattedColor)

    addToast({ intent: 'success', message: 'COPIED' })

    if (settingsCopySoundSignal.value) {
      if (!writeSound) {
        // https://freesound.org/people/MATRIXXX_/sounds/370367
        writeSound = new Audio('/sounds/step.webm')
      }

      writeSound.play()
    }
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
