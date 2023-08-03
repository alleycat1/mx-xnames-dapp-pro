import { FC, forwardRef } from "react"
import { TransitionProps } from "@material-ui/core/transitions/transition"
import { Zoom, IconButton, ZoomProps } from "@material-ui/core"
import { BModalProps } from "./types"
// import  CloseSquareIcon  from "images/icons/closeSquare.svg"
import { BDialog, Wrapper, CloseWrapper, ChildWrapper, Header } from "./style"
import { BTitle } from "../common/BTitle"
import { CssVariables } from "styles/glob-styles"

// It is from official MUI docs, if you can please change types/
const Transition = forwardRef<HTMLDivElement, ZoomProps>((props, ref) => {
  return <Zoom ref={props.ref} {...props} timeout={300} />
})

export const BModal: FC<BModalProps> = ({
  isOpen,
  onClose,
  modalsize,
  children,
  title,
}) => {
  return (
    <BDialog
      TransitionComponent={Transition}
      fullScreen={false}
      open={isOpen}
      onClose={() => onClose()}
    >
      <Wrapper>
        <Header>
          <BTitle color={CssVariables.White} btnSize="h5">
            {title}
          </BTitle>
          <CloseWrapper onClick={() => onClose()}>
            {/* <CloseSquareIcon /> */}
          </CloseWrapper>
        </Header>

        <ChildWrapper modalsize={modalsize}>{children}</ChildWrapper>
      </Wrapper>
    </BDialog>
  )
}
