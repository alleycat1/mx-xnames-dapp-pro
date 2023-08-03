import { FC } from "react"
// import  VerifyIcon  from "images/icons/verify.svg"
// import  WarningIcon  from "images/icons/warning.svg"
import { Wrapper, IconBox, Title, Body } from "./style"
import { ModalAlertProps, Mode } from "../types"

export const ModalAlert: FC<ModalAlertProps> = ({ mode, title, children }) => {
  return (
    <Wrapper>
      <IconBox mode={mode}>
        <Icon mode={mode} />
      </IconBox>
      <Title>{title ? title : ""}</Title>
      <Body>{children}</Body>
    </Wrapper>
  )
}

const Icon: FC<{ mode: Mode }> = ({ mode }) => {
  switch (mode) {
    case "success":
      return <></>
    case "warning":
      return <></>
    case "info":
      return <></>
    case "error":
      return <></>
    default:
      return <></>
  }
}
