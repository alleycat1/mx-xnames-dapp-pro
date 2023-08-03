import { memo } from "react"
import { PendingAlert } from "./TransactionModals/PendingAlert"
import { ConnectWalletInfo } from "./WalletConnection"
import { DisconnectWallet } from "./DisconnectWallet"
import { FailedAlert } from "./TransactionModals/FailedAlert"
import { SubmittedAlert } from "./TransactionModals/SubmittedAlert"
import { UserWallet } from "./UserWallet"
import { WalletQrCodeDataDistributor } from "./walletQrCodeDataDistributor"

export const GlobalModals = memo(
  () => {
    return (
      <>
        <WalletQrCodeDataDistributor />
        <ConnectWalletInfo />
        <UserWallet />
        <DisconnectWallet />
        <PendingAlert />
        <SubmittedAlert />
        <FailedAlert />
      </>
    )
  },
  () => true
)
