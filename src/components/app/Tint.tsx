import { useDeferredValue, useEffect, useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

import { ColorEditor } from '@/components/color/editor/ColorEditor'
import { type ColorEditorType } from '@/components/color/editor/ColorEditorTypeSwitch'
import { colorFromHsla, getColorHslaComponents, getColorString, type Color } from '@/libs/color'
import { pickColor } from '@/libs/picker'
import { editorHslaColor } from '@/signals/history'

export function Tint() {
  const [editorType, setEditorType] = useState<ColorEditorType>('rgba')
  const [editorColor, setEditorColor] = useState<Color>(() => colorFromHsla(editorHslaColor.value))
  const deferredEditorColor = useDeferredValue(editorColor)

  useEffect(() => {
    editorHslaColor.value = getColorHslaComponents(deferredEditorColor)
  }, [deferredEditorColor])

  function handleColorChange(newColor: Color) {
    setEditorColor(newColor)
  }

  function handleEditorTypeChange(newType: ColorEditorType) {
    setEditorType(newType)
  }

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  const close = () => {
    setNeedRefresh(false)
  }

  return (
    <main>
      <br />
      <div className="h-16 w-16" style={{ backgroundColor: getColorString(editorColor) }} />
      <ColorEditor
        color={editorColor}
        onChangeColor={handleColorChange}
        onChangeType={handleEditorTypeChange}
        type={editorType}
      />
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
