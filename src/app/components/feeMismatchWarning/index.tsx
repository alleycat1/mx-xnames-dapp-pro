import styled from "styled-components"
// import warningIcon from "images/icons/warningInfoIcon.svg"
import { BText } from "../common/BText"
import { CssVariables } from "styles/glob-styles"

export const FeeMismatchWarning = () => {
  return (
    <Wrapper>
      <img src={"warningIcon"} alt={""} />
      <BText color={CssVariables.Cyan} fontSize="11px">
        Final gas fee estimates may slightly vary from estimates in wallet app.
      </BText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: rgba(249, 182, 63, 0.2);
  width: 100%;
  margin-top: 12px;
  padding: 8px 12px;
  display: flex;
  gap: 6px;
`
