import { globalActions } from "app/slice"
import { toast } from "react-toastify"
import { call, put, takeLatest } from "redux-saga/effects"
import { StandardResponse } from "services/constants"
import { saveLinkedInTokenApi, saveSettingsApi } from "./providers"
import { SettingsPageActions } from "./slice"
import { SaveChangesType } from "./types"

export function* saveChanges(action: {
  type: string
  payload: SaveChangesType
}) {
  yield put(SettingsPageActions.setIsSaving(true))

  try {
    const response: StandardResponse = yield call(
      saveSettingsApi,
      action.payload
    )
    if (response.is_success) {
      yield put(globalActions.getUserData())
      toast.success("Changes saved successfully")
    } else {
      // need to be added message
      // toast.error(response.message)
    }
  } catch (err) {
    toast.warn("Can not get save changes")
  } finally {
    yield put(SettingsPageActions.setIsSaving(false))
  }
}

export function* saveLinkedInToken(action: { type: string; payload: string }) {
  yield put(SettingsPageActions.setIsSavingLinkedIn(true))

  try {
    const response: StandardResponse = yield call(
      saveLinkedInTokenApi,
      action.payload
    )
    if (response.is_success) {
      toast.success("Linkedin saved successfully")
      yield put(globalActions.getUserData())
    } else {
      // need to be added message
      // toast.error(response.message)
    }
  } catch (err) {
    toast.warn("Can not get save linked in token")
  } finally {
    yield put(SettingsPageActions.setIsSavingLinkedIn(false))
  }
}

export function* settingsPageSaga() {
  yield takeLatest(SettingsPageActions.saveChanges.type, saveChanges)
  yield takeLatest(
    SettingsPageActions.saveLinkedInToken.type,
    saveLinkedInToken
  )
}
