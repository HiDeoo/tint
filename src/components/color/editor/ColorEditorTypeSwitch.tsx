import * as TabsPrimitive from '@radix-ui/react-tabs'
import clsx from 'clsx'

export function ColorEditorTypeSwitch() {
  const triggerClassName = clsx(
    'font-medium px-4.5 py-2.5 bg-zinc-700/75 ds-active:(bg-blue-600 z-10) ds-inactive:hover:bg-zinc-700',
    'focus-visible:(ring-2 ring-offset-zinc-900 ring-blue-600 ring-offset-2) outline-none'
  )

  return (
    <TabsPrimitive.TabsList
      aria-label="Color editor"
      className="xss:grid-cols-2 mr-3 grid"
      id="color-editor-type-switch"
    >
      <TabsPrimitive.TabsTrigger
        className={clsx(triggerClassName, 'xss:(rounded-l-md rounded-tr-none) rounded-t-md')}
        value="hsla"
      >
        HSLA
      </TabsPrimitive.TabsTrigger>
      <TabsPrimitive.TabsTrigger
        className={clsx(triggerClassName, 'xss:(rounded-r-md rounded-bl-none) rounded-b-md')}
        value="rgba"
      >
        RGBA
      </TabsPrimitive.TabsTrigger>
    </TabsPrimitive.TabsList>
  )
}

export type ColorEditorType = 'rgba' | 'hsla'
