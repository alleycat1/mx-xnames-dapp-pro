import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "types"
import { initialState } from "./slice"

export const MyAccountDomains = {
  root: (state: RootState) => state?.myAccountPage,
  domains: (state: RootState) =>
    state?.myAccountPage?.domains || initialState.domains,
  isLoadingDomains: (state: RootState) =>
    state?.myAccountPage?.isLoadingDomains || initialState.isLoadingDomains,
  total: (state: RootState) =>
    state?.myAccountPage?.total || initialState.total,
  selectedPage: (state: RootState) =>
    state?.myAccountPage?.selectedPage || initialState.selectedPage,
  filterValue: (state: RootState) =>
    state?.myAccountPage?.filterValue || initialState.filterValue,
}

export const MyAccountSelectors = {
  domains: createSelector(MyAccountDomains.domains, (domains) => domains),
  isLoadingDomains: createSelector(
    MyAccountDomains.isLoadingDomains,
    (isLoading) => isLoading
  ),
  total: createSelector(MyAccountDomains.total, (totalCount) => totalCount),
  selectedPage: createSelector(MyAccountDomains.selectedPage, (page) => page),
  filterValue: createSelector(
    MyAccountDomains.filterValue,
    (filterValue) => filterValue
  ),
}
