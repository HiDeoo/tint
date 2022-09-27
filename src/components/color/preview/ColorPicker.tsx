import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import clsx from 'clsx'

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
      className={clsx(
        'relative mb-2 h-32 w-full overflow-hidden rounded-md ring-blue-600 ring-offset-2 ring-offset-zinc-900',
        'hover:(ring-2.5)',
        'focus-visible:(ring-2.5 outline-none)'
      )}
      onClick={handleClick}
      style={{ backgroundColor: getColorString(color) }}
      title="Pick a new color"
      type="button"
    >
      <VisuallyHidden.Root>Pick a new color</VisuallyHidden.Root>
      <Checkerboard className="rounded-lg" />
    </button>
  )
}

interface ColorPickerProps {
  color: Color
  onPick: (newColor: Color) => void
}
