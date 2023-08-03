import { TextFieldProps } from "@material-ui/core"
import { FC } from "react"
import { StyledInput } from "./style"

interface Props {}

export const NormalInput: FC<TextFieldProps & Props> = ({ ...otherProps }) => {
  return <StyledInput {...otherProps} />
}
