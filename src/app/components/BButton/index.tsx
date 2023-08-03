import { FC } from "react"
import styled from "styled-components"
import { layout, space, color, typography, border } from "styled-system"
import { BButtonProps } from "./type"
import { buttonElementConfig } from "./utilities"
import { useReduceProps } from "./hook"
import { getColor, getSize, getTextType } from "./configurations"

export let debugButton = false // for debuggin this component

export const BButton: FC<BButtonProps> = ({
  content,
  children,
  loading,
  disabled,
  startIcon,
  endIcon,
  type = "button",
  withWrapper,
  className,
  loadingContent,
  ...rest
}) => {
  disabled = loading || disabled
  children = loading && loadingContent ? loadingContent : content ?? children

  rest.btnText = getTextType({ text: rest.btnText, size: rest.btnSize })

  rest = useReduceProps(rest)

  if (rest.debug) {
    debugButton = true
    // display logs for debugging an issue
  }

  if (disabled) className = `${className} bbutton-disabled`

  const RenderButton = () => (
    <ButtonElement {...rest} className={className} type={type}>
      {startIcon}
      {children}
      {endIcon}
    </ButtonElement>
  )

  // Render with Div Wrapper for animating with gsap

  // Render with Link Wrapper

  return RenderButton()
}

const ButtonElement = styled.button.attrs(buttonElementConfig)`
  all: unset;
  box-sizing: border-box;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  border: 1px solid transparent;
  border-radius: 6px;

  cursor: pointer;
  opacity: 1;
  transition: all 0.3s ease-in-out;

  ${(props) => getColor(props.btn)};
  ${(props) => getSize(props.btnSize)};

  ${space};
  ${color};
  ${layout};
  ${border};
  ${typography};
`
