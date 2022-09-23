import { AlphaComponent } from '@/components/color/component/AlphaComponent'
import { RgbComponent } from '@/components/color/component/RgbComponent'
import { AlphaSlider } from '@/components/color/slider/AlphaSlider'
import { RgbSlider } from '@/components/color/slider/RgbSlider'
import { type Color } from '@/libs/color'

export function RgbEditor({ color, onChange, typeSwitch }: RgbEditorProps) {
  return (
    <>
      <RgbSlider component="r" color={color} onChange={onChange} />
      <br />
      <RgbSlider component="g" color={color} onChange={onChange} />
      <br />
      <RgbSlider component="b" color={color} onChange={onChange} />
      <br />
      <AlphaSlider color={color} onChange={onChange} />
      <br />
      {typeSwitch}
      <br />
      <RgbComponent component="r" color={color} onChange={onChange} />
      <br />
      <RgbComponent component="g" color={color} onChange={onChange} />
      <br />
      <RgbComponent component="b" color={color} onChange={onChange} />
      <br />
      <AlphaComponent color={color} onChange={onChange} />
    </>
  )
}

interface RgbEditorProps {
  color: Color
  onChange: (newColor: Color) => void
  typeSwitch: React.ReactNode
}
