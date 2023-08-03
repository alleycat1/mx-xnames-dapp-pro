import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "utils/@reduxjs/toolkit"
import { ContainerState } from "./types"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"

import { unlockPageSaga } from "./saga"

// The initial state of the Unlock container
export const initialState: ContainerState = {}

const unlockPageSlice = createSlice({
  name: "unlock",
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
})

export const {
  actions: UnlockPageActions,
  reducer: UnlockPageReducer,
  name: sliceKey,
} = unlockPageSlice

export const useUnlockPageSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: UnlockPageReducer })
  useInjectSaga({ key: sliceKey, saga: unlockPageSaga })
  return { UnlockPageActions }
}
