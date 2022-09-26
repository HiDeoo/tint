import { Select } from '@/components/ui/Select'
import { COLOR_FORMATS, type ColorFormat } from '@/constants/color'
import { getColorString, type Color } from '@/libs/color'
import { editorFormatSignal } from '@/signals/editor'

export function ColorFormatter({ color }: ColorFormatterProps) {
  function handleChange(newFormat: ColorFormat) {
    editorFormatSignal.value = newFormat
  }

  return (
    <section className="flex justify-between py-2">
      <div className="text-lg font-medium">{getColorString(color, editorFormatSignal.value)}</div>
      <Select
        items={COLOR_FORMATS}
        onChange={handleChange}
        selectedItem={editorFormatSignal.value}
        triggerLabel="Food"
        triggerPlaceholder="Select a fruit"
      />
    </section>
  )
}

interface ColorFormatterProps {
  color: Color
}
