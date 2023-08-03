import { ReactNode, useRef } from "react"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { useTipAnim } from "./anim"

export interface TipProps {
  content?: ReactNode
  reveal?: boolean
}

export const Tip = ({ content, reveal }: TipProps) => {
  const ref = useRef(null)

  const shouldUnmount = useTipAnim(ref, reveal)

  if (shouldUnmount) return <></>

  return <Wrapper ref={ref}>{content}</Wrapper>
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  border-radius: 2px;
  background-color: ${CssVariables.Neutral800};
  color: ${CssVariables.Neutral50};
  width: max-content;
`
