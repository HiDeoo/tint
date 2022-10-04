import { effect, signal } from '@preact/signals-react'

export function signalWithStorage<TValue>(
  key: string,
  initialValue: TValue,
  storage: Storage<TValue> = getDefaultStorage()
) {
  const prefixedKey = `tint:${key}`

  const newSignal = signal(storage.getItem(prefixedKey) ?? initialValue)

  storage.subscribe(prefixedKey, (newValue) => {
    newSignal.value = newValue
  })

  effect(() => {
    storage.setItem(prefixedKey, newSignal.value)
  })

  return newSignal
}

function getDefaultStorage<TValue>(): Storage<TValue> {
  return {
    getItem: (key: string) => {
      let value: TValue | null = null

      try {
        const valueStr = localStorage.getItem(key)

        if (valueStr) {
          value = JSON.parse(valueStr)
        }
      } catch {
        // We do not care about missing values or parsing errors.
      }

      return value
    },
    setItem: (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value))
      } catch {
        // We do not care about write errors.
      }
    },
    subscribe: (key, callback) => {
      const storageEventCallback = (event: StorageEvent) => {
        if (event.key === key && event.newValue) {
          try {
            const value = JSON.parse(event.newValue)

            callback(value)
          } catch {
            // We do not care about parsing errors.
          }
        }
      }

      window.addEventListener('storage', storageEventCallback)

      return () => {
        window.removeEventListener('storage', storageEventCallback)
      }
    },
  }
}

interface Storage<TValue> {
  getItem: (key: string) => TValue | null
  setItem: (key: string, value: TValue) => void
  subscribe: (key: string, callback: (value: TValue) => void) => () => void
}
