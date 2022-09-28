import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden'

import { HistoryEntry } from '@/components/color/history/HistoryEntry'
import { type Color, colorFromSerializedColor, getColorString } from '@/libs/color'
import { historySignal } from '@/signals/history'

export function ColorHistory({ onSelect }: ColorHistoryProps) {
  return (
    <section className="mt-2 grid grid-cols-[repeat(auto-fill,_2.5rem)] justify-between gap-3">
      {historySignal.value.length > 0 ? (
        <VisuallyHiddenPrimitive.Root>Color history</VisuallyHiddenPrimitive.Root>
      ) : null}
      {historySignal.value.map((historyEntry) => {
        const color = colorFromSerializedColor(historyEntry)

        return <HistoryEntry key={getColorString(color)} color={color} onSelect={onSelect} />
      })}
    </section>
  )
}

interface ColorHistoryProps {
  onSelect: (newColor: Color) => void
}
