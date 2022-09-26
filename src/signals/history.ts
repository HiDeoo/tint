import { type SerializedColor, type Color, getSerializedColor, isEqualSerializedColor } from '@/libs/color'
import { signalWithStorage } from '@/signals'

const maxHistorySize = 10

export const historySignal = signalWithStorage<HistoryEntries>('history', [])

export function addColorToHistory(color: Color) {
  const serializedColor = getSerializedColor(color)

  historySignal.value = [
    serializedColor,
    ...historySignal.value
      .filter((historyEntry) => !isEqualSerializedColor(historyEntry, serializedColor))
      .slice(0, maxHistorySize - 1),
  ]
}

type HistoryEntries = SerializedColor[]
