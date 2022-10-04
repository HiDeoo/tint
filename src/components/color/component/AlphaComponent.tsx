import { ColorComponent } from '@/components/color/component/ColorComponent'
import { type Color, colorWithRgbaComponents } from '@/libs/color'

export function AlphaComponent({ color, onChange }: AlphaComponentProps) {
  function handleChange(newValue: number) {
    onChange(colorWithRgbaComponents(color, { a: newValue / 100 }))
  }

  return <ColorComponent label="Alpha" max={100} onChange={handleChange} value={Math.round(color.alpha() * 100)} />
}

interface AlphaComponentProps {
  color: Color
  onChange: (newColor: Color) => void
}
