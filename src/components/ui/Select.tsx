import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectPrimitive from '@radix-ui/react-select'
import clsx from 'clsx'
import { Fragment } from 'react'

export function Select<TItem extends string>({
  items,
  onChange,
  selectedItem,
  triggerLabel,
  triggerPlaceholder,
}: SelectProps<TItem>) {
  return (
    <SelectPrimitive.Root onValueChange={onChange} value={selectedItem}>
      <SelectPrimitive.Trigger
        aria-label={triggerLabel}
        className={clsx(
          'flex items-center gap-5 rounded-md bg-zinc-700/75 py-2.5 pl-3.5 pr-3 hover:bg-zinc-700',
          'focus-visible:(ring-2 outline-none) ring-blue-600 ring-offset-2 ring-offset-zinc-900'
        )}
      >
        <SelectPrimitive.Value placeholder={triggerPlaceholder} />
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
              ? items.map((item) => <SelectItem key={item} item={item} />)
              : Object.entries(items).map(([groupName, groupItems], index) => (
                  <Fragment key={groupName}>
                    <SelectGroup label={groupName} items={groupItems} />
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

function SelectGroup<TItem extends string>({ items, label }: SelectGroupProps<TItem>) {
  return (
    <SelectPrimitive.Group>
      <SelectPrimitive.Label className="select-none py-1.5 px-7 text-zinc-400">{label}</SelectPrimitive.Label>
      {items.map((item) => (
        <SelectItem key={item} item={item} />
      ))}
    </SelectPrimitive.Group>
  )
}

function SelectItem<TItem extends string>({ item }: SelectItemProps<TItem>) {
  return (
    <SelectPrimitive.Item
      value={item}
      className="d-highlighted:bg-blue-600 relative select-none rounded-md py-1.5 px-7 outline-none"
    >
      <SelectPrimitive.ItemText>{item}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute left-0.5 top-0 bottom-0 flex w-6 items-center justify-center">
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
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
