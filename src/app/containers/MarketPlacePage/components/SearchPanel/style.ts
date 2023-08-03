import { Box } from "@material-ui/core"
import styled from "styled-components"
import { media } from "styles/media"

export const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  ${media.md`
    justify-content: center;
  `}
`

export const SortBy = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
`
