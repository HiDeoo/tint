import { DownloadIcon } from '@radix-ui/react-icons'

import { IconButton } from '@/components/ui/IconButton'
import { pwaDeferrefPromptEventSignal } from '@/signals/pwa'

export function PwaPrompt() {
  if (!pwaDeferrefPromptEventSignal.value) {
    return null
  }

  return <IconButton icon={DownloadIcon} title="Install App" onClick={handleInstallClick} />
}

function handleInstallClick() {
  pwaDeferrefPromptEventSignal.value?.prompt()

  pwaDeferrefPromptEventSignal.value = undefined
}
