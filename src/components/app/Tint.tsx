import { useDeferredValue, useEffect, useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

import { ColorEditor } from '@/components/color/editor/ColorEditor'
import { ColorHistory } from '@/components/color/history/ColorHistory'
import { ColorPreview } from '@/components/color/preview/ColorPreview'
import { useShortcuts } from '@/hooks/useShorcuts'
import { colorFromSerializedColor, getSerializedColor, type Color } from '@/libs/color'
import { editorColorSignal } from '@/signals/editor'

export function Tint() {
  useShortcuts()

  const [editorColor, setEditorColor] = useState<Color>(() => colorFromSerializedColor(editorColorSignal.value))
  const deferredEditorColor = useDeferredValue(editorColor)

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
      <br />
      <ColorPreview color={editorColor} onPick={setEditorColor} />
      <ColorEditor color={editorColor} onChange={setEditorColor} />
      <ColorHistory onSelect={setEditorColor} />
      {needRefresh && (
        <div>
          <div>New Update</div>
          <button onClick={() => updateServiceWorker(true)}>Reload</button>
          <button onClick={() => close()}>Close</button>
        </div>
      )}
    </main>
  )
}
