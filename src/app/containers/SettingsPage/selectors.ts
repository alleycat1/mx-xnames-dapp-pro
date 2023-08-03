import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "types"
import { initialState } from "./slice"

export const SettingsPageDomains = {
  root: (state: RootState) => state?.settingsPage,
  isSaving: (state: RootState) =>
    state?.settingsPage?.isSaving || initialState.isSaving,
  isLoadingLinkedIn: (state: RootState) =>
    state?.settingsPage?.linkedin.isLoading || initialState.linkedin.isLoading,
  isSavingLinkedIn: (state: RootState) =>
    state?.settingsPage?.linkedin.isSaving || initialState.linkedin.isSaving,
}

export const SettingsPageSelectors = {
  isSaving: createSelector(
    SettingsPageDomains.isSaving,
    (isSaving) => isSaving
  ),
  isLoadingLinkedIn: createSelector(
    SettingsPageDomains.isLoadingLinkedIn,
    (isLoading) => isLoading
  ),
  isSavingLinkedIn: createSelector(
    SettingsPageDomains.isSavingLinkedIn,
    (isSaving) => isSaving
  ),
}
