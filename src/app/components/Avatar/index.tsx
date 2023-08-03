import { FC } from "react"
import Jdenticon from "react-jdenticon"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

interface Props {
  name?: string
}

export const Avatar: FC<Props> = ({ name = "", ...props }) => {
  return (
    <Wrapper {...props}>
      <Jdenticon value={name} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${CssVariables.White};
  width: max-content;
  border: 3px solid ${CssVariables.GrayWhite};
  border-radius: 6px;
`
