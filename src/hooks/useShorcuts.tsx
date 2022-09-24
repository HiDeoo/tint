import { useHotkeys } from 'react-hotkeys-hook'

import { SHORTCUTS } from '@/constants/shortcut'
import { colorFromSerializedColor, getColorString } from '@/libs/color'
import { getShortcutKeys } from '@/libs/shortcut'
import { editorColorSignal, editorFormatSignal } from '@/signals/editor'
import { addColorToHistory } from '@/signals/history'

export function useShortcuts() {
  useHotkeys(getShortcutKeys(SHORTCUTS.CopyColor), handleCopyColor)
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
