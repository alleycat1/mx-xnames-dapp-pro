import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "utils/@reduxjs/toolkit"
import { ContainerState, SaveChangesType } from "./types"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"

import { settingsPageSaga } from "./saga"

// The initial state of the SettingsPage container
export const initialState: ContainerState = {
  isSaving: false,
  linkedin: {
    isSaving: false,
    isLoading: false,
  },
}

const settingsPageSlice = createSlice({
  name: "settingsPage",
  initialState,
  reducers: {
    saveChanges(state, action: PayloadAction<SaveChangesType>) {},
    setIsSaving(state, action: PayloadAction<boolean>) {
      state.isSaving = action.payload
    },
    saveLinkedInToken(state, action: PayloadAction<string>) {},
    setIsSavingLinkedIn(state, action: PayloadAction<boolean>) {
      state.linkedin.isSaving = action.payload
    },
    setIsLoadingLinkedIn(state, action: PayloadAction<boolean>) {
      state.linkedin.isLoading = action.payload
    },
  },
})

export const {
  actions: SettingsPageActions,
  reducer: SettingsPageReducer,
  name: sliceKey,
} = settingsPageSlice

export const useSettingsPageSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: SettingsPageReducer })
  useInjectSaga({ key: sliceKey, saga: settingsPageSaga })
  return { SettingsPageActions }
}
