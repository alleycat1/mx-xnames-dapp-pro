import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import cardImageOver from "images/card-image-over.png"
import { getRandomColor } from "utils/commonUtils"
import { Link } from "react-router-dom"
import { Status } from "../common/Status"

export const Wrapper = styled.div`
  border: 1px solid;
  border-image-slice: 1;
  border-width: 1px;
  border-image-source: linear-gradient(
    162.62deg,
    #25ff6f 16.02%,
    rgba(228, 232, 41, 0.16) 88.08%
  );
  width: 100%;
  background: ${CssVariables.Black};
  padding: 20px 19px 14px 19px;
`

export const ImageBox = styled.div`
  width: 100%;
  height: max(240px, 30vh);
  background: ${CssVariables.Black};
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: ${CssVariables.White};
    display: flex;
    align-items: center;
    justify-content: center;
    text-wrap: wrap;
    width: 100%;
  }
`

export const ImageOver = styled.img.attrs({ src: cardImageOver })`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  user-select: none;
`

export const VectorCard = styled("div")<{ name: string }>`
  width: 130%;
  position: absolute;
  bottom: -30%;
  left: -30%;
  transform: rotate(-7deg);
  z-index: -1;
  user-select: none;
  path {
    fill: ${({ name }) => getRandomColor(name)};
  }
`

export const CardBarCode = styled("div")`
  position: absolute;
  bottom: 20px;
  height: 30px;
  right: 20px;
  user-select: none;
`

export const CardLogo = styled("div")`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  user-select: none;
`

export const CardImgBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 20px;
  z-index: 1;
  left: 20px;
  right: 20px;
`

export const CCDLicense = styled.div`
  font-size: 16px;
  line-height: 8px;
  user-select: none;
  span {
    font-size: 4px;
    color: ${CssVariables.GrayWhite};
    position: relative;
    line-height: 4px;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: calc(100% + 4px);
      width: 100%;
      height: 0.1px;
      background-color: ${CssVariables.GrayWhite};
    }
  }
`

export const DomainName = styled.div`
  width: 100%;
  text-wrap: wrap;
  padding: 30px 38px;
  text-align: center;
`

export const CardBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  height: 56px;
`

export const ClockIcon = styled("div")`
  width: 16px;
  height: 16px;
  path {
    stroke: ${CssVariables.White};
  }
`

export const ConcordiumLogo = styled("div")`
  width: 16px;
  height: 16px;
  path {
    fill: ${CssVariables.White};
  }
`

export const BookMarkIcon = styled("div")<{ active?: boolean }>`
  width: 18px;
  height: 18px;
  cursor: pointer;
  path {
    stroke: ${({ active }) =>
      active ? `${CssVariables.White}` : `${CssVariables.GrayWhite}`};
    fill: ${({ active }) => (active ? `${CssVariables.White}` : `transparent`)};
  }
`

export const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  a {
    color: ${CssVariables.GrayWhite};
  }
`

export const SubTitle = styled.div`
  font-size: 14px;
  color: ${CssVariables.GrayWhite};
  font-weight: 500;
`

export const Text = styled.div`
  font-size: 14px;
  color: ${CssVariables.GrayWhite};
  font-weight: 400;
  display: flex;
  align-items: center;
`

export const StyledStatus = styled(Status)`
  font-size: 14px;
  font-weight: 400;
  user-select: none;
`

export const StyledLink = styled(Link)<{ disabled?: boolean }>`
  pointer-events: ${({ disabled }) => (disabled ? "none" : "inherit")};
`
