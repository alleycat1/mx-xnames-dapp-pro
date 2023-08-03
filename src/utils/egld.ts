import { multiply } from "precise-math"

export const Egld = (n: number) => {
  return multiply(1_000_000_000_000_000_000, n)
}
