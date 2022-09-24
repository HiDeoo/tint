import { type Color, getColorString } from '@/libs/color'
import { pickColor } from '@/libs/picker'

export function ColorPicker({ color, onPick }: ColorPickerProps) {
  async function handleClick() {
    const color = await pickColor()

    onPick(color)
  }

  return <button className="h-16 w-16" onClick={handleClick} style={{ backgroundColor: getColorString(color) }} />
}

interface ColorPickerProps {
  color: Color
  onPick: (newColor: Color) => void
}
