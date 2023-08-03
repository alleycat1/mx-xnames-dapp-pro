import { RefObject, useEffect, useRef, useState } from "react"
import gsap from "gsap"

type Animation = gsap.core.Timeline

export const useMOAnim = (ref: RefObject<HTMLDivElement>, reveal = false) => {
  const [canUnmount, setCanUnmount] = useState(true)

  const animRef = useRef<Animation | undefined>(undefined)

  const shouldUnmount = reveal ? false : canUnmount

  const handleCanUnmount = () => {
    setCanUnmount(true)
  }

  useEffect(() => {
    const parent = ref.current

    if (!parent) return

    const child = parent.children[0]

    if (reveal) {
      setCanUnmount(false) // Don't unmount immediately `reveal` is false.

      const tl = gsap.timeline({ onReverseComplete: handleCanUnmount }) // Now you can unmount.

      animRef.current = tl

      tl.set(parent, { autoAlpha: 1 })
      tl.fromTo(parent, { opacity: 0 }, { opacity: 1 })
      tl.fromTo(
        child,
        { scale: 0.4 },
        {
          scale: 1,
          opacity: 1,
          transformOrigin: "center center",
          ease: "back",
          duration: 0.3,
        },
        "<+0.1"
      )
    } else {
      animRef.current?.reverse()
    }
  }, [ref, reveal])

  return shouldUnmount
}
