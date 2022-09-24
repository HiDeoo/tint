import { Select } from '@/components/ui/Select'
import { type ColorFormat, COLOR_FORMATS, getColorString, type Color } from '@/libs/color'
import { editorExportFormatSignal } from '@/signals/editor'

export function ColorFormatter({ color }: ColorFormatterProps) {
  function handleChange(newFormat: ColorFormat) {
    editorExportFormatSignal.value = newFormat
  }

  return (
    <>
      <div>{getColorString(color, editorExportFormatSignal.value)}</div>
      <div>
        <Select
          items={COLOR_FORMATS}
          onChange={handleChange}
          selectedItem={editorExportFormatSignal.value}
          triggerLabel="Food"
          triggerPlaceholder="Select a fruit"
        />
      </div>
    </>
  )
}

interface ColorFormatterProps {
  color: Color
}
