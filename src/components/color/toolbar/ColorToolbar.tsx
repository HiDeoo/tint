import { CopyIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'

import { ColorFormatPicker } from '@/components/color/toolbar/ColorFormatPicker'
import { ColorFormatter } from '@/components/color/toolbar/ColorFormatter'
import { PwaPrompt } from '@/components/pwa/PwaPrompt'
import { SettingsDialog } from '@/components/settings/SettingsDialog'
import { IconButton } from '@/components/ui/IconButton'
import { writeColorToClipboard } from '@/libs/clipboard'
import { type Color } from '@/libs/color'

export function ColorToolbar({ color }: ColorToolbarProps) {
  function handleCopyColorClick() {
    writeColorToClipboard(color)
  }

  return (
    <section className="flex max-w-[100vw] items-center gap-2 py-2">
      <ColorFormatter color={color} />
      <IconButton
        className={clsx(
          '[&>svg]:(w-6 h-6) relative top-px !w-auto !bg-transparent !ring-offset-0',
          'hover:text-blue-600 active:text-blue-500',
          'focus-visible:(!ring-0 text-blue-600)'
        )}
        icon={CopyIcon}
        onClick={handleCopyColorClick}
        title="Copy color to clipboard"
      />
      <div className="grow" />
      <ColorFormatPicker />
      <SettingsDialog />
      <PwaPrompt />
    </section>
  )
}

interface ColorToolbarProps {
  color: Color
}
