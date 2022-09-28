import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden'

import { getColorString, type Color } from '@/libs/color'
import { editorFormatSignal } from '@/signals/editor'
import { settingsHexLowercaseSignal } from '@/signals/settings'

export function ColorFormatter({ color }: ColorFormatterProps) {
  const colorStr = getColorString(color, editorFormatSignal.value, { hexLowercase: settingsHexLowercaseSignal.value })

  return (
    <div className="text-2xl font-medium">
      <VisuallyHiddenPrimitive.Root>Current color</VisuallyHiddenPrimitive.Root>
      <div>{colorStr}</div>
    </div>
  )
}

interface ColorFormatterProps {
  color: Color
}
