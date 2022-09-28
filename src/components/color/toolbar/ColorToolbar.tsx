import { ColorFormatPicker } from '@/components/color/toolbar/ColorFormatPicker'
import { ColorFormatter } from '@/components/color/toolbar/ColorFormatter'
import { SettingsDialog } from '@/components/settings/SettingsDialog'
import { type Color } from '@/libs/color'

export function ColorToolbar({ color }: ColorToolbarProps) {
  return (
    <section className="flex items-center gap-2 py-2">
      <ColorFormatter color={color} />
      <div className="grow" />
      <ColorFormatPicker />
      <SettingsDialog />
    </section>
  )
}

interface ColorToolbarProps {
  color: Color
}
