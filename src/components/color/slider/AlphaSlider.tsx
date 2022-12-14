import { ColorSlider } from '@/components/color/slider/ColorSlider'
import { type Color, getColorString, colorWithRgbaComponents } from '@/libs/color'

export function AlphaSlider({ color, onChange }: AlphaSliderProps) {
  const lColor = getColorString(colorWithRgbaComponents(color, { a: 0 }))
  const rColor = getColorString(colorWithRgbaComponents(color, { a: 100 }))

  function handleChange(newValue: number) {
    onChange(colorWithRgbaComponents(color, { a: newValue / 100 }))
  }

  return (
    <ColorSlider
      label="Alpha"
      max={100}
      onChange={handleChange}
      style={{ background: `linear-gradient(to right, ${lColor}, ${rColor})` }}
      transparent
      value={color.alpha() * 100}
    />
  )
}

interface AlphaSliderProps {
  color: Color
  onChange: (newColor: Color) => void
}
