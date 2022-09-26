import { AlphaComponent } from '@/components/color/component/AlphaComponent'
import { Components } from '@/components/color/component/Components'
import { HueComponent } from '@/components/color/component/HueComponent'
import { LightnessComponent } from '@/components/color/component/LightnessComponent'
import { SaturationComponent } from '@/components/color/component/SaturationComponent'
import { AlphaSlider } from '@/components/color/slider/AlphaSlider'
import { HueSlider } from '@/components/color/slider/HueSlider'
import { LightnessSlider } from '@/components/color/slider/LightnessSlider'
import { SaturationSlider } from '@/components/color/slider/SaturationSlider'
import { Sliders } from '@/components/color/slider/Sliders'
import { type Color } from '@/libs/color'

export function HslEditor({ color, onChange }: HslEditorProps) {
  return (
    <>
      <Sliders>
        <HueSlider color={color} onChange={onChange} />
        <SaturationSlider color={color} onChange={onChange} />
        <LightnessSlider color={color} onChange={onChange} />
        <AlphaSlider color={color} onChange={onChange} />
      </Sliders>
      <Components>
        <HueComponent color={color} onChange={onChange} />
        <SaturationComponent color={color} onChange={onChange} />
        <LightnessComponent color={color} onChange={onChange} />
        <AlphaComponent color={color} onChange={onChange} />
      </Components>
    </>
  )
}

interface HslEditorProps {
  color: Color
  onChange: (newColor: Color) => void
}
