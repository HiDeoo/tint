import { type Shortcut } from '@/constants/shortcut'
import { isApplePlatform } from '@/libs/html'

export function getShortcutKeys(shortcut: Shortcut) {
  let keys = shortcut.keys

  if (isApplePlatform) {
    keys = keys.replaceAll('ctrl', 'cmd')
  }

  return keys
}

export function getShortcutReadableKeys(shortcut: Shortcut): ReadableShortcutKeys {
  const readableKeys = shortcut.keys.split('+').map((key) => {
    if (key === 'ctrl') {
      return isApplePlatform ? '⌘' : 'Ctrl'
    }

    return key.toUpperCase()
  })

  return { a11y: readableKeys.join('+'), keys: readableKeys }
}

interface ReadableShortcutKeys {
  a11y: string
  keys: string[]
}
