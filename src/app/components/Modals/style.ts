import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { BText } from "../common/BText"

export const StyledText = styled(BText)`
  max-width: 325px;
  text-align: center;
  margin: 0 auto;
  color: ${CssVariables.GrayWhite};
`

export const HighlightedBox = styled.div`
  border: 2px solid ${CssVariables.GrayWhite};
  border-radius: 4px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

export const CryptoxIcon = styled("div")`
  width: 32px;
`

export const ArrowRight = styled("div")`
  width: 10px;
`

export const CustomLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 250px;
  margin: 0 auto;
  color: ${CssVariables.Cyan};
`

export const Devider = styled.div`
  width: 100%;
  height: 1px;
  background: ${CssVariables.GrayWhite};
`

export const WalletAddress = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`
