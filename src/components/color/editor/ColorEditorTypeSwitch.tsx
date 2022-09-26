import * as TabsPrimitive from '@radix-ui/react-tabs'

export function ColorEditorTypeSwitch() {
  const className = 'font-medium px-4.5 py-2.5 ds-active:bg-blue-600 ds-inactive:hover:bg-zinc-700'

  return (
    <TabsPrimitive.TabsList
      aria-label="// TODO"
      className="xss:grid-cols-2 grid overflow-hidden rounded-md bg-zinc-700/75"
    >
      <TabsPrimitive.TabsTrigger className={className} value="hsla">
        HSLA
      </TabsPrimitive.TabsTrigger>
      <TabsPrimitive.TabsTrigger className={className} value="rgba">
        RGBA
      </TabsPrimitive.TabsTrigger>
    </TabsPrimitive.TabsList>
  )
}

export type ColorEditorType = 'rgba' | 'hsla'
