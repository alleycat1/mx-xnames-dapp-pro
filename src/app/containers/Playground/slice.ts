import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "utils/@reduxjs/toolkit"
import { ContainerState } from "./types"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"

import { playgroundSaga } from "./saga"

// The initial state of the Playground container
export const initialState: ContainerState = {
  isGettingTransactions: false,
  transactions: [],
  transactionsFetchingError: undefined,
  // pingpong
  isGettingPingpongTransactions: false,
  pingpongTransactions: [],
  pingpongTransactionsFetchingError: undefined,
}

const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    getTransactions(state, action: PayloadAction<void>) {},
    setIsGettingTransactions(state, action: PayloadAction<boolean>) {
      state.isGettingTransactions = action.payload
    },
    setTransactions(state, action: PayloadAction<any[]>) {
      state.transactions = action.payload
    },
    setTransactionsFetchingError(state, action: PayloadAction<string>) {
      state.transactionsFetchingError = action.payload
    },
    // pingpong
    getPingpongTransactions(state, action: PayloadAction<void>) {},
    setIsGettingPingpongTransactions(state, action: PayloadAction<boolean>) {
      state.isGettingPingpongTransactions = action.payload
    },
    setPingpongTransactions(state, action: PayloadAction<any[]>) {
      state.pingpongTransactions = action.payload
    },
    setPingpongTransactionsFetchingError(state, action: PayloadAction<string>) {
      state.pingpongTransactionsFetchingError = action.payload
    },
    fetchPingAmount(state, action: PayloadAction<void>) {},
    ping() {},
  },
})

export const {
  actions: PlaygroundActions,
  reducer: PlaygroundReducer,
  name: sliceKey,
} = playgroundSlice

export const usePlaygroundSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: PlaygroundReducer })
  useInjectSaga({ key: sliceKey, saga: playgroundSaga })
  return { PlaygroundActions }
}
