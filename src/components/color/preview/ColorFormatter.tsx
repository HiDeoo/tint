import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

import { Select } from '@/components/ui/Select'
import { GROUPED_COLOR_FORMATS, type ColorFormat } from '@/constants/color'
import { getColorString, type Color } from '@/libs/color'
import { editorFormatSignal } from '@/signals/editor'

export function ColorFormatter({ color }: ColorFormatterProps) {
  function handleChange(newFormat: ColorFormat) {
    editorFormatSignal.value = newFormat
  }

  return (
    <section className="flex items-center justify-between py-2">
      <div className="text-2xl font-medium">
        <VisuallyHidden.Root>Current color</VisuallyHidden.Root>
        <div>{getColorString(color, editorFormatSignal.value)}</div>
      </div>
      <Select
        items={GROUPED_COLOR_FORMATS}
        onChange={handleChange}
        selectedItem={editorFormatSignal.value}
        triggerLabel="Current color format"
        triggerPlaceholder="Select a color format"
      />
    </section>
  )
}

interface ColorFormatterProps {
  color: Color
}
