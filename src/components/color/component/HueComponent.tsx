import { ColorComponent } from '@/components/color/component/ColorComponent'
import { type Color, colorWithHue } from '@/libs/color'

export function HueComponent({ color, onChange }: HueComponentProps) {
  function handleChange(newValue: number) {
    onChange(colorWithHue(color, newValue))
  }

  return <ColorComponent label="Hue" max={360} onChange={handleChange} value={color.hue()} />
}

interface HueComponentProps {
  color: Color
  onChange: (newColor: Color) => void
}
