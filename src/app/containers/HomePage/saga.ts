import { checkDomainApi } from "app/providers/globalApis"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { StatusEnum } from "app/types"
import { toast } from "react-toastify"
import { call, put, select, takeLatest, delay } from "redux-saga/effects"
import { StandardResponse } from "services/constants"
import { addTrailingCCD } from "utils/commonUtils"
import { getDomainsApi } from "./providers"
import { HomePageSelectors } from "./selectors"
import { HomePageActions } from "./slice"

export function* getDomains() {
  yield put(HomePageActions.setIsLoadingDomains(true))

  const page = yield select(HomePageSelectors.selectedPage)
  const filterStatus = yield select(HomePageSelectors.filterValue)

  try {
    const response: StandardResponse = yield call(
      getDomainsApi,
      page,
      filterStatus
    )

    if (response.is_success) {
      yield put(HomePageActions.setDomains(response.data.data))
      yield put(HomePageActions.setTotal(response.data.total))
    } else {
      // need to be added message
      // toast.error(response.message)
    }
  } catch (err) {
    toast.warn("error getting domains, please try again later")
  } finally {
    yield put(HomePageActions.setIsLoadingDomains(false))
  }
}

export function* checkDomain() {
  yield put(HomePageActions.setIsLoadingDomains(true))
  const searchValue = yield select(HomePageSelectors.searchValue)

  try {
    let name: string = searchValue
    if (!name.endsWith(".ccd")) {
      name = name + ".ccd"
    }

    const response: StandardResponse = yield call(checkDomainApi, name)
    if (response.is_success) {
      yield put(HomePageActions.setSearchedDomain(response.data))
      yield call(addNewCardBySearchedDomain)
    } else {
      // need to be added message
      // toast.error(response.message)
    }
  } catch (err) {
    toast.warn("error in searched domain, please contact our support")
  } finally {
    yield put(HomePageActions.setIsLoadingDomains(false))
  }
}

function* setSearchValue() {
  yield delay(500)
  yield put(HomePageActions.setTotal(0))
  yield call(getDomainByCondition)
}

function* getDomainByCondition() {
  const searchValue = yield select(HomePageSelectors.searchValue)
  if (searchValue) {
    yield call(checkDomain)
  } else {
    yield call(getDomains)
  }
}

function* addNewCardBySearchedDomain() {}

export function* homePageSaga() {
  yield takeLatest(HomePageActions.setSelectedPage.type, getDomainByCondition)
  yield takeLatest(HomePageActions.setFilterValue.type, getDomains)
  yield takeLatest(HomePageActions.setSearchValue.type, setSearchValue)
}
