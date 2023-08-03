import { Box } from "@material-ui/core"
import styled from "styled-components"
import { media } from "styles/media"

export const Wrapper = styled(Box)`
  display: flex;
  align-items: flex-start;
  gap: 13px;
  ${media.md`
    flex-direction: column
  `}
`

export const Section = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`
