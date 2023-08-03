import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "types"
import { initialState } from "./slice"

const ManageDomainsPageDomains = {
  root: (state: RootState) => state?.manageDomainPage,
  domains: (state: RootState) =>
    state?.manageDomainPage?.domains || initialState.domains,
}

export const ManageDomainsPageSelectors = {
  domains: createSelector(
    ManageDomainsPageDomains.domains,
    (domains) => domains
  ),
}
