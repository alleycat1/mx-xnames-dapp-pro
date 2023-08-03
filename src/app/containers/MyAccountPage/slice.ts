import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "utils/@reduxjs/toolkit"
import { ContainerState, FilterOptionsType } from "./types"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"

import { myAccountSaga } from "./saga"
import { DomainsType, PageableInterface } from "app/types"
import { PageableParams } from "app/constants"

// The initial state of the MyAccount container
export const initialState: ContainerState = {
  domains: undefined,
  isLoadingDomains: false,
  total: 0,
  selectedPage: PageableParams.page,
  filterValue: "My Domains",
}

const myAccountSlice = createSlice({
  name: "myAccountPage",
  initialState,
  reducers: {
    setIsLoadingDomains(state, action: PayloadAction<boolean>) {
      state.isLoadingDomains = action.payload
    },
    getDomains(_, action: PayloadAction<PageableInterface>) {},
    setDomains(state, action: PayloadAction<DomainsType>) {
      state.domains = action.payload
    },
    setTotal(state, action: PayloadAction<number>) {
      state.total = action.payload
    },
    setSelectedPage(state, action: PayloadAction<number>) {
      state.selectedPage = action.payload
    },
    setFilterValue(state, action: PayloadAction<FilterOptionsType>) {
      state.filterValue = action.payload
    },
  },
})

export const {
  actions: MyAccountActions,
  reducer: MyAccountReducer,
  name: sliceKey,
} = myAccountSlice

export const useMyAccountSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: MyAccountReducer })
  useInjectSaga({ key: sliceKey, saga: myAccountSaga })
  return { MyAccountActions }
}
