import { HistoryEntry } from '@/components/color/history/HistoryEntry'
import { type Color, colorFromSerializedColor, getColorString } from '@/libs/color'
import { historySignal } from '@/signals/history'

export function ColorHistory({ onSelect }: ColorHistoryProps) {
  return (
    <>
      {historySignal.value.map((historyEntry) => {
        const colorStr = getColorString(colorFromSerializedColor(historyEntry))

        return <HistoryEntry key={colorStr} colorStr={colorStr} onSelect={onSelect} />
      })}
    </>
  )
}

interface ColorHistoryProps {
  onSelect: (newColor: Color) => void
}
