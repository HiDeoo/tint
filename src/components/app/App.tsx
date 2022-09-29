import '@/styles/global.css'

import { Tint } from '@/components/app/Tint'
import { Unavailable } from '@/components/app/Unavailable'
import { Toaster } from '@/components/ui/Toaster'
import { isColorPickerAvailable } from '@/libs/picker'

export function App() {
  const canPickColor = isColorPickerAvailable()

  return (
    <>
      {canPickColor ? <Tint /> : <Unavailable />}
      <Toaster />
    </>
  )
}
