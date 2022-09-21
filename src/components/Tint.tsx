import { useRegisterSW } from 'virtual:pwa-register/preact'

import { pickColor } from '../libs/picker'

export function Tint() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  const close = () => {
    setNeedRefresh(false)
  }

  return (
    <div bg="red-500">
      <button onClick={handleClick}>Hello 10</button>
      {needRefresh && (
        <div>
          <div>New Update</div>
          <button onClick={() => updateServiceWorker(true)}>Reload</button>
          <button onClick={() => close()}>Close</button>
        </div>
      )}
    </div>
  )
}

async function handleClick() {
  const color = await pickColor()

  console.error('🚨 [App.tsx:16] color', color)
}
