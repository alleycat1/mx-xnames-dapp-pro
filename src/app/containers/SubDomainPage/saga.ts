import { toast } from "react-toastify"
import { call, put, takeLatest } from "redux-saga/effects"
import { StandardResponse } from "services/constants"
import { getSubdomainApi } from "./providers"
import { SubDomainPageActions } from "./slice"

export function* getSubdomain(action: { type: string; payload: number }) {
  yield put(SubDomainPageActions.setIsLoadingSubdomain(true))
  try {
    const response: StandardResponse = yield call(
      getSubdomainApi,
      action.payload
    )
    if (response.is_success) {
      yield put(SubDomainPageActions.setSubdomain(response.data))
    } else {
      // need to be added message
      // toast.error(response.message)
    }
  } catch (err) {
    toast.warn("Can not get Subdomain details")
  } finally {
    yield put(SubDomainPageActions.setIsLoadingSubdomain(false))
  }
}

export function* subDomainPageSaga() {
  yield takeLatest(SubDomainPageActions.getSubdomain.type, getSubdomain)
}
