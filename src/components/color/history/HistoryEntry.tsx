import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import clsx from 'clsx'

import { type Color, getColorString } from '@/libs/color'
import { editorFormatSignal } from '@/signals/editor'

export function HistoryEntry({ color, onSelect }: HistoryEntryProps) {
  const colorStr = getColorString(color, editorFormatSignal.value)

  function handleClick() {
    onSelect(color)
  }

  return (
    <button
      className={clsx(
        'aspect-square w-10 rounded-md outline-none ring-blue-600 ring-offset-2 ring-offset-zinc-900',
        'focus-visible:(ring-2) hover:(ring-2)'
      )}
      onClick={handleClick}
      style={{ backgroundColor: getColorString(color) }}
      title={colorStr}
      type="button"
    >
      <VisuallyHidden.Root>{colorStr}</VisuallyHidden.Root>
    </button>
  )
}

interface HistoryEntryProps {
  color: Color
  onSelect: (newColor: Color) => void
}
