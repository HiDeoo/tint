import * as SliderPrimitive from '@radix-ui/react-slider'
import clsx from 'clsx'
import { type CSSProperties } from 'react'

import { Checkerboard } from '@/components/color/slider/Checkerboard'

export function ColorSlider({ className, max, onChange, style, transparent = false, value }: ColorSliderProps) {
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
      <SliderPrimitive.Track
        className={clsx('h-4.5 relative w-full grow overflow-hidden rounded-full', className)}
        style={style}
      >
        {transparent ? <Checkerboard className="right-[8px] " /> : null}
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="h-4.5 w-4.5 block rounded-full bg-white" />
    </SliderPrimitive.Root>
  )
}

interface ColorSliderProps {
  className?: string
  max: number
  onChange: (newValue: number) => void
  style?: CSSProperties
  transparent?: boolean
  value: number
}
