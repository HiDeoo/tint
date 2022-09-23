import { ColorComponent } from '@/components/color/component/ColorComponent'
import { type Color, colorWithLightness, getColorHslaComponents } from '@/libs/color'

export function LightnessComponent({ color, onChange }: LightnessComponentProps) {
  const hslaColor = getColorHslaComponents(color)

  function handleChange(newValue: number) {
    onChange(colorWithLightness(color, newValue))
  }

  return <ColorComponent max={100} onChange={handleChange} value={hslaColor.l} />
}

interface LightnessComponentProps {
  color: Color
  onChange: (newColor: Color) => void
}
