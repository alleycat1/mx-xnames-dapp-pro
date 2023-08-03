import { RefObject, useEffect, useRef, useState } from "react"
import gsap from "gsap"

type Animation = gsap.core.Timeline

export const useTipAnim = (ref: RefObject<HTMLDivElement>, reveal = false) => {
  const [canUnmount, setCanUnmount] = useState(true)

  const animRef = useRef<Animation | undefined>(undefined)

  const shouldUnmount = reveal ? false : canUnmount

  const handleCanUnmount = () => {
    setCanUnmount(true)
  }

  useEffect(() => {
    const el = ref.current

    if (!el) return

    if (reveal) {
      setCanUnmount(false) // Don't unmount immediately `reveal` is false.

      const tl = gsap.timeline({ onReverseComplete: handleCanUnmount }) // Now you can unmount.

      animRef.current = tl

      tl.fromTo(
        el,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          transformOrigin: "center center",
          ease: "back",
          duration: 0.3,
        }
      )
    } else {
      animRef.current?.reverse()
    }
  }, [ref, reveal])

  return shouldUnmount
}
