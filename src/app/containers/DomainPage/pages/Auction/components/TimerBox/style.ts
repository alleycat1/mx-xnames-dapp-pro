import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const Wrapper = styled.div<{ isEndAuction: boolean }>`
  position: relative;
  z-index: 2;
  padding: 20px 30px;
  display: flex;
  justify-content: space-around;
  color: ${({ isEndAuction }) =>
    isEndAuction ? CssVariables.GrayWhite : CssVariables.Black};
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: ${({ isEndAuction }) =>
      isEndAuction ? CssVariables.Black : CssVariables.Cyan};
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    background-color: ${({ isEndAuction }) =>
      isEndAuction ? `#575757` : `#B88300`};
    filter: blur(23px);
    z-index: -2;
  }
`

export const TitleBox = styled.div`
  position: absolute;
  left: 20px;
  top: -20px;
  padding: 7px 15px;
  border-radius: 6px;
  background: #dcffd0;
  color: ${CssVariables.GrayWhite};
`

export const Time = styled.div`
  font-size: 36px;
  font-weight: 700;
  display: flex;
  align-items: center;
  flex-direction: column;
`
