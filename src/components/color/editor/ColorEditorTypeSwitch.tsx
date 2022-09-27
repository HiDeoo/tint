import * as TabsPrimitive from '@radix-ui/react-tabs'
import clsx from 'clsx'

export function ColorEditorTypeSwitch() {
  const triggerClassName = clsx(
    'font-medium px-4.5 py-2.5 bg-zinc-700/75 ds-active:(bg-blue-600 z-10) ds-inactive:hover:bg-zinc-700',
    'focus-visible:(ring-2 ring-offset-zinc-900 ring-blue-600 ring-offset-2) outline-none'
  )

  return (
    <TabsPrimitive.TabsList aria-label="Color editor" id="color-editor-type-switch" className="xss:grid-cols-2 grid">
      <TabsPrimitive.TabsTrigger className={clsx(triggerClassName, 'rounded-l-md')} value="hsla">
        HSLA
      </TabsPrimitive.TabsTrigger>
      <TabsPrimitive.TabsTrigger className={clsx(triggerClassName, 'rounded-r-md')} value="rgba">
        RGBA
      </TabsPrimitive.TabsTrigger>
    </TabsPrimitive.TabsList>
  )
}

export type ColorEditorType = 'rgba' | 'hsla'
