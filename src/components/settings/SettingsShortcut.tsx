import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden'
import clsx from 'clsx'
import { Fragment } from 'react'

import { type Shortcut } from '@/constants/shortcut'
import { getShortcutReadableKeys } from '@/libs/shortcut'

export function SettingsShortcut({ shortcut }: SettingsShortcutProps) {
  const readableKeys = getShortcutReadableKeys(shortcut)

  return (
    <>
      <VisuallyHiddenPrimitive.Root asChild>
        <div>
          Shortcut {readableKeys.a11y} to {shortcut.label}.
        </div>
      </VisuallyHiddenPrimitive.Root>
      <div className="flex select-none items-center gap-4" aria-hidden>
        <div className="flex gap-1 rounded-md bg-zinc-600/75 p-1">
          {readableKeys.keys.map((key) => (
            <Fragment key={key}>
              <kbd
                className={clsx(
                  'min-w-8 bg-zinc-800/65 flex items-center justify-center rounded px-2 text-center font-medium',
                  key === '⌘' ? 'py-0.5 text-lg' : 'py-1.5 text-sm'
                )}
              >
                {key}
              </kbd>
            </Fragment>
          ))}
        </div>
        <div>{shortcut.label}</div>
      </div>
    </>
  )
}

interface SettingsShortcutProps {
  shortcut: Shortcut
}
