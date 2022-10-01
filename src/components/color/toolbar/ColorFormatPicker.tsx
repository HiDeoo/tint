import { Select } from '@/components/ui/Select'
import { type ColorFormatName, GROUPED_COLOR_FORMAT_NAMES, COLOR_FORMATS } from '@/constants/color'
import { editorFormatSignal } from '@/signals/editor'

export function ColorFormatPicker() {
  function handleChange(newFormat: ColorFormatName) {
    editorFormatSignal.value = newFormat
  }

  return (
    <Select
      itemFormatter={formatItem}
      items={GROUPED_COLOR_FORMAT_NAMES}
      onChange={handleChange}
      selectedItem={editorFormatSignal.value}
      triggerLabel="Current color format"
      triggerPlaceholder="Select a color format"
      valueFormatter={formatValue}
    />
  )
}

function formatItem(formatName: ColorFormatName) {
  return COLOR_FORMATS[formatName].label
}

function formatValue(formatName: ColorFormatName) {
  const format = COLOR_FORMATS[formatName]

  return (
    <>
      <span className="text-zinc-400">{format.group} </span>
      {format.label}
    </>
  )
}
