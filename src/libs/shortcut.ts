import { type Shortcut } from '@/constants/shortcut'
import { isApplePlatform } from '@/libs/html'

export function getShortcutKeys(shortcut: Shortcut) {
  let keys = shortcut.keys

  if (isApplePlatform) {
    keys = keys.replaceAll('ctrl', 'cmd')
  }

  return keys
}
