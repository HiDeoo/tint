import * as ToastPrimitive from '@radix-ui/react-toast'
import clsx from 'clsx'

import { Toast } from '@/components/ui/Toast'
import { toastsSignal } from '@/signals/toasts'

export function Toaster() {
  return (
    <ToastPrimitive.Provider duration={15_000}>
      <ToastPrimitive.Viewport
        className={clsx(
          'fixed top-0 right-0 z-50 flex max-h-screen max-h-screen max-w-md flex-col gap-2',
          'overflow-y-auto overflow-x-hidden focus:outline-none',
          toastsSignal.value.length > 0 && 'focus-visible:(ring-2 ring-blue-600) p-2.5'
        )}
      />
      {toastsSignal.value.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </ToastPrimitive.Provider>
  )
}
