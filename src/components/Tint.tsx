import { pickColor } from '../libs/picker'

export function Tint() {
  return <button onClick={handleClick}>Hello</button>
}

async function handleClick() {
  const color = await pickColor()

  console.error('🚨 [App.tsx:16] color', color)
}
