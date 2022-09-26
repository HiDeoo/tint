import clsx from 'clsx'

export function Input({ className, ...props }: InputProps) {
  return <input className={clsx('min-w[4.7rem] rounded-md bg-zinc-700/75 py-2.5 pl-4 pr-2', className)} {...props} />
}

type InputProps = React.ComponentProps<'input'>
