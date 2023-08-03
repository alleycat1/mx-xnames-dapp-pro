import { PageableInterface } from "app/types"
import { toast } from "react-toastify"
import { call, put, select, takeLatest } from "redux-saga/effects"
import { StandardResponse } from "services/constants"
import { getMyDomainsApi } from "./providers"
import { MyAccountSelectors } from "./selectors"
import { MyAccountActions } from "./slice"

export function* getDomains() {
  yield put(MyAccountActions.setIsLoadingDomains(true))

  const page = yield select(MyAccountSelectors.selectedPage)
  const filterStatus = yield select(MyAccountSelectors.filterValue)

  try {
    const response: StandardResponse = yield call(
      getMyDomainsApi,
      page,
      filterStatus
    )
    if (response.is_success) {
      yield put(MyAccountActions.setDomains(response.data.data))
      yield put(MyAccountActions.setTotal(response.data.total))
    } else {
      // need to be added message
      // toast.error(response.message)
    }
  } catch (err) {
    toast.warn("Can not get my Domains")
  } finally {
    yield put(MyAccountActions.setIsLoadingDomains(false))
  }
}

export function* myAccountSaga() {
  yield takeLatest(MyAccountActions.setSelectedPage.type, getDomains)
  yield takeLatest(MyAccountActions.setFilterValue.type, getDomains)
}
