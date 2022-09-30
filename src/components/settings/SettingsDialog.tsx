import { GearIcon } from '@radix-ui/react-icons'
import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden'

import { SettingsSeparator } from '@/components/settings/SettingsSeparator'
import { SettingsShortcuts } from '@/components/settings/SettingsShortcuts'
import { SignalCheckbox } from '@/components/settings/SignalCheckbox'
import { Dialog } from '@/components/ui/Dialog'
import { IconButton } from '@/components/ui/IconButton'
import {
  settingsCopyAfterPickSignal,
  settingsCopySoundSignal,
  settingsDialogOpenedSignal,
  settingsHexLowercaseSignal,
  settingsHexPrefixSignal,
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
        id="settings-hex-prefix"
        label={
          <>
            Use <span aria-hidden>#</span>
            <VisuallyHiddenPrimitive.Root>number sign</VisuallyHiddenPrimitive.Root> prefix for hexadecimal colors
          </>
        }
        signal={settingsHexPrefixSignal}
      />
      <SignalCheckbox
        id="settings-hex-lowercase"
        label="Use lowercase for hexadecimal colors"
        signal={settingsHexLowercaseSignal}
      />

      <SettingsSeparator orientation="horizontal" />
      <SettingsShortcuts />
    </Dialog>
  )
}
