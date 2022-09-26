import { Checkerboard } from '@/components/color/slider/Checkerboard'
import { type Color, getColorString } from '@/libs/color'
import { pickColor } from '@/libs/picker'

export function ColorPicker({ color, onPick }: ColorPickerProps) {
  async function handleClick() {
    const color = await pickColor()

    onPick(color)
  }

  return (
    <button
      className="relative mb-2 h-32 w-full overflow-hidden rounded-md"
      onClick={handleClick}
      style={{ backgroundColor: getColorString(color) }}
    >
      <Checkerboard className="rounded-lg" />
    </button>
  )
}

interface ColorPickerProps {
  color: Color
  onPick: (newColor: Color) => void
}
