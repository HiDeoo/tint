import { useRegisterSW } from 'virtual:pwa-register/react'

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
    <div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, fugit. Nostrum, quod blanditiis temporibus
        voluptatum mollitia aliquam quasi! Ipsam, suscipit aliquid. Ipsa, nam. Fuga labore hic unde voluptatum tenetur
        eius?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, fugit. Nostrum, quod blanditiis temporibus
        voluptatum mollitia aliquam quasi! Ipsam, suscipit aliquid. Ipsa, nam. Fuga labore hic unde voluptatum tenetur
        eius?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, fugit. Nostrum, quod blanditiis temporibus
        voluptatum mollitia aliquam quasi! Ipsam, suscipit aliquid. Ipsa, nam. Fuga labore hic unde voluptatum tenetur
        eius?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, fugit. Nostrum, quod blanditiis temporibus
        voluptatum mollitia aliquam quasi! Ipsam, suscipit aliquid. Ipsa, nam. Fuga labore hic unde voluptatum tenetur
        eius?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, fugit. Nostrum, quod blanditiis temporibus
        voluptatum mollitia aliquam quasi! Ipsam, suscipit aliquid. Ipsa, nam. Fuga labore hic unde voluptatum tenetur
        eius?
      </div>
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
