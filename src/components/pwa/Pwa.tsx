import { Cross2Icon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { useRegisterSW } from 'virtual:pwa-register/react'

import { IconButton } from '@/components/ui/IconButton'

export function Pwa() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  function handleUpdate() {
    updateServiceWorker(true)
  }

  function handleDismiss() {
    setNeedRefresh(false)
  }

  if (!needRefresh) {
    return null
  }

  return (
    <div
      className={clsx(
        'pwa-update',
        'mb-4 flex items-center gap-2 rounded-md bg-amber-400 py-2.5 pl-3 pr-2 text-lg font-medium text-zinc-800'
      )}
    >
      <div>
        A new version is available.
        <button
          onClick={handleUpdate}
          className={clsx(
            'ml-1 rounded underline outline-none ring-zinc-800 ring-offset-2 hover:no-underline',
            'focus-visible:(ring-2 ring-offset-amber-400)'
          )}
        >
          Update
        </button>
        !
      </div>
      <div className="grow" />
      <IconButton
        className={clsx(
          ' h-8 w-8 !rounded-full !bg-transparent ring-zinc-800 ring-offset-0',
          '!hover:bg-amber-500 !active:bg-amber-600/75'
        )}
        icon={Cross2Icon}
        iconClassName="h-6 w-6"
        onClick={handleDismiss}
        title="Dismiss"
      />
    </div>
  )
}
