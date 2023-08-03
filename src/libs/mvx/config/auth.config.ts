import { AppEnvironment } from "environment"

export const defaultAuthButtonConfig = {
  nativeAuth: true,
}

export const defaultWalletConnectButtonConfig = {
  ...defaultAuthButtonConfig,
  isWalletConnectV2: AppEnvironment.walletConnect.projectId !== undefined,
}
