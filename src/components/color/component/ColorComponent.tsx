import { Input } from '@/components/ui/Input'

export function ColorComponent({ max, onChange, value }: ColorComponentProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.valueAsNumber)
  }

  return <Input type="number" min={0} max={max} step={1} onChange={handleChange} value={value} />
}

interface ColorComponentProps {
  max: number
  onChange: (newComponentValue: number) => void
  value: number
}
