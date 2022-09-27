import { Select } from '@/components/ui/Select'
import { GROUPED_COLOR_FORMATS, type ColorFormat } from '@/constants/color'
import { editorFormatSignal } from '@/signals/editor'

export function ColorFormatPicker() {
  function handleChange(newFormat: ColorFormat) {
    editorFormatSignal.value = newFormat
  }

  return (
    <Select
      items={GROUPED_COLOR_FORMATS}
      onChange={handleChange}
      selectedItem={editorFormatSignal.value}
      triggerLabel="Current color format"
      triggerPlaceholder="Select a color format"
    />
  )
}
