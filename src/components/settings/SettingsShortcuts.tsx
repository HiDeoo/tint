import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden'
import { Fragment } from 'react'

import { SettingsSeparator } from '@/components/settings/SettingsSeparator'
import { SettingsShortcut } from '@/components/settings/SettingsShortcut'
import { SHORTCUTS } from '@/constants/shortcut'

const shortcuts = Object.values(SHORTCUTS)

export function SettingsShortcuts() {
  return (
    <div className="grid grid-cols-[1fr_1px_1fr] justify-items-center gap-4">
      <VisuallyHiddenPrimitive.Root asChild>
        <div>List of available keyboard shortcuts.</div>
      </VisuallyHiddenPrimitive.Root>
      {shortcuts.map((shortcut, index) => (
        <Fragment key={shortcut.keys}>
          <SettingsShortcut shortcut={shortcut} />
          {index < shortcuts.length - 1 ? <SettingsSeparator orientation="vertical" /> : null}
        </Fragment>
      ))}
    </div>
  )
}
