import { ColorComponent } from '@/components/color/component/ColorComponent'
import { type Color, colorWithSaturation, getColorHslaComponents } from '@/libs/color'

export function SaturationComponent({ color, onChange }: SaturationComponentProps) {
  const hslaColor = getColorHslaComponents(color)

  function handleChange(newValue: number) {
    onChange(colorWithSaturation(color, newValue))
  }

  return <ColorComponent label="Saturation" max={100} onChange={handleChange} value={hslaColor.s} />
}

interface SaturationComponentProps {
  color: Color
  onChange: (newColor: Color) => void
}
