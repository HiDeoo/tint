import { HistoryEntry } from '@/components/color/history/HistoryEntry'
import { type Color, colorFromSerializedColor, getColorString } from '@/libs/color'
import { historySignal } from '@/signals/history'

export function ColorHistory({ onSelect }: ColorHistoryProps) {
  return (
    <section className="mt-2 grid grid-cols-[repeat(auto-fill,_2.5rem)] justify-between gap-3">
      {historySignal.value.map((historyEntry) => {
        const colorStr = getColorString(colorFromSerializedColor(historyEntry))

        return <HistoryEntry key={colorStr} colorStr={colorStr} onSelect={onSelect} />
      })}
    </section>
  )
}

interface ColorHistoryProps {
  onSelect: (newColor: Color) => void
}
