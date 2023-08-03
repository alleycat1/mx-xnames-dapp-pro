import { StatusType } from "app/types"
import { CssVariables } from "styles/glob-styles"
import styled from "styled-components"

export const Status = styled.span<{ status: StatusType }>`
  color: ${({ status }) => getStatusColor(status)};
`
export const getStatusColor = (status: StatusType) => {
  switch (status.toLowerCase()) {
    case "available":
      return CssVariables.GrayWhite
    case "registered":
      return CssVariables.GrayWhite
    case "on_auction":
      return CssVariables.GrayWhite
    case "reserved":
      return CssVariables.Cyan
    default:
      return CssVariables.GrayWhite
  }
}
