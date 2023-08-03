import { RefObject, useEffect, useState } from "react"

interface Props {
  ref: RefObject<HTMLDivElement>
  timeout?: number
}

const useDropdownToggle = ({ ref, timeout = 300 }: Props) => {
  const [isHovered, setIsHover] = useState(false)
  const [shouldScatter, setShouldScatter] = useState(false)

  const handleMouseEnter = (e) => {
    if (isHovered) return

    setIsHover(!!ref.current?.contains(e.target))
    setShouldScatter(false)
  }
  const handleMouseLeave = (e) => {
    if (ref.current?.contains(e.target)) setShouldScatter(true)
  }

  // Add listeners
  useEffect(() => {
    ref.current?.addEventListener("mouseenter", handleMouseEnter)
    ref.current?.addEventListener("mouseleave", handleMouseLeave)

    // Remove listeners
    return () => {
      ref.current?.removeEventListener("mouseenter", handleMouseEnter)
      ref.current?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Handle hide on mouse leave
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (shouldScatter) {
        setIsHover(false)
        setShouldScatter(false)
      }
    }, timeout)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [shouldScatter])

  return { shouldShow: isHovered }
}

export default useDropdownToggle
