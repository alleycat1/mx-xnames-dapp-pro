import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "utils/@reduxjs/toolkit"
import { ContainerState } from "./types"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"

import { manageDomainPageSaga } from "./saga"

// The initial state of the ManageDomainPage container
export const initialState: ContainerState = {
  domains: null,
}

const manageDomainPageSlice = createSlice({
  name: "manageDomainPage",
  initialState,
  reducers: {
    setDomains(state) {
      state.domains = Array(7).fill("Dana")
    },
  },
})

export const {
  actions: ManageDomainPageActions,
  reducer: ManageDomainPageReducer,
  name: sliceKey,
} = manageDomainPageSlice

export const useManageDomainPageSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: ManageDomainPageReducer })
  useInjectSaga({ key: sliceKey, saga: manageDomainPageSaga })
  return { ManageDomainPageActions }
}
