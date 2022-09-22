import { useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

import { ColorEditor } from '@/components/color/editor/ColorEditor'
import { type ColorEditorType } from '@/components/color/editor/ColorEditorTypeSwitch'
import { colorFromString, getColorString, type Color } from '@/libs/color'
import { pickColor } from '@/libs/picker'

export function Tint() {
  const [editorType, setEditorType] = useState<ColorEditorType>('rgba')
  const [color, setColor] = useState<Color>(() => colorFromString('#f0f'))

  function handleColorChange(newColor: Color) {
    setColor(newColor)
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
      <div className="h-16 w-16" style={{ backgroundColor: getColorString(color) }} />
      <ColorEditor
        color={color}
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
