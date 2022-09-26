import { type Color, colorFromString } from '@/libs/color'

export function HistoryEntry({ colorStr, onSelect }: HistoryEntryProps) {
  function handleClick() {
    onSelect(colorFromString(colorStr))
  }

  return (
    <button className="aspect-square w-10 rounded-md" style={{ backgroundColor: colorStr }} onClick={handleClick} />
  )
}

interface HistoryEntryProps {
  colorStr: string
  onSelect: (newColor: Color) => void
}
