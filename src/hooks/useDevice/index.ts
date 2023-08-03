import { useLayoutEffect, useState } from "react"
import { sizes } from "styles/media"

interface WindowSize {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isTabletOrMobile: boolean
}

export const useDevice = (size = sizes): WindowSize => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

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

  return {
    isMobile: windowSize.width < size.sm,
    isTablet: windowSize.width < size.md && windowSize.width >= size.sm,
    isDesktop: windowSize.width >= size.md,
    isTabletOrMobile:
      windowSize.width < size.sm ||
      (windowSize.width < size.md && windowSize.width >= size.sm),
  }
}

export default useDevice
