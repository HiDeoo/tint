import { type IconProps } from '@radix-ui/react-icons/dist/types'
import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden'
import clsx from 'clsx'
import { forwardRef } from 'react'

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { className, icon, iconClassName, title, ...props },
  ref
) {
  const IconComponent = icon

  return (
    <button
      className={clsx(
        'flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-zinc-700/75',
        'hover:bg-zinc-700 active:bg-zinc-600',
        'focus-visible:(ring-2 outline-none) ring-blue-600 ring-offset-2 ring-offset-zinc-900',
        className
      )}
      ref={ref}
      title={title}
      type="button"
      {...props}
    >
      {title && title.length > 0 ? <VisuallyHiddenPrimitive.Root>{title}</VisuallyHiddenPrimitive.Root> : null}
      <IconComponent aria-hidden className={iconClassName} />
    </button>
  )
})

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<IconProps>
  iconClassName?: string
}
