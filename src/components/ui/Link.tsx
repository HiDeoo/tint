import clsx from 'clsx'

export function Link({ children, className, ...prop }: LinkProps) {
  return (
    <a
      className={clsx(
        'rounded text-blue-600 ring-blue-600 ring-offset-zinc-800',
        'focus-visible:(ring-2 ring-offset-2) hover:underline focus:outline-none',
        className
      )}
      {...prop}
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}
