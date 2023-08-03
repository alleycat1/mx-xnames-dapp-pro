import { Box } from "@material-ui/core"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const Wrapper = styled(Box)``

export const RotateIconWrapper = styled(Box)`
  background-color: ${CssVariables.Neutral900};
  color: ${CssVariables.Neutral500};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TitleWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const FiltersWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  row-gap: 30px;
  flex-wrap: wrap;
`

export const SortBy = styled(Box)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`
