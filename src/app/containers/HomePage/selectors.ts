import { createSelector } from "@reduxjs/toolkit"
import { GlobalDomains } from "app/selectors"

import { RootState } from "types"
import { initialState } from "./slice"

export const HomePageDomains = {
  root: (state: RootState) => state?.homePage,
  domains: (state: RootState) =>
    state.homePage?.domains || initialState.domains,
  searchedDomain: (state: RootState) =>
    state.homePage?.searchedDomain || initialState.searchedDomain,
  isLoadingDomains: (state: RootState) =>
    state.homePage?.isLoadingDomains || initialState.isLoadingDomains,
  searchValue: (state: RootState) =>
    state.homePage?.searchValue || initialState.searchValue,
  total: (state: RootState) => state.homePage?.total || initialState.total,
  selectedPage: (state: RootState) =>
    state.homePage?.selectedPage || initialState.selectedPage,
  searchText: (state: RootState) =>
    state.homePage?.searchText || initialState.searchText,
  filterValue: (state: RootState) =>
    state.homePage?.filterValue || initialState.filterValue,
  errorValue: (state: RootState) =>
    state.homePage?.errorValue || initialState.errorValue,
  helperText: (state: RootState) =>
    state.homePage?.helperText || initialState.helperText,
}

export const HomePageSelectors = {
  domains: createSelector([HomePageDomains.domains], (domains) => {
    return domains
  }),
  isLoadingDomains: createSelector(
    HomePageDomains.isLoadingDomains,
    (isLoading) => isLoading
  ),
  searchValue: createSelector(HomePageDomains.searchValue, (text) => text),
  searchedDomain: createSelector(
    HomePageDomains.searchedDomain,
    (domain) => domain
  ),
  total: createSelector(HomePageDomains.total, (totalCount) => totalCount),
  selectedPage: createSelector(
    HomePageDomains.selectedPage,
    (selectedPage) => selectedPage
  ),
  searchText: createSelector(HomePageDomains.searchText, (text) => text),
  filterValue: createSelector(
    HomePageDomains.filterValue,
    (filterValue) => filterValue
  ),
  errorValue: createSelector(
    HomePageDomains.errorValue,
    (errorValue) => errorValue
  ),
  helperText: createSelector(HomePageDomains.helperText, (text) => text),
}
