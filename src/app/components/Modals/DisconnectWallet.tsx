import { Box } from "@material-ui/core"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { useDispatch, useSelector } from "react-redux"
import { CssVariables } from "styles/glob-styles"
import { BButton } from "../BButton"
import { BModal } from "../BModal"
import { BText } from "../common/BText"
import { Spacer } from "../common/Spacer"
import { GridLoading } from "../grid_loading/gridLoading"
import { CryptoxIcon, StyledText, WalletAddress } from "./style"

export const DisconnectWallet = () => {
  const dispatch = useDispatch()

  const onClose = () => dispatch(globalActions.setIsOpenDisconnectWallet(false))

  const logOut = () => {
    dispatch(globalActions.logOut())
    onClose()
  }

  return (
    <BModal
      isOpen={false}
      onClose={onClose}
      modalsize="medium"
      title="Disconnect Wallet"
    >
      <StyledText>
        Are you sure you want to disconnect this wallet from this website?
      </StyledText>
    </BModal>
  )
}
