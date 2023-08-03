import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "utils/@reduxjs/toolkit"
import { ContainerState } from "./types"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"

import { marketPlacePageSaga } from "./saga"

// The initial state of the MarketPlacePage container
export const initialState: ContainerState = {
  domains: Array(7).fill("Dana"),
}

const marketPlacePageSlice = createSlice({
  name: "marketPlacePage",
  initialState,
  reducers: {
    setDomains(state) {},
  },
})

export const {
  actions: MarketPlacePageActions,
  reducer: MarketPlacePageReducer,
  name: sliceKey,
} = marketPlacePageSlice

export const useMarketPlacePageSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: MarketPlacePageReducer })
  useInjectSaga({ key: sliceKey, saga: marketPlacePageSaga })
  return { MarketPlacePageActions }
}
