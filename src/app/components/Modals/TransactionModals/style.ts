import { BText } from "app/components/common/BText"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const SubTitle = styled(BText)`
  font-size: 14px;
  margin-top: 2px;
  color: ${CssVariables.GrayWhite};
  text-align: center;
  max-width: 350px;
  a {
    color: ${CssVariables.Cyan};
    text-decoration: underline;
  }
`
