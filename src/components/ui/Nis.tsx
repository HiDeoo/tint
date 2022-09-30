import { type IconProps } from '@radix-ui/react-icons/dist/types'

import { Separator } from '@/components/ui/Separator'

export function Nis({ children, icon, title }: NisProps) {
  const IconComponent = icon

  return (
    <div className="flex gap-5 rounded-md bg-zinc-800 p-5 text-lg">
      <div className="flex items-center justify-center">
        <IconComponent aria-hidden className="h-20 w-20" />
      </div>
      <Separator orientation="vertical" decorative />
      <div>
        <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  )
}

interface NisProps {
  children: React.ReactNode
  icon: React.ComponentType<IconProps>
  title: string
}
