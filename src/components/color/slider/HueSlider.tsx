import { ColorSlider } from '@/components/color/slider/ColorSlider'
import { type Color, colorWithHue } from '@/libs/color'

export function HueSlider({ color, onChange }: HueSliderProps) {
  function handleChange(newValue: number) {
    onChange(colorWithHue(color, newValue))
  }

  return (
    <ColorSlider
      className="[background:linear-gradient(to_right,#ff0000_0%,#ffff00_17%,#00ff00_33%,#00ffff_50%,#0000ff_67%,#ff00ff_83%,#ff0000_100%)]"
      label="Hue"
      max={360}
      onChange={handleChange}
      value={color.hue()}
    />
  )
}

interface HueSliderProps {
  color: Color
  onChange: (newColor: Color) => void
}
