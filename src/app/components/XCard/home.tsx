import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { CardBottom } from "./components/CardBottom"
import { CardTop } from "./components/CardTop"
import { XCardProps } from "./type"

export const XCard = ({ name = "Dana" }: Partial<XCardProps>) => {
  return (
    <Wrapper>
      <CardTop name={name} />
      <CardBottom />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  box-sizing: border-box;
  /* width: 218px; */
  width: 100%;
  height: 259px;
  border-radius: 16px;
  border: 1px solid ${CssVariables.Neutral800};
`
