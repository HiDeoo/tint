import { type ColorEditorType, ColorEditorTypeSwitch } from '@/components/color/editor/ColorEditorTypeSwitch'
import { RgbEditor } from '@/components/color/editor/RgbEditor'
import { type Color } from '@/libs/color'

export function ColorEditor({ color, onChangeColor, onChangeType, type }: ColorEditorProps) {
  const EditorComponent = type === 'rgba' ? RgbEditor : RgbEditor

  return (
    <EditorComponent
      color={color}
      onChange={onChangeColor}
      typeSwitch={<ColorEditorTypeSwitch type={type} onChange={onChangeType} />}
    />
  )
}

interface ColorEditorProps {
  color: Color
  onChangeColor: (newColor: Color) => void
  onChangeType: (newType: ColorEditorType) => void
  type: ColorEditorType
}
