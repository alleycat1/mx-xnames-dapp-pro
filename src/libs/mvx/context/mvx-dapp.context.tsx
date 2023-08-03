import React, { PropsWithChildren } from "react"
import {
  AxiosInterceptorContext,
  DappProvider,
} from "@multiversx/sdk-dapp/wrappers"
import {
  NotificationModal,
  SignTransactionsModals,
  TransactionsToastList,
} from "@multiversx/sdk-dapp/UI"
import { AppEnvironment } from "environment"
import { AppPages } from "app/constants"

//@ts-ignore
export default function MvxDappContext(props: PropsWithChildren) {
  const { children } = props

  return (
    <DappProvider
      environment={AppEnvironment.type}
      customNetworkConfig={{
        name: "customConfig",
        shouldUseWebViewProvider: true,
        apiTimeout: AppEnvironment.mvx.apiTimeout,
        walletConnectV2ProjectId: AppEnvironment.walletConnect.projectId,
      }}
      dappConfig={{ logoutRoute: AppPages.UnlockPage }}
    >
      <AxiosInterceptorContext.Listener />
      <TransactionsToastList />
      <NotificationModal />
      <SignTransactionsModals className="custom-class-for-modals" />

      {children}
    </DappProvider>
  )
}
