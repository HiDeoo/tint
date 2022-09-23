import { ColorSlider } from '@/components/color/slider/ColorSlider'
import { type Color, getColorString, colorWithLightness, getColorHslaComponents, colorWithAlpha } from '@/libs/color'

export function LightnessSlider({ color, onChange }: LightnessSliderProps) {
  const hslaColor = getColorHslaComponents(color)

  const lColor = getColorString(colorWithLightness(colorWithAlpha(color, 1), 0))
  const mColor = getColorString(colorWithLightness(colorWithAlpha(color, 1), 50))
  const rColor = getColorString(colorWithLightness(colorWithAlpha(color, 1), 100))

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
