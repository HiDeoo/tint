import { signal } from '@preact/signals-react'

export const pwaDeferrefPromptEventSignal = signal<BeforeInstallPromptEvent | undefined>(undefined)
