import { ColorSlider } from '@/components/color/slider/ColorSlider'
import {
  type Color,
  getColorRgbaComponents,
  getColorString,
  type RgbaComponent,
  colorWithRgbaComponents,
} from '@/libs/color'

export function RgbSlider({ color, component, onChange }: RgbSliderProps) {
  const rgbaColor = getColorRgbaComponents(color)

  const lColor = getColorString(colorWithRgbaComponents(color, { a: 1, [component]: 0 }))
  const rColor = getColorString(colorWithRgbaComponents(color, { a: 1, [component]: 255 }))

  function handleChange(newValue: number) {
    onChange(colorWithRgbaComponents(color, { [component]: newValue }))
  }

  return (
    <ColorSlider
      max={255}
      onChange={handleChange}
      style={{ background: `linear-gradient(to right, ${lColor}, ${rColor})` }}
      value={rgbaColor[component]}
    />
  )
}

interface RgbSliderProps {
  color: Color
  component: RgbaComponent
  onChange: (newColor: Color) => void
}
