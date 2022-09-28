import { type Signal } from '@preact/signals-react'

import { Checkbox, type CheckboxProps } from '@/components/ui/Checkbox'

export function SignalCheckbox({ signal, ...props }: SignalCheckboxProps) {
  function handleChange(newChecked: boolean) {
    signal.value = newChecked
  }

  return <Checkbox checked={signal.value} onChange={handleChange} {...props} />
}

interface SignalCheckboxProps extends Omit<CheckboxProps, 'checked' | 'onChange'> {
  signal: Signal<boolean>
}
