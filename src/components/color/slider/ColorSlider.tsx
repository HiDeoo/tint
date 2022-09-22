import { Root, Thumb, Track } from '@radix-ui/react-slider'
import { type CSSProperties } from 'react'

export function ColorSlider({ max, onChange, style, value }: ColorSliderProps) {
  function handleChange(value: number[]) {
    const newValue = value[0]

    if (typeof newValue !== 'undefined') {
      onChange(newValue)
    }
  }

  return (
    <Root
      className="relative flex h-4 touch-none select-none"
      min={0}
      max={max}
      onValueChange={handleChange}
      value={[value]}
    >
      <Track className="relative h-4 w-full grow rounded-full bg-red-600" style={style} />
      <Thumb className="block h-4 w-4 rounded-full bg-white" />
    </Root>
  )
}

interface ColorSliderProps {
  max: number
  onChange: (newValue: number) => void
  style: CSSProperties
  value: number
}
