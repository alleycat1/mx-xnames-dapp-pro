import { getTransactions } from "@multiversx/sdk-dapp/apiCalls/transactions/getTransactions"
import { ProxyNetworkProvider } from "@multiversx/sdk-network-providers/out/proxyNetworkProvider"
import { PayloadAction } from "@reduxjs/toolkit"
import { AppEnvironment } from "environment"
import { all, call, delay, put, select, takeLatest } from "redux-saga/effects"
import { BlockchainDomains } from "./selectors"
import { BlockchainActions } from "./slice"
import { BlockchainState } from "./types"
import { getQueryHandler } from "./utils"

function* initializeQuerHandler(
  action: PayloadAction<BlockchainState["network"] | undefined>
) {
  if (action.payload) {
    const {
      network: { apiAddress },
    } = action.payload
    const proxy = new ProxyNetworkProvider(apiAddress)
    const queryHandler: BlockchainState["queryHandler"] = yield call(
      getQueryHandler,
      proxy
    )
    if (queryHandler) {
      yield put(BlockchainActions.setQueryHandler(queryHandler))
    } else {
      console.log("Error: queryHandler is undefined")
      yield put(BlockchainActions.setQueryHandler(undefined))
    }
  } else {
    console.log("Error: network is undefined")
    yield put(BlockchainActions.setQueryHandler(undefined))
  }
}

function* getxNamesTransactions() {
  yield all([
    put(BlockchainActions.setIsGettingxNamesTransactions(true)),
    put(BlockchainActions.setxNamestransactionsFetchingError(undefined)),
  ])
  const account: BlockchainState["connectedAccount"] = yield select(
    BlockchainDomains.connectedAccount
  )
  const ntwrk: BlockchainState["network"] = yield select(
    BlockchainDomains.network
  )
  if (ntwrk && account) {
    const {
      network: { apiAddress },
    } = ntwrk
    const { address } = account
    const params = {
      apiAddress,
      sender: address,
      receiver: AppEnvironment.contracts.xNames,
      condition: "must" as const,
      apiTimeout: AppEnvironment.mvx.apiTimeout,
      transactionSize: AppEnvironment.mvx.transactionSize,
    }
    try {
      const transactions = yield call(getTransactions, params)
      yield put(BlockchainActions.setxNamesTransactions(transactions.data))
    } catch (error: any) {
      yield put(
        BlockchainActions.setxNamestransactionsFetchingError(error.message)
      )
    } finally {
      yield put(BlockchainActions.setIsGettingxNamesTransactions(false))
    }
  }
}

function* resetsetXNamesTransactionStatus() {
  const xNamesTransactionStatus: BlockchainState["xNamesTransactionStatus"] =
    yield select(BlockchainDomains.xNamesTransactionStatus)
  if (xNamesTransactionStatus.success) {
    yield delay(100)
    yield put(BlockchainActions.resetXNamesTransactionStatus())
  }
}

export function* blockchainSaga() {
  yield takeLatest(BlockchainActions.setNetwork.type, initializeQuerHandler)
  yield takeLatest(
    BlockchainActions.getxNamesTransactions.type,
    getxNamesTransactions
  )
  yield takeLatest(
    BlockchainActions.setXNamesTransactionStatus.type,
    resetsetXNamesTransactionStatus
  )
}
