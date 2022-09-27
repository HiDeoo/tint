import * as SliderPrimitive from '@radix-ui/react-slider'
import clsx from 'clsx'
import { type CSSProperties } from 'react'

import { Checkerboard } from '@/components/color/slider/Checkerboard'

export function ColorSlider({ className, label, max, onChange, style, transparent = false, value }: ColorSliderProps) {
  function handleChange(value: number[]) {
    const newValue = value[0]

    if (typeof newValue !== 'undefined') {
      onChange(newValue)
    }
  }

  return (
    <SliderPrimitive.Root
      aria-label={label}
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
      <SliderPrimitive.Thumb
        className={clsx(
          'h-4.5 w-4.5 bg-transprent block rounded-full border-2 border-white',
          'shadow-[0_1px_2px_0_rgb(0_0_0/0.75),inset_0_1px_2px_0_rgb(0_0_0/0.75)]',
          'focus-visible:(ring-2 ring-offset-zinc-900) outline-none ring-blue-600 ring-offset-2'
        )}
      />
    </SliderPrimitive.Root>
  )
}

interface ColorSliderProps {
  className?: string
  label: string
  max: number
  onChange: (newValue: number) => void
  style?: CSSProperties
  transparent?: boolean
  value: number
}
