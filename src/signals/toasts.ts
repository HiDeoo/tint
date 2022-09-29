import { signal } from '@preact/signals-react'

let toastId = 0

export const toastsSignal = signal<WarmToast[]>([])

export function addToast(newToast: NewToast) {
  toastsSignal.value = [...toastsSignal.value, { id: toastId++, ...newToast }]
}

export function removeToast({ id }: WarmToast) {
  toastsSignal.value = toastsSignal.value.filter((toast) => toast.id !== id)
}

export interface WarmToast {
  id: number
  intent?: 'error' | 'success'
  message: string
}

type NewToast = Omit<WarmToast, 'id'>
