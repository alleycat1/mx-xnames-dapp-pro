import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "utils/@reduxjs/toolkit"
import { ContainerState } from "./types"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"

import { subDomainPageSaga } from "./saga"
import { SubDomainType } from "app/types"

// The initial state of the SubDomainPage container
export const initialState: ContainerState = {
  subdomain: undefined,
  isLoadingSubdomain: false,
}

const subDomainPageSlice = createSlice({
  name: "subDomainPage",
  initialState,
  reducers: {
    getSubdomain(state, action: PayloadAction<number>) {},
    setSubdomain(state, action: PayloadAction<SubDomainType>) {
      state.subdomain = action.payload
    },
    setIsLoadingSubdomain(state, action: PayloadAction<boolean>) {
      state.isLoadingSubdomain = action.payload
    },
  },
})

export const {
  actions: SubDomainPageActions,
  reducer: SubDomainPageReducer,
  name: sliceKey,
} = subDomainPageSlice

export const useSubDomainPageSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: SubDomainPageReducer })
  useInjectSaga({ key: sliceKey, saga: subDomainPageSaga })
  return { SubDomainPageActions }
}
