export function Sliders({ children }: SlidersProps) {
  return <section className="my-2 flex flex-col gap-3">{children}</section>
}

interface SlidersProps {
  children: React.ReactNode
}
