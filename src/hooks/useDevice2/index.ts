import { useLayoutEffect, useState } from "react"
import { sizes as mediaSizes } from "styles/media"

interface Config {
  sizes?: typeof mediaSizes
  media?: "max-width" | "min-width" | "exact"
}

export const useDevice2 = (config?: Config) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  const { sizes = mediaSizes, media = "max-width" } = config ?? {}

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useLayoutEffect(() => {
    handleSize()

    window.addEventListener("resize", handleSize)

    return () => window.removeEventListener("resize", handleSize)
  }, [])

  // Note: this outcome is based on css @media (max-width: xxx)  logic. Default Logic.
  const matches = {
    isXSmall: windowSize.width > 0 && windowSize.width <= sizes.xs,
    isSmall: windowSize.width > 0 && windowSize.width <= sizes.sm,
    isMedium: windowSize.width > 0 && windowSize.width <= sizes.md,
    isLarge: windowSize.width > 0 && windowSize.width <= sizes.lg,
    isXLarge: windowSize.width > 0 && windowSize.width <= sizes.xl,
    media,
    width: windowSize.width,
  }

  if (media === "max-width") return matches

  // Note: this outcome is based on css @media (min-width: xxx)  logic.
  return {
    ...matches,
    isXSmall: windowSize.width > 0 && windowSize.width <= sizes.sm,
    isSmall: windowSize.width > 0 && windowSize.width > sizes.xs,
    isMedium: windowSize.width > 0 && windowSize.width > sizes.sm,
    isLarge: windowSize.width > 0 && windowSize.width > sizes.md,
    isXLarge: windowSize.width > 0 && windowSize.width > sizes.lg,
  }
}

export default useDevice2
