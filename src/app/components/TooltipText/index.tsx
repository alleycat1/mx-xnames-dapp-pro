import { ReactNode, useState } from "react"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { Text } from "../Text"
import { TextProps } from "../Text/type"
import { FAIcon, FontAwesomeIcon } from "../FontAwesomeIcon"
import { Tip, TipProps } from "./Tip"

interface Props extends TextProps {
  content: ReactNode
  tooltip?: TipProps
  icon?: FAIcon
}

export const TooltipText = ({
  content,
  tooltip = {},
  icon,
  ...rest
}: Props) => {
  const [reveal, setReveal] = useState(false)

  icon ??= "fa-regular fa-circle-info"

  tooltip.content ??= content

  const toggleReveal = () => {
    setReveal(!reveal)
  }

  return (
    <Wrapper
      type="p14s"
      {...rest}
      render="div"
      onMouseEnter={toggleReveal}
      onMouseLeave={toggleReveal}
    >
      {content}

      <IconWrapper>
        <StyledIcon icon={icon} color={CssVariables.Neutral700 as string} />
        <Tip {...tooltip} reveal={reveal} />
      </IconWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(Text)`
  position: relative;
  z-index: ${CssVariables.ZIndexModal};
  display: flex;
  align-items: center;
  gap: 10px;
`

const IconWrapper = styled.div`
  position: relative;
`
const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`
