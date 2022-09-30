import { CrossCircledIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { ErrorBoundary as Boundary, type FallbackProps } from 'react-error-boundary'

import { Nis } from '@/components/ui/Nis'

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  return <Boundary FallbackComponent={ErrorBoundaryFallback}>{children}</Boundary>
}

export function ErrorBoundaryFallback({ error, resetErrorBoundary }: FallbackProps) {
  console.error(error)

  return (
    <Nis icon={CrossCircledIcon} title="Oops, something went wrong!">
      <button
        className={clsx(
          'rounded text-blue-600 ring-blue-600 ring-offset-zinc-800',
          'focus-visible:(ring-2 ring-offset-2) hover:underline focus:outline-none'
        )}
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </Nis>
  )
}

interface ErrorBoundaryProps {
  children: React.ReactNode
}
