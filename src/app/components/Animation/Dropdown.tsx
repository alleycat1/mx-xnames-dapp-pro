import gsap from "gsap"
import { ReactNode, RefObject, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { EmptyContentWrapper } from "./Empty"

type Animation = gsap.core.Timeline

interface Props {
  children?: ReactNode
  className?: string
  reveal?: boolean
  isEmpty?: boolean
  emptyContent?: ReactNode
}

export const DropdownAnimation = ({
  children,
  className,
  reveal,
  isEmpty,
  emptyContent,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const cacheRef = useRef(children)

  reveal = isEmpty || reveal // Helping the user of the component.

  emptyContent = <EmptyContentWrapper children={emptyContent} />

  const shouldUnmount = useAnimation(ref, reveal)

  if (reveal) cacheRef.current = isEmpty ? emptyContent : children

  if (shouldUnmount) return <></>

  return (
    <Wrapper ref={ref} className={className}>
      {cacheRef.current}
    </Wrapper>
  )
}

const Wrapper = styled.div``

/// HOOKS

export const useAnimation = (
  ref: RefObject<HTMLDivElement>,
  reveal = false
) => {
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
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, transformOrigin: "top center", opacity: 1, duration: 0.3 }
      )
    } else {
      animRef.current?.reverse()
    }
  }, [ref, reveal])

  return shouldUnmount
}
