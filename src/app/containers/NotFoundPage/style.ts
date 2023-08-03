import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const Wrapper = styled.div`
  height: calc(80vh);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 320px;
  gap: 30px;
`

export const Content = styled.div`
  color: ${CssVariables.White};
`

export const Warning = styled.div`
  color: ${CssVariables.Black};
`
export const Title = styled.h2`
  font-size: 60px;
  color: ${CssVariables.White};
`

export const SubTitle = styled.p`
  font-size: 20px;
  margin-top: 24px;
  color: ${CssVariables.White};
`

export const Buttons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 48px;
`

export const Img = styled.img`
  width: 100%;
  max-width: 515px;
`
