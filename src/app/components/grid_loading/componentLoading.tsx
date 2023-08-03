import styled from "styled-components"
import { GridLoading } from "./gridLoading"

export const LoadingGrid = styled(GridLoading)`
  position: absolute;
  top: calc(50% - 30px);
  left: 50%;
  transform: translateX(-50%);
`
