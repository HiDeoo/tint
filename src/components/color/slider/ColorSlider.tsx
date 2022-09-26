import * as SliderPrimitive from '@radix-ui/react-slider'
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
    <SliderPrimitive.Root
      className="relative flex h-5 touch-none select-none"
      min={0}
      max={max}
      onValueChange={handleChange}
      value={[value]}
    >
      <SliderPrimitive.Track className={clsx('h-4.5 relative w-full grow rounded-full', className)} style={style} />
      <SliderPrimitive.Thumb className="h-4.5 w-4.5 block rounded-full bg-white" />
    </SliderPrimitive.Root>
  )
}

interface ColorSliderProps {
  className?: string
  max: number
  onChange: (newValue: number) => void
  style?: CSSProperties
  value: number
}
