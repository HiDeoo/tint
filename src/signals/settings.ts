import { signal } from '@preact/signals-react'

import { signalWithStorage } from '@/signals'

export const settingsDialogOpenedSignal = signal(false)

export const settingsHexLowercaseSignal = signalWithStorage('settingsHexLowercase', true)
