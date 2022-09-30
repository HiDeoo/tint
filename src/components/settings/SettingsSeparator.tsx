import * as SeparatorPrimitive from '@radix-ui/react-separator'
import clsx from 'clsx'

export function SettingsSeparator({ orientation }: SettingsSeparatorProps) {
  return <SeparatorPrimitive.Root className={clsx('bg-zinc-700', orientation === 'vertical' ? 'w-px' : 'my-4 h-px')} />
}

interface SettingsSeparatorProps {
  orientation: SeparatorPrimitive.Orientation
}
