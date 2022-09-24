import {
  Content,
  Group,
  Icon,
  Item,
  ItemText,
  ItemIndicator,
  Label,
  Portal,
  Root,
  ScrollDownButton,
  ScrollUpButton,
  Trigger,
  Value,
  Viewport,
} from '@radix-ui/react-select'

export function Select<TItem extends string>({
  items,
  onChange,
  selectedItem,
  triggerLabel,
  triggerPlaceholder,
}: SelectProps<TItem>) {
  return (
    <Root onValueChange={onChange} value={selectedItem}>
      <Trigger aria-label={triggerLabel}>
        <Value placeholder={triggerPlaceholder} />
        <Icon />
      </Trigger>
      <Portal>
        <Content>
          <ScrollUpButton />
          <Viewport>
            {Array.isArray(items)
              ? items.map((item) => <SelectItem key={item} item={item} />)
              : Object.entries(items).map(([groupName, groupItems]) => (
                  <SelectGroup key={groupName} label={groupName} items={groupItems} />
                ))}
          </Viewport>
          <ScrollDownButton />
        </Content>
      </Portal>
    </Root>
  )
}

function SelectGroup<TItem extends string>({ items, label }: SelectGroupProps<TItem>) {
  return (
    <Group>
      <Label>{label}</Label>
      {items.map((item) => (
        <SelectItem key={item} item={item} />
      ))}
    </Group>
  )
}

function SelectItem<TItem extends string>({ item }: SelectItemProps<TItem>) {
  return (
    <Item value={item}>
      <ItemText>{item}</ItemText>
      <ItemIndicator />
    </Item>
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
