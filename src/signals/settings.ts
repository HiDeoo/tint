import { signal } from '@preact/signals-react'

import { signalWithStorage } from '@/signals'

export const settingsDialogOpenedSignal = signal(true)

export const settingsCopyAfterPickSignal = signalWithStorage('settingsCopyAfterPick', true)
export const settingsCopySoundSignal = signalWithStorage('settingsCopySound', true)

export const settingsHexLowercaseSignal = signalWithStorage('settingsHexLowercase', true)
export const settingsHexPrefixSignal = signalWithStorage('settingsHexPrefix', true)
