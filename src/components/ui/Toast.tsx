import * as ToastPrimitive from '@radix-ui/react-toast'
import clsx from 'clsx'
import { useRef } from 'react'

import { removeToast, type WarmToast } from '@/signals/toasts'

export function Toast({ toast }: ToastProps) {
  const toastRoot = useRef<HTMLLIElement>(null)

  function handleToastOpenChange(opened: boolean) {
    if (opened) {
      return
    }

    toastRoot.current?.addEventListener(
      'animationend',
      () => {
        removeToast(toast)
      },
      { once: true }
    )
  }

  const isError = toast.intent === 'error'
  const isSuccess = toast.intent === 'success'

  return (
    <ToastPrimitive.Root
      className={clsx(
        'toast',
        isError ? 'bg-red-600' : isSuccess ? 'bg-green-700 font-bold' : 'bg-zinc-800',
        'w-fit self-end rounded-md p-3 shadow shadow-black/50 focus:outline-none',
        'focus-visible:(ring-2 ring-offset-zinc-900) ring-blue-600 ring-offset-2 focus:outline-none',
        'motion-safe:ds-open:(animated animated-bounce-in-right animated-faster)',
        'motion-safe:ds-closed:(animated animated-bounce-out-right animated-faster)'
      )}
      duration={isError ? 4000 : 1000}
      onOpenChange={handleToastOpenChange}
      ref={toastRoot}
    >
      <ToastPrimitive.Description>{toast.message}</ToastPrimitive.Description>
    </ToastPrimitive.Root>
  )
}

interface ToastProps {
  toast: WarmToast
}
