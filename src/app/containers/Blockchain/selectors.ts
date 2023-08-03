import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "types"
import { initialState } from "./slice"

export const BlockchainDomains = {
  root: (state: RootState) => state?.blockchain,
  loginInfo: (state: RootState) => state?.blockchain?.loginInfo || undefined,
  connectedAccount: (state: RootState) =>
    state?.blockchain?.connectedAccount || undefined,
  network: (state: RootState) => state?.blockchain?.network || undefined,
  chainId: (state: RootState) =>
    state?.blockchain?.network?.chainID || undefined,
  queryHandler: (state: RootState) =>
    state?.blockchain?.queryHandler || undefined,
  refreshAccount: (state: RootState) => state?.blockchain?.refreshAccount,
  xNamesTransactions: (state: RootState) =>
    state?.blockchain?.xNamesTransactions || [],
  xNamesTransactionStatus: (state: RootState) =>
    state?.blockchain?.xNamesTransactionStatus ||
    initialState.xNamesTransactionStatus,
}

export const BlockchainSelectors = {
  loginInfo: createSelector(
    BlockchainDomains.loginInfo,
    (loginInfo) => loginInfo
  ),
  connectedAccount: createSelector(
    BlockchainDomains.connectedAccount,
    (connectedAccount) => connectedAccount
  ),
  network: createSelector(BlockchainDomains.network, (network) => network),
  xNamesTransactions: createSelector(
    BlockchainDomains.xNamesTransactions,
    (xNamesTransactions) => xNamesTransactions
  ),
  chainId: createSelector(BlockchainDomains.chainId, (chainId) => chainId),
  xNamesTransactionStatus: createSelector(
    BlockchainDomains.xNamesTransactionStatus,
    (xNamesTransactionStatus) => xNamesTransactionStatus
  ),
}
