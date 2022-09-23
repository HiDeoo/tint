import { ColorSlider } from '@/components/color/slider/ColorSlider'
import { type Color, getColorString, colorWithSaturation } from '@/libs/color'

export function SaturationSlider({ color, onChange }: SaturationSliderProps) {
  const hslaColor = color.toHsl()

  const lColor = getColorString(colorWithSaturation(color, 0))
  const rColor = getColorString(colorWithSaturation(color, 100))

  function handleChange(newValue: number) {
    onChange(colorWithSaturation(color, newValue))
  }

  return (
    <ColorSlider
      max={100}
      onChange={handleChange}
      style={{ background: `linear-gradient(to right, ${lColor}, ${rColor})` }}
      value={hslaColor.s}
    />
  )
}

interface SaturationSliderProps {
  color: Color
  onChange: (newColor: Color) => void
}
