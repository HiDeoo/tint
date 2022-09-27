import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

import { getColorString, type Color } from '@/libs/color'
import { editorFormatSignal } from '@/signals/editor'

export function ColorFormatter({ color }: ColorFormatterProps) {
  return (
    <div className="text-2xl font-medium">
      <VisuallyHidden.Root>Current color</VisuallyHidden.Root>
      <div>{getColorString(color, editorFormatSignal.value)}</div>
    </div>
  )
}

interface ColorFormatterProps {
  color: Color
}
