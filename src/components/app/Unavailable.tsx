import { CrumpledPaperIcon } from '@radix-ui/react-icons'

import { Link } from '@/components/ui/Link'
import { Nis } from '@/components/ui/Nis'

export function Unavailable() {
  return (
    <Nis icon={CrumpledPaperIcon} title="Unsupported browser">
      The EyeDropper API is{' '}
      <Link href="https://caniuse.com/mdn-api_eyedropper" target="_blank">
        not yet available
      </Link>{' '}
      in your browser.
    </Nis>
  )
}
