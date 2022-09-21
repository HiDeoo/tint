import { isColorPickerAvailable } from '../libs/picker'

import { Tint } from './Tint'
import { Unavailable } from './Unavailable'

export function App() {
  const canPickColor = isColorPickerAvailable()

  if (!canPickColor) {
    return <Unavailable />
  }

  return <Tint />
}
