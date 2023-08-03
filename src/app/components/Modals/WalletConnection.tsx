import {
  useExtensionLogin,
  useWebWalletLogin,
} from "@multiversx/sdk-dapp/hooks"
import { Box } from "@material-ui/core"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CssVariables } from "styles/glob-styles"
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
import { defaultAuthButtonConfig } from "libs/mvx/config/auth.config"

const AppleLink = "https://apps.apple.com/sg/app/cryptox-wallet/id1593386457"
const AndroidLink =
  "https://play.google.com/store/apps/details?id=wallet&hl=en_IE&gl=US"

const deviceIphone = "iphone"
const deviceIpod = "ipod"
const deviceAndroid = "android"

export const ConnectWalletInfo = () => {
  const dispatch = useDispatch()
  const [walletAppAddress, setWalletAppAddress] = useState<string>(AppleLink)
  const isOpen = useSelector(GlobalSelectors.isWalletConnectionModalOpen)
  const [initiateExtensionLogin] = useExtensionLogin({
    ...defaultAuthButtonConfig,
  })
  const connectWithWebExtension = () => {
    initiateExtensionLogin()
  }

  const [initiateWebWalletLogin] = useWebWalletLogin({
    callbackRoute: "/",
    ...defaultAuthButtonConfig,
  })

  const connectWithWebWallet = () => {
    initiateWebWalletLogin()
  }

  const userData = undefined

  const onClose = () =>
    dispatch(globalActions.setIsWalletConnectModalOpen({ open: false }))

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()

    if (
      userAgent.search(deviceIphone) > -1 ||
      userAgent.search(deviceIpod) > -1
    )
      setWalletAppAddress(AppleLink)

    if (userAgent.search(deviceAndroid) > -1) setWalletAppAddress(AndroidLink)
  }, [])

  return (
    <BModal
      isOpen={isOpen}
      onClose={onClose}
      modalsize="medium"
      title="Connect Your Wallet"
    >
      <StyledText>
        Hey there! In order to use this website you’ll need a connected wallet
      </StyledText>

      <Spacer vSpace={CssVariables.Space56} />

      <HighlightedBox onClick={connectWithWebExtension}>
        <Box display="flex" alignItems="center">
          <CryptoxIcon />
          <Spacer hSpace={CssVariables.Space16} />
          <BText btnSize="l">MultiversX Portal (wallet extension)</BText>
        </Box>
        <ArrowRight />
      </HighlightedBox>
      <HighlightedBox onClick={connectWithWebWallet}>
        <Box display="flex" alignItems="center">
          <CryptoxIcon />
          <Spacer hSpace={CssVariables.Space16} />
          <BText btnSize="l">web Wallet</BText>
        </Box>
        <ArrowRight />
      </HighlightedBox>
      <Spacer vSpace={CssVariables.Space120} />

      <StyledText btnSize="s">Don’t have a multiversX wallet?</StyledText>

      <Spacer vSpace={CssVariables.Space16} />

      <a href={walletAppAddress} target="_blank" rel="noreferrer">
        <CustomLink>
          <CryptoxIcon />
          <BText btnSize="l">Create a new wallet</BText>
          <ArrowRight />
        </CustomLink>
      </a>
    </BModal>
  )
}
