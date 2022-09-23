import { useDeferredValue, useEffect, useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

import { ColorEditor } from '@/components/color/editor/ColorEditor'
import { colorFromHsla, getColorHslaComponents, getColorString, type Color } from '@/libs/color'
import { pickColor } from '@/libs/picker'
import { editorHslaColorSignal } from '@/signals/history'

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
      <div className="h-16 w-16" style={{ backgroundColor: getColorString(editorColor) }} />
      <ColorEditor color={editorColor} onChangeColor={setEditorColor} />
      <button onClick={handleClick}>Hello 10</button>
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

async function handleClick() {
  const color = await pickColor()

  console.error('🚨 [App.tsx:16] color', color)
}
