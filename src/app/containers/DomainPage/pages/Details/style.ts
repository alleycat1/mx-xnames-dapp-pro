import { Tooltip, withStyles } from "@material-ui/core"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const StyledTooltip = withStyles(() => ({
  tooltip: {
    padding: "17px 16px",
    background: CssVariables.Black as string,
    borderRadius: "8px",
    fontSize: "14px",
    textAlign: "center",
  },
  arrow: {
    color: CssVariables.Black as string,
  },
}))(Tooltip)
