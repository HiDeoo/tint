import { AlphaComponent } from '@/components/color/component/AlphaComponent'
import { Components } from '@/components/color/component/Components'
import { RgbComponent } from '@/components/color/component/RgbComponent'
import { AlphaSlider } from '@/components/color/slider/AlphaSlider'
import { RgbSlider } from '@/components/color/slider/RgbSlider'
import { Sliders } from '@/components/color/slider/Sliders'
import { type Color } from '@/libs/color'

export function RgbEditor({ color, onChange }: RgbEditorProps) {
  return (
    <>
      <Sliders>
        <RgbSlider component="r" color={color} onChange={onChange} />
        <RgbSlider component="g" color={color} onChange={onChange} />
        <RgbSlider component="b" color={color} onChange={onChange} />
        <AlphaSlider color={color} onChange={onChange} />
      </Sliders>
      <Components>
        <RgbComponent component="r" color={color} onChange={onChange} />
        <RgbComponent component="g" color={color} onChange={onChange} />
        <RgbComponent component="b" color={color} onChange={onChange} />
        <AlphaComponent color={color} onChange={onChange} />
      </Components>
    </>
  )
}

interface RgbEditorProps {
  color: Color
  onChange: (newColor: Color) => void
}
