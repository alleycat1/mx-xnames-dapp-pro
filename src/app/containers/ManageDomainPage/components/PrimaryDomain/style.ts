import { Box } from "@material-ui/core"
import { BSelect } from "app/components/BSelect"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const Wrapper = styled(Box)`
  background-color: ${CssVariables.Neutral800};
  padding: 24px;
  border-radius: 24px;
`

export const SelectWrapper = styled(Box)`
  background-color: ${CssVariables.Black};
  padding: 24px;
  border-radius: 24px;
`

export const StyledBSelect = styled(BSelect)`
  width: 100%;
`

export const Bottom = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonsWrapper = styled(Box)`
  display: flex;
  gap: 18px;
`
