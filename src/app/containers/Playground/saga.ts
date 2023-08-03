import { ContractFunction } from "@multiversx/sdk-core/out/smartcontracts/function"
import { getTransactions } from "@multiversx/sdk-dapp/apiCalls/transactions/getTransactions"
import { SendTransactionReturnType } from "@multiversx/sdk-dapp/types/transactions.types"
import { AppEnvironment } from "environment"
import { call, put, select, takeLatest } from "redux-saga/effects"
import { BlockchainDomains } from "../Blockchain/selectors"
import { BlockchainState } from "../Blockchain/types"
import { runQuery, sendTransaction } from "../Blockchain/utils"
import { pingpongContract } from "./contracts"
import { PlaygroundActions } from "./slice"

function* getPlaygroundTransactions() {
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
      yield put(PlaygroundActions.setTransactions(transactions.data))
    } catch (error: any) {
      yield put(PlaygroundActions.setTransactionsFetchingError(error.message))
    } finally {
      yield put(PlaygroundActions.setIsGettingTransactions(false))
    }
  }
}

function* getPingpongTransactions() {
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
      receiver: AppEnvironment.contracts.pingPong,
      condition: "must" as const,
      apiTimeout: AppEnvironment.mvx.apiTimeout,
      transactionSize: AppEnvironment.mvx.transactionSize,
    }
    try {
      const transactions = yield call(getTransactions, params)
      console.log({ transactions: transactions.data })
      yield put(PlaygroundActions.setTransactions(transactions.data))
    } catch (error: any) {
      yield put(PlaygroundActions.setTransactionsFetchingError(error.message))
    } finally {
      yield put(PlaygroundActions.setIsGettingTransactions(false))
    }
  }
}

function* fetchPingAmount() {
  const query = pingpongContract.createQuery({
    func: new ContractFunction("getPingAmount"),
  })
  const endpointDefinition = pingpongContract.getEndpoint("getPingAmount")
  try {
    const { firstValue: amount } = yield call(runQuery, {
      query,
      endpointDefinition,
    })
    console.log("ping amount", amount?.valueOf()?.toString(10))
    return amount?.valueOf()?.toString(10)
  } catch (error) {
  } finally {
  }
}

function* ping() {
  const pingAmount: string = yield call(fetchPingAmount)
  const transaction = {
    data: "ping",
    value: pingAmount,
    gasLimit: 60000000,
    receiver: AppEnvironment.contracts.pingPong,
  }
  const displayInfo = {
    successMessage: "Ping transaction successful",
    processingMessage: "Processing Ping transaction",
    errorMessage: "An error has occurred during Ping",
  }
  const res: SendTransactionReturnType = yield call(sendTransaction, {
    transactions: transaction,
    displayInfo,
  })
  console.log({ res })
}

export function* playgroundSaga() {
  yield takeLatest(
    PlaygroundActions.getTransactions.type,
    getPlaygroundTransactions
  )
  yield takeLatest(
    PlaygroundActions.getPingpongTransactions.type,
    getPingpongTransactions
  )
  yield takeLatest(PlaygroundActions.fetchPingAmount.type, fetchPingAmount)
  yield takeLatest(PlaygroundActions.ping.type, ping)
}
