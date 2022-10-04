import { Input } from '@/components/ui/Input'

export function ColorComponent({ label, max, onChange, value }: ColorComponentProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.valueAsNumber)
  }

  return <Input type="number" aria-label={label} min={0} max={max} step={1} onChange={handleChange} value={value} />
}

interface ColorComponentProps {
  label: string
  max: number
  onChange: (newComponentValue: number) => void
  value: number
}
