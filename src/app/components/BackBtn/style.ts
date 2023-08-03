import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"

export const Btn = styled.a`
  width: max-content;
  display: flex;
  align-items: center;
  padding: 9px;
  gap: 8px;
  color: ${CssVariables.White};
  cursor: pointer;

  &:hover {
    color: ${CssVariables.White};
  }

  ${media.sm`
    font-size: 14px;

    & > svg {
      width: 15px;
      height: 13px;
    }
  `}
`
