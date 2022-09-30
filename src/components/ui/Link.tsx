export function Link({ children, ...prop }: LinkProps) {
  return (
    <a
      className="focus-visible:(ring-2 ring-offset-2) rounded text-blue-600 ring-blue-600 ring-offset-zinc-800 hover:underline focus:outline-none"
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
