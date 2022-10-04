import { GearIcon } from '@radix-ui/react-icons'
import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden'

import { SettingsShortcuts } from '@/components/settings/SettingsShortcuts'
import { SignalCheckbox } from '@/components/settings/SignalCheckbox'
import { Dialog } from '@/components/ui/Dialog'
import { IconButton } from '@/components/ui/IconButton'
import { Separator } from '@/components/ui/Separator'
import {
  settingsCopyAfterPickSignal,
  settingsCopySoundSignal,
  settingsDialogOpenedSignal,
  settingsHexLowercaseSignal,
  settingsCssHexPrefixSignal,
} from '@/signals/settings'

export function SettingsDialog() {
  function handleToggle(newOpened: boolean) {
    settingsDialogOpenedSignal.value = newOpened
  }

  return (
    <Dialog
      onToggle={handleToggle}
      opened={settingsDialogOpenedSignal.value}
      title="Settings"
      trigger={<IconButton icon={GearIcon} title="Settings" />}
    >
      <SignalCheckbox
        id="settings-copy-after-pick"
        label="Copy color to the clipboard after picking"
        signal={settingsCopyAfterPickSignal}
      />
      <SignalCheckbox
        id="settings-copy-sound"
        label="Play sound after copying a color to the clipboard"
        signal={settingsCopySoundSignal}
      />
      <SignalCheckbox
        id="settings-css-hex-prefix"
        label={
          <>
            Use <span aria-hidden>#</span>
            <VisuallyHiddenPrimitive.Root>number sign</VisuallyHiddenPrimitive.Root> prefix for CSS hexadecimal colors
          </>
        }
        signal={settingsCssHexPrefixSignal}
      />
      <SignalCheckbox
        id="settings-hex-lowercase"
        label="Use lowercase for hexadecimal colors"
        signal={settingsHexLowercaseSignal}
      />

      <Separator orientation="horizontal" />
      <SettingsShortcuts />
    </Dialog>
  )
}
