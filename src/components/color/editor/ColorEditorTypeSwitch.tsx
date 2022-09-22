import { Root, Thumb } from '@radix-ui/react-switch'

export function ColorEditorTypeSwitch({ onChange, type }: ColorEditorTypeSwitchProps) {
  function handleChange(newChecked: boolean) {
    onChange(newChecked ? 'hsla' : 'rgba')
  }

  const checked = type === 'hsla'

  return (
    <Root checked={checked} className="relative h-5 w-10 rounded-full bg-red-600" onCheckedChange={handleChange}>
      <Thumb className="data-state-checked:translate-x-4 block h-5 w-5 rounded-full bg-white" />
    </Root>
  )
}

interface ColorEditorTypeSwitchProps {
  onChange: (newType: ColorEditorType) => void
  type: ColorEditorType
}

export type ColorEditorType = 'rgba' | 'hsla'
