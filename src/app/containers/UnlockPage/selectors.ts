import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "types"
import { initialState } from "./slice"

const selectDomain = (state: RootState) => state.unlock || initialState

export const selectUnlock = createSelector(
  [selectDomain],
  (unlockState) => unlockState
)
