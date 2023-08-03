import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const StepBox = styled.div`
  background: linear-gradient(
    125.62deg,
    #ffb703 1.64%,
    rgba(255, 255, 255, 0) 90.98%
  );
  width: 100%;
  padding: 30px;
  border-radius: 24px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background: ${CssVariables.Black};
    z-index: 1;
    border-radius: 24px;
  }
`

export const StepBoxContent = styled.div`
  position: relative;
  z-index: 2;
`
