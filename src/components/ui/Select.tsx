import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectPrimitive from '@radix-ui/react-select'
import clsx from 'clsx'
import { Fragment } from 'react'

export function Select<TItem extends string>({
  items,
  itemFormatter,
  onChange,
  selectedItem,
  triggerLabel,
  triggerPlaceholder,
  valueFormatter,
}: SelectProps<TItem>) {
  return (
    <SelectPrimitive.Root onValueChange={onChange} value={selectedItem}>
      <SelectPrimitive.Trigger
        aria-label={triggerLabel}
        className={clsx(
          'flex shrink-0 items-center gap-5 rounded-md bg-zinc-700/75 py-2.5 pl-3.5 pr-3 hover:bg-zinc-700',
          'focus-visible:(ring-2 outline-none) ring-blue-600 ring-offset-2 ring-offset-zinc-900'
        )}
      >
        <SelectPrimitive.Value asChild>
          <span className="pointer-events-none">
            {selectedItem ? (valueFormatter ? valueFormatter(selectedItem) : selectedItem) : triggerPlaceholder}
          </span>
        </SelectPrimitive.Value>
        <SelectPrimitive.Icon>
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className={clsx(
            'overflow-hidden rounded-md bg-zinc-700',
            'motion-safe:ds-open:(animated animated-zoom-in)',
            'motion-safe:ds-closed:(animated animated-zoom-out)'
          )}
          style={{ '--une-animated-duration': '150ms' }}
        >
          <SelectPrimitive.ScrollUpButton className="flex h-8 items-center justify-center bg-zinc-700">
            <ChevronUpIcon />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport className="p-2">
            {Array.isArray(items)
              ? items.map((item) => <SelectItem key={item} item={item} itemFormatter={itemFormatter} />)
              : Object.entries(items).map(([groupName, groupItems], index) => (
                  <Fragment key={groupName}>
                    <SelectGroup label={groupName} items={groupItems} itemFormatter={itemFormatter} />
                    {index < Object.keys(items).length - 1 ? (
                      <SelectPrimitive.Separator className="mt-2.5 mb-0.5 h-px bg-zinc-500/75" />
                    ) : null}
                  </Fragment>
                ))}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className="flex h-8 items-center justify-center bg-zinc-700">
            <ChevronDownIcon />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

function SelectGroup<TItem extends string>({ items, itemFormatter, label }: SelectGroupProps<TItem>) {
  return (
    <SelectPrimitive.Group>
      <SelectPrimitive.Label className="select-none py-1.5 px-7 text-zinc-400">{label}</SelectPrimitive.Label>
      {items.map((item) => (
        <SelectItem key={item} item={item} itemFormatter={itemFormatter} />
      ))}
    </SelectPrimitive.Group>
  )
}

function SelectItem<TItem extends string>({ item, itemFormatter }: SelectItemProps<TItem>) {
  return (
    <SelectPrimitive.Item
      className="d-highlighted:bg-blue-600 relative select-none rounded-md py-1.5 px-7 outline-none"
      value={item}
    >
      <SelectPrimitive.ItemText>{itemFormatter ? itemFormatter(item) : item}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute left-0.5 top-0 bottom-0 flex w-6 items-center justify-center">
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

interface SelectProps<TItem extends string> {
  itemFormatter?: (item: TItem) => string
  items: readonly TItem[] | Record<string, readonly TItem[]>
  onChange: (newItem: TItem) => void
  selectedItem: TItem
  triggerLabel: string
  triggerPlaceholder: string
  valueFormatter?: (item: TItem) => React.ReactNode
}

interface SelectGroupProps<TItem extends string> {
  itemFormatter: SelectProps<TItem>['itemFormatter'] | undefined
  items: readonly TItem[]
  label: string
}

interface SelectItemProps<TItem extends string> {
  item: TItem
  itemFormatter: SelectProps<TItem>['itemFormatter'] | undefined
}
