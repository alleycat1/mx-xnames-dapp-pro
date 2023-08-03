import { useEffect, useState } from "react"

/**
 * It takes a value and a delay and returns a new value that is the same as the input value, except it
 * is delayed by the specified delay
 * @param {T} value - The value to debounce.
 * @param {number} [delay=500] - The delay time in milliseconds.
 * @returns The debounced value.
 */
export const useDebounce = <T>(value: T, delay: number = 500): T => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler)
      }
    },
    [value, delay] // Only re-call effect if value or delay changes
  )
  return debouncedValue
}

export default useDebounce
