import clsx from 'clsx'

import { type Color, colorFromString } from '@/libs/color'

export function HistoryEntry({ colorStr, onSelect }: HistoryEntryProps) {
  function handleClick() {
    onSelect(colorFromString(colorStr))
  }

  return (
    <button
      className={clsx(
        'aspect-square w-10 rounded-md outline-none ring-blue-600 ring-offset-2 ring-offset-zinc-900',
        'focus-visible:(ring-2) hover:(ring-2)'
      )}
      style={{ backgroundColor: colorStr }}
      onClick={handleClick}
    />
  )
}

interface HistoryEntryProps {
  colorStr: string
  onSelect: (newColor: Color) => void
}
