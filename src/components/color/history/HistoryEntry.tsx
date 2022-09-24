import { type Color, colorFromString } from '@/libs/color'

export function HistoryEntry({ colorStr, onSelect }: HistoryEntryProps) {
  function handleClick() {
    onSelect(colorFromString(colorStr))
  }

  return <button className="h-5 w-5" style={{ backgroundColor: colorStr }} onClick={handleClick} />
}

interface HistoryEntryProps {
  colorStr: string
  onSelect: (newColor: Color) => void
}
