import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "types"
import { initialState } from "./slice"

export const SubdomainPageDomains = {
  root: (state: RootState) => state?.homePage,
  subdomain: (state: RootState) =>
    state?.subDomainPage?.subdomain || initialState.subdomain,
  isLoadingSubdomain: (state: RootState) =>
    state?.subDomainPage?.isLoadingSubdomain || initialState.isLoadingSubdomain,
}

export const SubdomainPageSelectors = {
  subdomain: createSelector(
    SubdomainPageDomains.subdomain,
    (subdomain) => subdomain
  ),
  isLoadingSubdomain: createSelector(
    SubdomainPageDomains.isLoadingSubdomain,
    (isLoading) => isLoading
  ),
}
