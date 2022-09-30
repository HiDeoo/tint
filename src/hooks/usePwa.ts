import { useEffect } from 'react'

import { pwaDeferrefPromptEventSignal } from '@/signals/pwa'

export function usePwa() {
  useEffect(() => {
    function beforeInstallPrompt(event: BeforeInstallPromptEvent) {
      event.preventDefault()

      pwaDeferrefPromptEventSignal.value = event
    }

    window.addEventListener('beforeinstallprompt', beforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallPrompt)
    }
  }, [])
}
