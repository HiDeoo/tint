import { type ColorEditorType, ColorEditorTypeSwitch } from '@/components/color/editor/ColorEditorTypeSwitch'
import { HslEditor } from '@/components/color/editor/HslEditor'
import { RgbEditor } from '@/components/color/editor/RgbEditor'
import { type Color } from '@/libs/color'
import { editorTypeSignal } from '@/signals/editor'

export function ColorEditor({ color, onChange }: ColorEditorProps) {
  const EditorComponent = editorTypeSignal.value === 'rgba' ? RgbEditor : HslEditor

  return (
    <EditorComponent
      color={color}
      onChange={onChange}
      typeSwitch={<ColorEditorTypeSwitch type={editorTypeSignal.value} onChange={handleTypeChange} />}
    />
  )
}

function handleTypeChange(newType: ColorEditorType) {
  editorTypeSignal.value = newType
}

interface ColorEditorProps {
  color: Color
  onChange: (newColor: Color) => void
}
