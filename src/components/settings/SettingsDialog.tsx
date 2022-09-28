import { GearIcon } from '@radix-ui/react-icons'
import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden'

import { SignalCheckbox } from '@/components/settings/SignalCheckbox'
import { Dialog } from '@/components/ui/Dialog'
import { IconButton } from '@/components/ui/IconButton'
import {
  settingsCopyAfterPickSignal,
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
    </Dialog>
  )
}
