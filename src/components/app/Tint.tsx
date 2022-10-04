import { useDeferredValue, useEffect, useState } from 'react'

import { ColorEditor } from '@/components/color/editor/ColorEditor'
import { ColorHistory } from '@/components/color/history/ColorHistory'
import { ColorPicker } from '@/components/color/picker/ColorPicker'
import { ColorToolbar } from '@/components/color/toolbar/ColorToolbar'
import { useShortcuts } from '@/hooks/useShorcuts'
import { colorFromSerializedColor, getSerializedColor, type Color } from '@/libs/color'
import { editorColorSignal } from '@/signals/editor'

export function Tint() {
  const [editorColor, setEditorColor] = useState<Color>(() => colorFromSerializedColor(editorColorSignal.value))
  const deferredEditorColor = useDeferredValue(editorColor)

  useShortcuts(setEditorColor)

  useEffect(() => {
    editorColorSignal.value = getSerializedColor(deferredEditorColor)
  }, [deferredEditorColor])

  return (
    <main>
      <ColorPicker color={editorColor} onPick={setEditorColor} />
      <ColorToolbar color={editorColor} />
      <ColorEditor color={editorColor} onChange={setEditorColor} />
      <ColorHistory onSelect={setEditorColor} />
    </main>
  )
}
