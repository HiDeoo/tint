export const SHORTCUTS = {
  CopyColor: { keys: 'ctrl+c', label: 'Copy Color' },
  PasteColor: { keys: 'ctrl+v', label: 'Paste Color' },
}

export interface Shortcut {
  keys: string
  label: string
}
