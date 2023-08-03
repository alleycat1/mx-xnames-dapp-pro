import { CssVariables } from "styles/glob-styles"
import styled, { css } from "styled-components"
import { Mode } from "../types"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.div`
  color: ${CssVariables.White};
  margin-bottom: 14px;
`

export const Body = styled.div`
  color: ${CssVariables.GrayWhite};
  text-align: center;
  a {
    color: ${CssVariables.Cyan};
  }
`

export const IconBox = styled.div<{ mode: Mode }>`
  width: 92px;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 20px;
  margin: 50px 0 80px 0;
  position: relative;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    top: -15px;
    left: -15px;
    width: calc(100% + 30px);
    height: calc(100% + 30px);
    border-radius: 50%;
    z-index: -1;
  }
  &:before {
    content: "";
    position: absolute;
    top: -30px;
    left: -30px;
    width: calc(100% + 60px);
    height: calc(100% + 60px);
    border-radius: 50%;
    z-index: -1;
  }
  ${({ mode }) => getBgColor(mode)};
`

export const getBgColor = (mode: Mode) => {
  switch (mode) {
    case "success":
      return css`
        background-color: rgba(59, 241, 165, 0.44);
        &:after {
          background-color: rgba(59, 241, 165, 0.44);
        }
        &:before {
          background-color: rgba(59, 241, 165, 0.44);
        }
      `
    case "error":
      return css`
        background-color: rgba(255, 120, 117, 0.44);
        &:after {
          background-color: rgba(255, 120, 117, 0.44);
        }
        &:before {
          background-color: rgba(255, 120, 117, 0.44);
        }
      `
    case "info":
      return css`
        background-color: rgba(24, 144, 255, 0.44);
        &:after {
          background-color: rgba(24, 144, 255, 0.44);
        }
        &:before {
          background-color: rgba(24, 144, 255, 0.44);
        }
      `
    case "warning":
      return css`
        background-color: rgba(255, 204, 0, 0.44);
        &:after {
          background-color: rgba(255, 204, 0, 0.44);
        }
        &:before {
          background-color: rgba(255, 204, 0, 0.44);
        }
      `
    default:
      return ``
  }
}
