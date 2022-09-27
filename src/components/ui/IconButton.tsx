import { type IconProps } from '@radix-ui/react-icons/dist/types'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import clsx from 'clsx'

export function IconButton({ icon, title, ...props }: IconButtonProps) {
  const IconComponent = icon

  return (
    <button
      type="button"
      {...props}
      className={clsx(
        'flex h-10 w-10 items-center justify-center rounded-md bg-zinc-700/75 hover:bg-zinc-700',
        'focus-visible:(ring-2 outline-none) ring-blue-600 ring-offset-2 ring-offset-zinc-900'
      )}
    >
      {title && title.length > 0 ? <VisuallyHidden.Root>{title}</VisuallyHidden.Root> : null}
      <IconComponent aria-hidden />
    </button>
  )
}

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<IconProps>
}
