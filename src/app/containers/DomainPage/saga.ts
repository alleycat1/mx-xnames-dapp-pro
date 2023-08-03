import { AccountType } from "@multiversx/sdk-dapp/types"
import { SendTransactionReturnType } from "@multiversx/sdk-dapp/types/transactions.types"
import { refreshAccount } from "@multiversx/sdk-dapp/utils"
import { PayloadAction } from "@reduxjs/toolkit"
import { call, put, select, takeLatest } from "redux-saga/effects"
import { Egld } from "utils/egld"
import { xNamesContract } from "../Blockchain/contracts/xNames"
import { isItRegistered } from "../Blockchain/providers/xNames/IsItRegistered"
import { BlockchainDomains } from "../Blockchain/selectors"
import { sendTransaction } from "../Blockchain/utils"
import { DomainPageDomains } from "./selectors"

import { DomainPageActions } from "./slice"

function* startDomainRegisteration() {
  const domainToRegister = yield select(DomainPageDomains.domainToRegister)
  const name = domainToRegister.name
  const duration = domainToRegister.duration
  const alreadyRegistered = yield call(isItRegistered, name)
  console.log({ alreadyRegistered })
  yield call(refreshAccount)
  const account: AccountType = yield select(BlockchainDomains.connectedAccount)
  const chainId = yield select(BlockchainDomains.chainId)
  const transaction: any = xNamesContract.methods
    .register_or_renew([name, duration, account.address])
    .withValue(Egld(1))
    .withGasLimit(60000000)
    .withChainID(chainId)
    .withNonce(account.nonce + 1)
    .buildTransaction()

  const displayInfo = {
    successMessage: `${name} is Successfully registered`,
    processingMessage: `Registering ${name}`,
    errorMessage: `An error has occurred during ${name} registration`,
  }
  const res: SendTransactionReturnType = yield call(sendTransaction, {
    transactions: transaction,
    displayInfo,
  })
  yield put(DomainPageActions.setDomainToRegister(undefined))
  console.log({ res })
}

export function* domainPageSaga() {
  yield takeLatest(
    DomainPageActions.startDomainRegisteration.type,
    startDomainRegisteration
  )
  // legacy
}
