import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden'
import clsx from 'clsx'

import { Checkerboard } from '@/components/color/slider/Checkerboard'
import { writeColorToClipboard } from '@/libs/clipboard'
import { type Color, getColorString } from '@/libs/color'
import { pickColor } from '@/libs/picker'
import { settingsCopyAfterPickSignal } from '@/signals/settings'

export function ColorPicker({ color, onPick }: ColorPickerProps) {
  async function handleClick() {
    const color = await pickColor()

    if (color) {
      onPick(color)

      if (settingsCopyAfterPickSignal.value) {
        writeColorToClipboard(color)
      }
    }
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
      <VisuallyHiddenPrimitive.Root>Pick a new color</VisuallyHiddenPrimitive.Root>
      <Checkerboard className="rounded-lg" />
    </button>
  )
}

interface ColorPickerProps {
  color: Color
  onPick: (newColor: Color) => void
}
