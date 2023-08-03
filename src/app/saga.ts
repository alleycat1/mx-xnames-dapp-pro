import { replace } from "connected-react-router"
import { PayloadAction } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { call, delay, put, select, takeLatest } from "redux-saga/effects"
import { apiService } from "services/api_service"
import { SessionStorageKeys, StandardResponse } from "services/constants"
import { cookieConfig, CookieKeys, cookies } from "services/cookie"
import { AppPages } from "./constants"
import { signInAPI } from "./providers/signInApi"
import { GlobalDomains } from "./selectors"
import { globalActions } from "./slice"
import { FavoriteValue, WalletInfoDataType } from "./types"
import {
  domainLikeAPI,
  getFavoriteDomainsAPI,
  getUserAPI,
} from "./providers/globalApis"
import { sessionStorageService } from "utils/storage"

export function* SetIsLoggedIn(action: { type: string; payload: boolean }) {
  if (action.payload === false) {
    apiService.token = ""
    cookies.remove(CookieKeys.ACCESS_TOKEN, {
      path: cookieConfig().path,
      domain: cookieConfig().domain,
    })
    yield put(globalActions.setIsLoggedIn(false))
  } else {
    yield put(globalActions.getUserData())
    yield put(globalActions.getFavoriteDomains())
  }
}

export function* SignIn(action: { type: string; payload: string }) {
  yield put(globalActions.setIsLoadingSignIn(true))
  try {
    const response: StandardResponse = yield call(signInAPI, {
      wallet_address: action.payload,
    })
    if (response.is_success && !response.data.token) {
      toast.error(`invalid credentials`)
    }

    if (response.is_success && response.data.token) {
      const token = response.data.token
      cookies.set(CookieKeys.ACCESS_TOKEN, token, cookieConfig())
      yield put(globalActions.setIsLoggedIn(true))
      if (sessionStorageService.read(SessionStorageKeys.REDIRECT_ACTION)) {
        yield put(
          replace(
            sessionStorageService.read(SessionStorageKeys.REDIRECT_ACTION)
          )
        )
      }
      yield put(globalActions.getUserData())
      yield put(globalActions.getFavoriteDomains())
      toast.success("Wallet connected successfully")
    }
    if (!response.is_success) {
      toast.error(response.message)
    }
  } catch (err) {
    console.warn("Login failed: ", err)
  } finally {
    yield put(globalActions.setIsLoadingSignIn(false))
  }
}

export function* LogOut() {
  yield put(globalActions.setUserData(undefined))
  yield put(globalActions.setWalletInfoData(undefined))
  apiService.token = ""
  yield put(replace(AppPages.RootPage))
  cookies.remove(CookieKeys.ACCESS_TOKEN, {
    path: cookieConfig().path,
    domain: cookieConfig().domain,
  })
  cookies.remove(CookieKeys.WalletAddress, {
    path: cookieConfig().path,
    domain: cookieConfig().domain,
  })
  sessionStorageService.remove(SessionStorageKeys.REDIRECT_ACTION)
  toast.success("Wallet disconnected")
}

function* SetWalletInfoData(action: PayloadAction<WalletInfoDataType>) {}

export function* getUserData() {
  yield put(globalActions.setIsLoadingUserData(true))
  try {
    const response: StandardResponse = yield call(getUserAPI)

    if (response.is_success) {
      yield put(globalActions.setUserData(response.data))
    }
    if (!response.is_success) {
      toast.error(response.message)
    }
  } catch (err) {
    console.warn("Getting user data failed: ", err)
  } finally {
    yield put(globalActions.setIsLoadingUserData(false))
  }
}

export function* likeDomain(action: { type: string; payload: FavoriteValue }) {
  try {
    const response: StandardResponse = yield call(
      domainLikeAPI,
      action.payload.domainName
    )

    if (response.is_success) {
      if (action.payload.favorited) {
        toast.success("Domain is removed from favorites")
      } else {
        toast.success("Domain is added to favorites")
      }
      yield put(globalActions.getFavoriteDomains())
    }
  } catch (err) {
    console.warn("Domain like failed: ", err)
  }
}

export function* getFavoriteDomains() {
  yield put(globalActions.setIsLoadingFavoriteDomains(true))
  try {
    const response: StandardResponse = yield call(getFavoriteDomainsAPI)

    if (response.is_success) {
      yield put(globalActions.setFavoriteDomains(response.data))
    }
  } catch (err) {
    toast.warn("Getting favorite list of domains failed")
  } finally {
    yield put(globalActions.setIsLoadingFavoriteDomains(false))
  }
}

export function* globalSaga() {
  yield takeLatest(globalActions.setIsLoggedIn.type, SetIsLoggedIn)
  yield takeLatest(globalActions.signIn.type, SignIn)
  yield takeLatest(globalActions.logOut.type, LogOut)
  yield takeLatest(globalActions.setWalletInfoData.type, SetWalletInfoData)
  yield takeLatest(globalActions.getUserData.type, getUserData)
  yield takeLatest(globalActions.likeDomain.type, likeDomain)
  yield takeLatest(globalActions.getFavoriteDomains.type, getFavoriteDomains)
}
