import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {
  WalletQrCodeSubscriber,
  WalletRejectionSubscriber,
} from "services/message_service"

export const WalletQrCodeDataDistributor = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const walletRejectionSubscription = WalletRejectionSubscriber.subscribe(
      (message) => {
        if (message === undefined) {
          dispatch(globalActions.setIsOpenConnectWalletQR(false))
          dispatch(globalActions.setIsOpenAlert(false))
          dispatch(globalActions.setWalletInfoData(undefined))
        }
      }
    )

    const subscription = WalletQrCodeSubscriber.subscribe((msg) => {
      dispatch(globalActions.setQrCodeWalletConnectorData(msg))
      if (msg === undefined) {
        dispatch(globalActions.setIsOpenConnectWalletQR(false))
        dispatch(globalActions.setIsOpenAlert(false))
      }
    })

    return () => {
      subscription.unsubscribe()
      walletRejectionSubscription.unsubscribe()
    }
  }, [dispatch])

  return <></>
}
