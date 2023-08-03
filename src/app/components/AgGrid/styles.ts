import { css } from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const gridCellStyle = {
  display: "flex",
  "align-items": "center",
  "font-weight": "600",
  "letter-spacing": "-0.02em",
  "font-size": "14px",
  "line-height": "18px",
}

export const gridGlobalStyle = css`
  position: relative;

  .ag-body-viewport.ag-layout-normal {
    &::-webkit-scrollbar {
      width: 2px;
      height: 2px;
      /* background-color: ${CssVariables.Black}; */
    }
    &::-webkit-scrollbar-thumb {
      /* background: ${CssVariables.Black}; */
    }
  }
`
