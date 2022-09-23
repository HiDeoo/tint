import { AlphaComponent } from '@/components/color/component/AlphaComponent'
import { HueComponent } from '@/components/color/component/HueComponent'
import { LightnessComponent } from '@/components/color/component/LightnessComponent'
import { SaturationComponent } from '@/components/color/component/SaturationComponent'
import { AlphaSlider } from '@/components/color/slider/AlphaSlider'
import { HueSlider } from '@/components/color/slider/HueSlider'
import { LightnessSlider } from '@/components/color/slider/LightnessSlider'
import { SaturationSlider } from '@/components/color/slider/SaturationSlider'
import { type Color } from '@/libs/color'

export function HslEditor({ color, onChange, typeSwitch }: HslEditorProps) {
  return (
    <>
      <HueSlider color={color} onChange={onChange} />
      <br />
      <SaturationSlider color={color} onChange={onChange} />
      <br />
      <LightnessSlider color={color} onChange={onChange} />
      <br />
      <AlphaSlider color={color} onChange={onChange} />
      <br />
      {typeSwitch}
      <br />
      <HueComponent color={color} onChange={onChange} />
      <br />
      <SaturationComponent color={color} onChange={onChange} />
      <br />
      <LightnessComponent color={color} onChange={onChange} />
      <br />
      <AlphaComponent color={color} onChange={onChange} />
    </>
  )
}

interface HslEditorProps {
  color: Color
  onChange: (newColor: Color) => void
  typeSwitch: React.ReactNode
}
