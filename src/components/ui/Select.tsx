import * as SelectPrimitive from '@radix-ui/react-select'

export function Select<TItem extends string>({
  items,
  onChange,
  selectedItem,
  triggerLabel,
  triggerPlaceholder,
}: SelectProps<TItem>) {
  return (
    <SelectPrimitive.Root onValueChange={onChange} value={selectedItem}>
      <SelectPrimitive.Trigger aria-label={triggerLabel}>
        <SelectPrimitive.Value placeholder={triggerPlaceholder} />
        <SelectPrimitive.Icon />
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content>
          <SelectPrimitive.ScrollUpButton />
          <SelectPrimitive.Viewport>
            {Array.isArray(items)
              ? items.map((item) => <SelectItem key={item} item={item} />)
              : Object.entries(items).map(([groupName, groupItems]) => (
                  <SelectGroup key={groupName} label={groupName} items={groupItems} />
                ))}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

function SelectGroup<TItem extends string>({ items, label }: SelectGroupProps<TItem>) {
  return (
    <SelectPrimitive.Group>
      <SelectPrimitive.Label>{label}</SelectPrimitive.Label>
      {items.map((item) => (
        <SelectItem key={item} item={item} />
      ))}
    </SelectPrimitive.Group>
  )
}

function SelectItem<TItem extends string>({ item }: SelectItemProps<TItem>) {
  return (
    <SelectPrimitive.Item value={item}>
      <SelectPrimitive.ItemText>{item}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator />
    </SelectPrimitive.Item>
  )
}

interface SelectProps<TItem extends string> {
  items: readonly TItem[] | Record<string, readonly TItem[]>
  onChange: (newItem: TItem) => void
  selectedItem: TItem
  triggerLabel: string
  triggerPlaceholder: string
}

interface SelectGroupProps<TItem extends string> {
  items: readonly TItem[]
  label: string
}

interface SelectItemProps<TItem extends string> {
  item: TItem
}
