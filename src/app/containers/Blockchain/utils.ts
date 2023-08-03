import { Query } from "@multiversx/sdk-core/out"
import { ResultsParser } from "@multiversx/sdk-core/out/smartcontracts/resultsParser"
import { EndpointDefinition } from "@multiversx/sdk-core/out/smartcontracts/typesystem/endpoint"
import { sendTransactions } from "@multiversx/sdk-dapp/services/transactions/sendTransactions"
import {
  SendTransactionsPropsType,
  TransactionsDisplayInfoType,
} from "@multiversx/sdk-dapp/types/transactions.types"
import { IContractQuery } from "@multiversx/sdk-network-providers/out/interface"
import { ProxyNetworkProvider } from "@multiversx/sdk-network-providers/out/proxyNetworkProvider"
import { call, select } from "redux-saga/effects"
import { BlockchainDomains } from "./selectors"
import { BlockchainState } from "./types"
const resultsParser = new ResultsParser()

export const getQueryHandler = (proxy: ProxyNetworkProvider) => {
  return async (
    query: IContractQuery,
    endpointDefinition: EndpointDefinition
  ) => {
    const queryResponse = await proxy.queryContract(query)
    return resultsParser.parseQueryResponse(queryResponse, endpointDefinition)
  }
}

export function* sendTransaction({
  transactions,
  displayInfo,
}: {
  transactions: SendTransactionsPropsType["transactions"]
  displayInfo: TransactionsDisplayInfoType
}) {
  const refreshAccount = yield select(BlockchainDomains.refreshAccount)
  yield call(refreshAccount)
  try {
    const res = yield call(sendTransactions, {
      transactions,
      transactionsDisplayInfo: displayInfo,
      redirectAfterSign: false,
    })
    return res
  } catch (error) {
    console.error("Error sending transaction: ", error)
  }
}

export function* runQuery({
  query,
  endpointDefinition,
}: {
  query: Query
  endpointDefinition: EndpointDefinition
}) {
  const queryHandler: BlockchainState["queryHandler"] = yield select(
    BlockchainDomains.queryHandler
  )
  if (queryHandler) {
    return yield call(queryHandler, query, endpointDefinition)
  } else {
    throw Error("query handler is not set")
  }
}
