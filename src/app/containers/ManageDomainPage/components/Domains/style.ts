import { Box } from "@material-ui/core"
import styled from "styled-components"
import { media } from "styles/media"

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  ${media.sm`
    justify-content: center;
  `}
`
