import { CSSProperties } from "react"
import { Paper, Select, SelectProps } from "@material-ui/core"
import styled from "styled-components"

import { CssVariables } from "styles/glob-styles"

export const StyledSelect = styled(Select)<CSSProperties & SelectProps>`
  .MuiSvgIcon-root {
    fill: ${CssVariables.Neutral600};
    font-size: 30px;
    margin-top: -3px;
    transition: 300ms ease;
  }

  .MuiSelect-root {
    background: ${CssVariables.Neutral800} !important;
    color: ${CssVariables.Neutral300} !important;
    border-radius: 12px;
    padding: 4px 14px;
    padding-left: 0;
    font-family: Inter, sans-serif;
    font-weight: 400;
    ${(props) => props as {}}
    &:focus {
      border-radius: 12px;
      background: ${CssVariables.Neutral800};
    }
  }
`

export const StyledPaper = styled(Paper)`
  margin-top: 5px !important;
  background: ${CssVariables.Neutral800} !important;
  color: ${CssVariables.Neutral300} !important;
`
