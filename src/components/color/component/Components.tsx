import { ColorEditorTypeSwitch } from '@/components/color/editor/ColorEditorTypeSwitch'

export function Components({ children }: ComponentsProps) {
  return (
    <section className="flex justify-between py-3">
      <ColorEditorTypeSwitch />
      <div className="xss:grid-cols-4 grid grid-cols-2 gap-3">{children}</div>
    </section>
  )
}

interface ComponentsProps {
  children: React.ReactNode
}
