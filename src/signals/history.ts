import { type SerializedColor, type Color, getSerializedColor, isEqualSerializedColor } from '@/libs/color'
import { signalWithStorage } from '@/signals'

// FIXME(HiDeoo)
const maxHistorySize = 5

export const historySignal = signalWithStorage<HistoryEntries>('history', [])

export function addColorToHistory(color: Color) {
  const serializedColor = getSerializedColor(color)

  historySignal.value = [
    serializedColor,
    ...historySignal.value
      .slice(0, maxHistorySize - 1)
      .filter((historyEntry) => !isEqualSerializedColor(historyEntry, serializedColor)),
  ]
}

type HistoryEntries = SerializedColor[]
