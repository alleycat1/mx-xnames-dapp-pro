import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "types"
import { initialState } from "./slice"

const MarketPlacePageDomains = {
  root: (state: RootState) => state?.marketPlacePage,
  domains: (state: RootState) =>
    state?.marketPlacePage?.domains || initialState.domains,
}

export const MarketPlacePageSelectors = {
  domains: createSelector(MarketPlacePageDomains.domains, (domains) => domains),
}
