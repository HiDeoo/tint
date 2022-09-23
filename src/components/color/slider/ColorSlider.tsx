import { Root, Thumb, Track } from '@radix-ui/react-slider'
import clsx from 'clsx'
import { type CSSProperties } from 'react'

export function ColorSlider({ className, max, onChange, style, value }: ColorSliderProps) {
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
      {/* // TODO Remove red */}
      <Track className={clsx('relative h-4 w-full grow rounded-full', className)} style={style} />
      <Thumb className="block h-4 w-4 rounded-full bg-white" />
    </Root>
  )
}

interface ColorSliderProps {
  className?: string
  max: number
  onChange: (newValue: number) => void
  style?: CSSProperties
  value: number
}
