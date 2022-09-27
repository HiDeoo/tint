import { ColorComponent } from '@/components/color/component/ColorComponent'
import {
  colorWithRgbaComponents,
  type RgbaComponent,
  type Color,
  getColorRgbaComponents,
  getRgbaComponentName,
} from '@/libs/color'

export function RgbComponent({ color, component, onChange }: RgbComponentProps) {
  const rgbaColor = getColorRgbaComponents(color)

  function handleChange(newValue: number) {
    onChange(colorWithRgbaComponents(color, { [component]: newValue }))
  }

  return (
    <ColorComponent
      label={getRgbaComponentName(component)}
      max={255}
      onChange={handleChange}
      value={rgbaColor[component]}
    />
  )
}

interface RgbComponentProps {
  color: Color
  component: RgbaComponent
  onChange: (newColor: Color) => void
}
