import { Tint } from '@/components/app/Tint'
import { Unavailable } from '@/components/app/Unavailable'
import { isColorPickerAvailable } from '@/libs/picker'

export function App() {
  const canPickColor = isColorPickerAvailable()

  if (!canPickColor) {
    return <Unavailable />
  }

  return <Tint />
}
