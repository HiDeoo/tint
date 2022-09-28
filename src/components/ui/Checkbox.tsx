import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import * as LabelPrimitive from '@radix-ui/react-label'
import clsx from 'clsx'

export function Checkbox({ checked, id, label, onChange }: CheckboxProps) {
  function handleChange(newChecked: boolean | 'indeterminate') {
    if (typeof newChecked === 'string') {
      return
    }

    onChange(newChecked)
  }

  return (
    <div className="group mb-2 flex items-center last-of-type:mb-0">
      <CheckboxPrimitive.Root
        checked={checked}
        className={clsx(
          'flex h-6 w-6 items-center justify-center rounded-md bg-zinc-700 bg-red-900 group-hover:bg-zinc-600/50',
          'focus-visible:(ring-2 ring-offset-zinc-900) outline-none ring-blue-600 ring-offset-2'
        )}
        id={id}
        onCheckedChange={handleChange}
      >
        <CheckboxPrimitive.Indicator>
          <CheckIcon aria-hidden className="h-6 w-6 text-blue-500" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <LabelPrimitive.Root htmlFor={id} className="ml-3 cursor-default select-none">
        {label}
      </LabelPrimitive.Root>
    </div>
  )
}

export interface CheckboxProps {
  checked: boolean
  id: string
  label: string
  onChange: (newChecked: boolean) => void
}
