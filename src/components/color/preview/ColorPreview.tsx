import { ColorFormatter } from '@/components/color/preview/ColorFormatter'
import { ColorPicker } from '@/components/color/preview/ColorPicker'
import { type Color } from '@/libs/color'

export function ColorPreview({ color, onPick }: ColorPreviewProps) {
  return (
    <>
      <ColorPicker color={color} onPick={onPick} />
      <ColorFormatter color={color} />
    </>
  )
}

interface ColorPreviewProps {
  color: Color
  onPick: (newColor: Color) => void
}
