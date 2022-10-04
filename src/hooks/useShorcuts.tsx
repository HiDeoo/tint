import { useHotkeys } from 'react-hotkeys-hook'

import { SHORTCUTS } from '@/constants/shortcut'
import { readColorFromClipBoard, writeColorToClipboard } from '@/libs/clipboard'
import { type Color, colorFromSerializedColor } from '@/libs/color'
import { getShortcutKeys } from '@/libs/shortcut'
import { editorColorSignal } from '@/signals/editor'
import { settingsDialogOpenedSignal } from '@/signals/settings'

export function useShortcuts(setEditorColor: EditorColorSetter) {
  useHotkeys(getShortcutKeys(SHORTCUTS.CopyColor), () => {
    handleCopyColor()
  })

  useHotkeys(getShortcutKeys(SHORTCUTS.PasteColor), () => {
    handlePasteColor(setEditorColor)
  })
}

function handleCopyColor() {
  if (settingsDialogOpenedSignal.value) {
    return
  }

  const color = colorFromSerializedColor(editorColorSignal.value)

  writeColorToClipboard(color)
}

async function handlePasteColor(setEditorColor: EditorColorSetter) {
  if (settingsDialogOpenedSignal.value) {
    return
  }

  const color = await readColorFromClipBoard()

  if (color) {
    setEditorColor(color)
  }
}

type EditorColorSetter = (color: Color) => void
