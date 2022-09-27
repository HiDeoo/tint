import { useDeferredValue, useEffect, useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

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

  // FIXME(HiDeoo)
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  // FIXME(HiDeoo)
  const close = () => {
    setNeedRefresh(false)
  }

  return (
    <main>
      <ColorPicker color={editorColor} onPick={setEditorColor} />
      <ColorToolbar color={editorColor} />
      <ColorEditor color={editorColor} onChange={setEditorColor} />
      <ColorHistory onSelect={setEditorColor} />
      {needRefresh && (
        <div>
          <div>New Update</div>
          <button type="button" onClick={() => updateServiceWorker(true)}>
            Reload
          </button>
          <button type="button" onClick={() => close()}>
            Close
          </button>
        </div>
      )}
    </main>
  )
}
