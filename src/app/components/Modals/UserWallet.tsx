import { Box } from "@material-ui/core"
import { globalActions } from "app/slice"
import { useDispatch } from "react-redux"
import { CssVariables } from "styles/glob-styles"
import { CopyToClipboard } from "react-copy-to-clipboard"
import styled from "styled-components"
import { BModal } from "../BModal"
import { BText } from "../common/BText"
import { Spacer } from "../common/Spacer"
import {
  ArrowRight,
  CryptoxIcon,
  CustomLink,
  HighlightedBox,
  StyledText,
} from "./style"
import { copiedToClipboardMsg } from "utils/commonUtils"

const UserData = {
  name: "groot145.ccd",
  wallet: "3ji8H78h07G6g9gg87hh6GLnVr",
}

export const UserWallet = () => {
  const dispatch = useDispatch()
  const isOpen = false

  const onClose = () => dispatch(globalActions.setIsOpenUserWallet(false))

  const openDisconnectModal = () => {
    dispatch(globalActions.setIsOpenUserWallet(false))
    dispatch(globalActions.setIsOpenDisconnectWallet(true))
  }

  return (
    <BModal
      isOpen={isOpen}
      onClose={onClose}
      modalsize="medium"
      title="User Wallet"
    >
      <StyledText>
        This is the current connected Concordium Account/Identity.
      </StyledText>

      <Spacer vSpace={CssVariables.Space56} />

      <CopyToClipboard text={UserData.wallet} onCopy={copiedToClipboardMsg}>
        <HighlightedBox>
          <Box display="flex" alignItems="center">
            <CryptoxIcon />
            <Spacer hSpace={CssVariables.Space16} />
            <BText btnSize="l">{UserData.wallet}</BText>
          </Box>

          <CopyIcon />
        </HighlightedBox>
      </CopyToClipboard>

      <Spacer vSpace={CssVariables.Space120} />

      <StyledText btnSize="s">Don’t have a crypto X wallet?</StyledText>

      <Spacer vSpace={CssVariables.Space16} />

      <CustomLink onClick={openDisconnectModal}>
        <CryptoxIcon />
        <BText btnSize="l">Disconnect Wallet</BText>
        <ArrowRight />
      </CustomLink>
    </BModal>
  )
}

const CopyIcon = styled("div")`
  height: 20px;
  width: 20px;
  margin-left: 10px;
  path {
    fill: ${CssVariables.GrayWhite};
  }
`
