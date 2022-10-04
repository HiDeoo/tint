import * as TabsPrimitive from '@radix-ui/react-tabs'

import { type ColorEditorType } from '@/components/color/editor/ColorEditorTypeSwitch'
import { HslEditor } from '@/components/color/editor/HslEditor'
import { RgbEditor } from '@/components/color/editor/RgbEditor'
import { type Color } from '@/libs/color'
import { editorTypeSignal } from '@/signals/editor'

export function ColorEditor({ color, onChange }: ColorEditorProps) {
  return (
    <TabsPrimitive.Root value={editorTypeSignal.value} onValueChange={handleTypeChange}>
      <TabsPrimitive.Content value="hsla" tabIndex={-1}>
        <HslEditor color={color} onChange={onChange} />
      </TabsPrimitive.Content>
      <TabsPrimitive.Content value="rgba" tabIndex={-1}>
        <RgbEditor color={color} onChange={onChange} />
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  )
}

function handleTypeChange(newType: string) {
  editorTypeSignal.value = newType as ColorEditorType

  // The color editor type switch is embedded in the color editor tabs and re-rendered when switching tabs, we need to
  // manually re-focus it.
  requestAnimationFrame(() => {
    document.querySelector<HTMLElement>('#color-editor-type-switch')?.focus()
  })
}

interface ColorEditorProps {
  color: Color
  onChange: (newColor: Color) => void
}
