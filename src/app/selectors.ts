import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "types"

export const GlobalDomains = {
  root: (state: RootState) => state?.global,
  router: (state: RootState) => state?.router || {},
  loggedIn: (state: RootState) => state?.global?.loggedIn || false,
  isWalletConnectionModalOpen: (state: RootState) =>
    state?.global?.globalModals?.isWalletConnectionModalOpen || false,
}

export const GlobalSelectors = {
  router: createSelector(GlobalDomains.router, (state) => state),
  root: createSelector(GlobalDomains.root, (state) => state),
  loggedIn: createSelector(GlobalDomains.loggedIn, (isLoggedIn) => isLoggedIn),
  isWalletConnectionModalOpen: createSelector(
    GlobalDomains.isWalletConnectionModalOpen,
    (isOpen) => isOpen
  ),
}
