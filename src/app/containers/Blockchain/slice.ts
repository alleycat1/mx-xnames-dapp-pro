import {
  LoginInfoStateType,
  NetworkConfigStateType,
} from "@multiversx/sdk-dapp/reduxStore/slices"
import { AccountType, ServerTransactionType } from "@multiversx/sdk-dapp/types"
import { refreshAccount } from "@multiversx/sdk-dapp/utils"
import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "utils/@reduxjs/toolkit"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"
import { usexNamesTransactions } from "./hooks/usexNamesTransactions"
import { blockchainSaga } from "./saga"
import { BlockchainState, ContainerState } from "./types"

// The initial state of the DomainPage container
export const initialState: ContainerState = {
  xNamesTransactionStatus: {
    fail: false,
    pending: false,
    success: false,
  },
}
const blockchainSlice = createSlice({
  name: "blockchain",
  initialState,
  reducers: {
    setUserAccount(state, action: PayloadAction<AccountType | undefined>) {
      state.connectedAccount = action.payload
      state.refreshAccount = refreshAccount
    },
    setNetwork(
      state,
      action: PayloadAction<NetworkConfigStateType | undefined>
    ) {
      state.network = action.payload
    },
    setLoginInfo(state, action: PayloadAction<LoginInfoStateType | undefined>) {
      state.loginInfo = action.payload
    },
    setQueryHandler(
      state,
      action: PayloadAction<BlockchainState["queryHandler"]>
    ) {
      state.queryHandler = action.payload
    },
    // xNames actions
    getxNamesTransactions(state, action: PayloadAction<void>) {},
    setXNamesTransactionStatus(
      state,
      action: PayloadAction<ContainerState["xNamesTransactionStatus"]>
    ) {
      state.xNamesTransactionStatus = action.payload
      // status will be reset to initial value in 100 ms by saga if status.success is true
    },
    resetXNamesTransactionStatus(state, action: PayloadAction<void>) {
      state.xNamesTransactionStatus = initialState.xNamesTransactionStatus
    },
    setIsGettingxNamesTransactions(state, action: PayloadAction<boolean>) {
      state.isGettingxNamesTransactions = action.payload
    },
    setxNamesTransactions(
      state,
      action: PayloadAction<ServerTransactionType[]>
    ) {
      state.xNamesTransactions = action.payload
    },
    setxNamestransactionsFetchingError(
      state,
      action: PayloadAction<string | undefined>
    ) {
      state.xNamestransactionsFetchingError = action.payload
    },
  },
})

export const {
  actions: BlockchainActions,
  reducer: BlockchainReducers,
  name: sliceKey,
} = blockchainSlice

export const useBlockchainSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: BlockchainReducers })
  useInjectSaga({ key: sliceKey, saga: blockchainSaga })
  usexNamesTransactions()
  return { BlockchainActions }
}
