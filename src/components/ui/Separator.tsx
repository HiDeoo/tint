import * as SeparatorPrimitive from '@radix-ui/react-separator'
import clsx from 'clsx'

export function Separator({ decorative = false, orientation }: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      className={clsx('bg-zinc-700', orientation === 'vertical' ? 'w-px' : 'my-4 h-px')}
      decorative={decorative}
    />
  )
}

interface SeparatorProps {
  decorative?: boolean
  orientation: SeparatorPrimitive.Orientation
}
