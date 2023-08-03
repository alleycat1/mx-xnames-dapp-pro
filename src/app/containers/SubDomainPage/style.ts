import { Box, ButtonBase } from "@material-ui/core"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const ButtonGroups = styled(Box)`
  margin-bottom: 63px;
  button {
    margin-right: 16px;
  }
`

export const Wrapper = styled.div`
  color: ${CssVariables.GrayWhite};
`

export const IconButton = styled(ButtonBase)<{
  fill?: string
  stroke?: string
}>`
  &.MuiButtonBase-root {
    width: 24px;
    height: 24px;
    padding: 1px;
    border-radius: 6px;
    ${({ fill, stroke }) => (fill || stroke ? `color: ${fill || stroke}` : "")};
    svg {
      ${({ fill }) => (fill ? `fill: ${fill}` : "")};
      ${({ stroke }) => (stroke ? `stroke: ${stroke}` : "")};
    }
  }
`

export const IconBox = styled(Box)<{ fill?: string; stroke?: string }>`
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
  svg {
    ${({ fill }) => (fill ? `fill: ${fill}` : "")};
    ${({ stroke }) => (stroke ? `stroke: ${stroke}` : "")};
  }
`
