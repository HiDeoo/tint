import { useHotkeys } from 'react-hotkeys-hook'

import { SHORTCUTS } from '@/constants/shortcut'
import { type Color, colorFromSerializedColor, colorFromStringInput, getColorString } from '@/libs/color'
import { getShortcutKeys } from '@/libs/shortcut'
import { editorColorSignal, editorFormatSignal } from '@/signals/editor'
import { addColorToHistory } from '@/signals/history'

export function useShortcuts(setEditorColor: EditorColorSetter) {
  useHotkeys(getShortcutKeys(SHORTCUTS.CopyColor), handleCopyColor)
  useHotkeys(getShortcutKeys(SHORTCUTS.PasteColor), () => {
    handlePasteColor(setEditorColor)
  })
}

function handleCopyColor() {
  const color = colorFromSerializedColor(editorColorSignal.value)
  const formattedColor = getColorString(color, editorFormatSignal.value)

  addColorToHistory(color)

  try {
    navigator.clipboard.writeText(formattedColor)
  } catch {
    // TODO(HiDeoo)
  }
}

async function handlePasteColor(setEditorColor: EditorColorSetter) {
  let clipboardText: string | undefined

  try {
    clipboardText = await navigator.clipboard.readText()
  } catch {
    // TODO(HiDeoo)
  }

  try {
    const color = colorFromStringInput(clipboardText)

    setEditorColor(color)
  } catch {
    // TODO(HiDeoo)
  }
}

type EditorColorSetter = (color: Color) => void
