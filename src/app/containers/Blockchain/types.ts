import { TypedOutcomeBundle } from "@multiversx/sdk-core/out/smartcontracts/interface"
import { EndpointDefinition } from "@multiversx/sdk-core/out/smartcontracts/typesystem/endpoint"
import { LoginInfoStateType } from "@multiversx/sdk-dapp/reduxStore/slices"
import { AccountType, ServerTransactionType } from "@multiversx/sdk-dapp/types"
import { IContractQuery } from "@multiversx/sdk-network-providers/out/interface"

export interface BlockchainState {
  connectedAccount?: AccountType
  network?: {
    chainID: string
    network: {
      apiAddress: string
      apiTimeout: number
      chainId: string
      decimals: string
      digits: string
      egldLabel: string
      explorerAddress: string
      gasPerDataByte: string
      id: string
      name: string
      shouldUseWebViewProvider: boolean
      walletAddress: string
      walletConnectBridgeAddress: string
      walletConnectDeepLink: string
      walletConnectV2Options: any
      walletConnectV2ProjectId: string
      walletConnectV2RelayAddress: string
    }
  }
  queryHandler?: (
    query: IContractQuery,
    endpointDefinition: EndpointDefinition
  ) => Promise<TypedOutcomeBundle>
  loginInfo?: LoginInfoStateType /* | {isLoggedIn: boolean} */
  refreshAccount?: () => void
  xNamesTransactions?: ServerTransactionType[]
  xNamesTransactionStatus: { success: boolean; fail: boolean; pending: boolean }
  isGettingxNamesTransactions?: boolean
  xNamestransactionsFetchingError?: string
  pendingTransactions?: {
    id: string
    method: string
    isPending: boolean
    isFailed: boolean
    isSuccessful: boolean
  }[]
}
export type ContainerState = BlockchainState
