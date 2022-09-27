import { GearIcon } from '@radix-ui/react-icons'

import { ColorFormatPicker } from '@/components/color/toolbar/ColorFormatPicker'
import { ColorFormatter } from '@/components/color/toolbar/ColorFormatter'
import { IconButton } from '@/components/ui/IconButton'
import { type Color } from '@/libs/color'

export function ColorToolbar({ color }: ColorToolbarProps) {
  return (
    <section className="flex items-center gap-2 py-2">
      <ColorFormatter color={color} />
      <div className="grow" />
      <ColorFormatPicker />
      <IconButton icon={GearIcon} title="Settings" />
    </section>
  )
}

interface ColorToolbarProps {
  color: Color
}
