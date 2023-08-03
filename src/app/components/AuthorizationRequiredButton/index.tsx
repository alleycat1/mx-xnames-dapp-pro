import { ButtonProps } from "@material-ui/core"
import { FC } from "react"
import { useSelector } from "react-redux"
import { BButtonProps } from "../BButton/type"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { AuthButton } from "../AuthButton"

interface Props {
  children?: any
  text?: string
}

export const AuthorizationRequiredButton: FC<
  ButtonProps & BButtonProps & Props
> = ({ children, text }) => {
  const account = useSelector(BlockchainSelectors.connectedAccount)
  const loggedIn = !!account?.address
  if (!loggedIn) {
    return <AuthButton {...(text ? { content: text } : {})} />
  }
  return children
}
