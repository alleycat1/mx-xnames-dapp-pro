import { ButtonBase, Dialog } from "@material-ui/core"
import styled from "styled-components"
import { css } from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { BModalSize } from "./types"
import { media } from "styles/media"

interface ChildWrapperProps {
  modalsize?: BModalSize
}

const getWidth = (modalsize?: BModalSize) => {
  switch (modalsize) {
    case "small":
      return css`
        width: min(90vw, 320px);
      `
    case "medium":
      return css`
        width: min(90vw, 500px);
      `
    default:
      return css`
        width: min(90vw, 300px);
      `
  }
}

export const BDialog = styled(Dialog)`
  .MuiBackdrop-root {
    background: transparent;
    backdrop-filter: blur(8px);
  }
  .MuiDialog-paper {
    background-color: transparent;
    margin: 0px;
    width: auto;
    background: ${CssVariables.Black};
    border-radius: 0px;
  }
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 0px;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${CssVariables.Cyan};
  width: 100%;
  padding: 20px 30px;
`

export const Title = styled.div`
  color: ${CssVariables.White};
  font-size: 24px;
  font-weight: 500;
`

export const CloseWrapper = styled(ButtonBase)`
  width: 24px;
  height: 24px;
  svg {
    width: 100%;
    height: 100%;
  }
  &:hover {
    svg {
      path {
        fill: ${CssVariables.GrayWhite};
      }
    }
  }
`

export const ChildWrapper = styled.div<ChildWrapperProps>`
  color: ${CssVariables.White};
  padding: 30px;
  ${(props) => getWidth(props.modalsize)}
`
