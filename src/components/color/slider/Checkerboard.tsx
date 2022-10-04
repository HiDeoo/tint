import clsx from 'clsx'

const alphaPattern = encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity="0.5" fill="#71717a"><rect x="8" width="8" height="8"/><rect y="8" width="8" height="8"/></svg>'
)

export function Checkerboard({ className }: CheckerboardProps) {
  return (
    <div
      aria-hidden
      className={clsx('absolute inset-0 -z-[1] bg-zinc-50', className)}
      style={{ backgroundImage: `url("data:image/svg+xml,${alphaPattern}")` }}
    />
  )
}

interface CheckerboardProps {
  className?: string
}
