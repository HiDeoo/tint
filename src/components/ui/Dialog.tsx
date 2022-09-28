import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden'
import clsx from 'clsx'

export function Dialog({ children, description, onToggle, opened, title, trigger }: DialogProps) {
  return (
    <DialogPrimitive.Root open={opened} onOpenChange={onToggle}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={clsx(
            'xs:items-center fixed inset-0 z-20 grid items-start justify-items-center bg-zinc-900/80 p-8'
          )}
        >
          <DialogPrimitive.Content className="w-100 max-w-128 w-full overflow-hidden rounded-md bg-zinc-800 shadow-md shadow-zinc-800/50">
            <header className="flex items-center justify-between bg-black/50 p-4">
              <DialogPrimitive.Title className="text-lg font-semibold">{title}</DialogPrimitive.Title>
              <VisuallyHiddenPrimitive.Root asChild>
                <DialogPrimitive.Description>{description}</DialogPrimitive.Description>
              </VisuallyHiddenPrimitive.Root>
              <DialogPrimitive.Close
                className={clsx(
                  'rounded-full p-1 hover:bg-zinc-700',
                  'focus-visible:(ring-2 ring-offset-zinc-900) outline-none ring-blue-600 ring-offset-2'
                )}
              >
                <Cross2Icon className="h-5 w-5" />
              </DialogPrimitive.Close>
            </header>
            <div className="p-4">{children}</div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

interface DialogProps {
  children: React.ReactNode
  description: string
  onToggle: (newOpened: boolean) => void
  opened: boolean
  title: string
  trigger: React.ReactNode
}
