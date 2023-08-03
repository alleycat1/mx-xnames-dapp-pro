import { FC, MouseEvent, useRef } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { PortalAnkorId } from "app/startup/PortalAnchor"
import { useMOAnim } from "./anim-hook"
import { ModalProps } from "types"
import { LayoutProps, layout } from "styled-system"

interface Props extends ModalProps, LayoutProps {
  className?: string
}

export const ModalOverlay: FC<Props> = ({
  children,
  isOpen,
  onClose,
  ...rest
}) => {
  const parent = document.getElementById(PortalAnkorId)!

  const ref = useRef<HTMLDivElement>(null)

  const shouldUnmount = useMOAnim(ref, isOpen)

  const raiseClose = (e: MouseEvent<HTMLDivElement>) => {
    if (onClose) onClose()
  }

  if (shouldUnmount) return <></>

  return createPortal(
    <Container onClick={raiseClose} ref={ref}>
      <Content {...rest}>{children}</Content>
    </Container>,
    parent
  )
}

const Container = styled.div`
  position: fixed;
  z-index: 9999999;
  inset: 0;
  visibility: hidden;
  opacity: 0;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`
const Content = styled.div`
  opacity: 0;

  ${layout}
`
