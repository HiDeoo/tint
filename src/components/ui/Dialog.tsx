import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden'
import clsx from 'clsx'

export function Dialog({ children, onToggle, opened, title, trigger }: DialogProps) {
  return (
    <DialogPrimitive.Root open={opened} onOpenChange={onToggle}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={clsx(
            'xs:items-center fixed inset-0 z-20 grid items-start justify-items-center bg-zinc-900/80 p-8',
            'motion-safe:ds-open:(animated animated-fade-in)',
            'motion-safe:ds-closed:(animated animated-fade-out)'
          )}
          style={{ '--une-animated-duration': '200ms' }}
        >
          <DialogPrimitive.Content
            className={clsx(
              'w-100 max-w-128 relative w-full overflow-hidden rounded-md bg-zinc-800 p-4 shadow shadow-black/50',
              'motion-safe:ds-open:(animated animated-zoom-in)',
              'motion-safe:ds-closed:(animated animated-zoom-out)'
            )}
            style={{ '--une-animated-duration': '250ms' }}
          >
            <DialogPrimitive.Title className="-mx-4 -mt-4 mb-4 bg-black/50 px-4 py-3 text-lg font-semibold">
              {title}
            </DialogPrimitive.Title>
            {children}
            <DialogPrimitive.Close
              className={clsx(
                'absolute top-3 right-3 rounded-full p-1 hover:bg-zinc-700',
                'focus-visible:(ring-2 ring-offset-zinc-900) outline-none ring-blue-600 ring-offset-2'
              )}
            >
              <VisuallyHiddenPrimitive.Root>Close {title} dialog</VisuallyHiddenPrimitive.Root>
              <Cross2Icon aria-hidden className="h-5 w-5" />
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

interface DialogProps {
  children: React.ReactNode
  onToggle: (newOpened: boolean) => void
  opened: boolean
  title: string
  trigger: React.ReactNode
}
