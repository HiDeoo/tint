import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden'

import { getColorString, type Color } from '@/libs/color'
import { editorFormatSignal } from '@/signals/editor'

export function ColorFormatter({ color }: ColorFormatterProps) {
  const colorStr = getColorString(color, editorFormatSignal.value, true)

  return (
    <div className="flex min-w-0 text-2xl font-medium">
      <VisuallyHiddenPrimitive.Root>Current color</VisuallyHiddenPrimitive.Root>
      <div className="truncate">{colorStr}</div>
    </div>
  )
}

interface ColorFormatterProps {
  color: Color
}
