import { ColorSlider } from '@/components/color/slider/ColorSlider'
import { type Color, getColorString, colorWithLightness } from '@/libs/color'

export function LightnessSlider({ color, onChange }: LightnessSliderProps) {
  const hslaColor = color.toHsl()

  const lColor = getColorString(colorWithLightness(color, 0))
  const mColor = getColorString(colorWithLightness(color, 50))
  const rColor = getColorString(colorWithLightness(color, 100))

  function handleChange(newValue: number) {
    onChange(colorWithLightness(color, newValue))
  }

  return (
    <ColorSlider
      max={100}
      onChange={handleChange}
      style={{ background: `linear-gradient(to right, ${lColor}, ${mColor}, ${rColor})` }}
      value={hslaColor.l}
    />
  )
}

interface LightnessSliderProps {
  color: Color
  onChange: (newColor: Color) => void
}
