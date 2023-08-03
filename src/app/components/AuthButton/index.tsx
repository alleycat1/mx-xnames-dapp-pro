import { FC } from "react"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { useSelector } from "react-redux"
import { BButton } from "../BButton"
import { useHistory, useLocation } from "react-router-dom"
import { AppPages } from "app/constants"
import { IAuthButtonProps } from "./types"

export const AuthButton: FC<IAuthButtonProps> = ({
  children,

  content = "Connect Wallet",
}) => {
  const history = useHistory()
  const location = useLocation()
  const connectedAccount = useSelector(BlockchainSelectors.connectedAccount)
  const isUnlockPage = location.pathname === AppPages.UnlockPage

  const handleConnectWalletClick = () => {
    history.push(`${AppPages.UnlockPage}?cbr=${location.pathname}`)
  }

  if (connectedAccount?.address || isUnlockPage) {
    return <>{children}</>
  }

  return (
    <BButton
      btn="primary"
      onClick={handleConnectWalletClick}
      content={content}
      btnSize="md"
    />
  )
}
