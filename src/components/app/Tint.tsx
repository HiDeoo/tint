import { useDeferredValue, useEffect, useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

import { ColorEditor } from '@/components/color/editor/ColorEditor'
import { ColorPreview } from '@/components/color/preview/ColorPreview'
import { colorFromHsla, getColorHslaComponents, type Color } from '@/libs/color'
import { editorHslaColorSignal } from '@/signals/editor'

export function Tint() {
  const [editorColor, setEditorColor] = useState<Color>(() => colorFromHsla(editorHslaColorSignal.value))
  const deferredEditorColor = useDeferredValue(editorColor)

  useEffect(() => {
    editorHslaColorSignal.value = getColorHslaComponents(deferredEditorColor)
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
