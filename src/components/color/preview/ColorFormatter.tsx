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
      <div className="text-2xl font-medium">{getColorString(color, editorFormatSignal.value)}</div>
      <Select
        items={GROUPED_COLOR_FORMATS}
        onChange={handleChange}
        selectedItem={editorFormatSignal.value}
        triggerLabel="// TODO"
        triggerPlaceholder="// TODO"
      />
    </section>
  )
}

interface ColorFormatterProps {
  color: Color
}
