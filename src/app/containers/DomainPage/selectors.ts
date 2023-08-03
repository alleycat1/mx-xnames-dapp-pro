import { createSelector } from "@reduxjs/toolkit"
import moment from "moment"
import { add, divide, multiply, subtract } from "precise-math"

import { RootState } from "types"
import { maxYear } from "./constants"
import { initialState } from "./slice"

export const DomainPageDomains = {
  root: (state: RootState) => state?.domainPage,
  domainToRegister: (state: RootState) => state?.domainPage?.domainToRegister,
  //legacy
  year: (state: RootState) => state?.domainPage?.year || initialState.year,
  extendYear: (state: RootState) =>
    state?.domainPage?.extendYear || initialState.extendYear,
  registerFee: (state: RootState) =>
    state?.domainPage?.registerFee || initialState.registerFee,
  registerFeeUSD: (state: RootState) =>
    state?.domainPage?.registerFeeUSD || initialState.registerFeeUSD,
  transferFee: (state: RootState) =>
    state?.domainPage?.transferFee || initialState.transferFee,
  extendFee: (state: RootState) =>
    state?.domainPage?.extendFee || initialState.extendFee,
  extendPrice: (state: RootState) =>
    state?.domainPage?.extendPrice || initialState.extendPrice,
  subdomainFee: (state: RootState) =>
    state?.domainPage?.subDomainFee || initialState.subDomainFee,
  bidFee: (state: RootState) =>
    state?.domainPage?.bidFee || initialState.bidFee,
  setDataFee: (state: RootState) =>
    state?.domainPage?.setDataFee || initialState.setDataFee,
  setAddressFee: (state: RootState) =>
    state?.domainPage?.setAddressFee || initialState.setAddressFee,
  subdomainPrice: (state: RootState) =>
    state?.domainPage?.subDomainPrice || initialState.subDomainPrice,
  domain: (state: RootState) =>
    state?.domainPage?.domain || initialState.domain,
  bidAmount: (state: RootState) =>
    state?.domainPage?.bidAmount || initialState.bidAmount,
  subdomains: (state: RootState) =>
    state?.domainPage?.subdomains || initialState.subdomains,
  isLoadingDomain: (state: RootState) =>
    state?.domainPage?.isLoadingDomain || initialState.isLoadingDomain,
  isLoadingSubdomains: (state: RootState) =>
    state?.domainPage?.isLoadingSubdomains || initialState.isLoadingSubdomains,
  isLoadingRegGasFee: (state: RootState) =>
    state?.domainPage?.loadingRegisterFee || initialState.loadingRegisterFee,
  isLoadingTransferFee: (state: RootState) =>
    state?.domainPage?.loadingTransferFee || initialState.loadingTransferFee,
  isLoadingExtendFee: (state: RootState) =>
    state?.domainPage?.loadingExtendFee || initialState.loadingExtendFee,
  isLoadingSubdomainFee: (state: RootState) =>
    state?.domainPage?.loadingSubDomainFee || initialState.loadingSubDomainFee,
  isLoadingBidFee: (state: RootState) =>
    state?.domainPage?.loadingBidFee || initialState.loadingBidFee,
  isCreatingDomain: (state: RootState) =>
    state?.domainPage?.isCreatingDomain || initialState.isCreatingDomain,
  isOpenConfirmModalDomain: (state: RootState) =>
    state?.domainPage?.modals?.register?.isOpenConfirmModal || false,
  isOpenTransferModal: (state: RootState) =>
    state?.domainPage?.modals?.transfer?.isOpenTransferModal || false,
  isOpenExtendModal: (state: RootState) =>
    state?.domainPage?.modals?.extend?.isOpenExtendModal || false,
  isOpenPlaceBidModal: (state: RootState) =>
    state?.domainPage?.modals?.auction?.isOpenPlaceBidModal || false,
  isOpenSetAddressModal: (state: RootState) =>
    state?.domainPage?.modals?.address?.isOpenSetAddressModal ||
    initialState.modals.address.isOpenSetAddressModal,
  subdomainName: (state: RootState) =>
    state?.domainPage?.subdomainName || initialState.subdomainName,
  transferDomainWalletAddress: (state: RootState) =>
    state?.domainPage?.transferDomainWalletAddress ||
    initialState.transferDomainWalletAddress,
  domainRegisterPriceInCCD: (state: RootState) =>
    state?.domainPage?.domain?.price?.primary.value || null,
  domainRegisterPriceInUSD: (state: RootState) =>
    state?.domainPage?.domain?.price?.secondary.value || null,
  slippage: (state: RootState) => initialState.slippage,
  recordKey: (state: RootState) =>
    state?.domainPage?.record.key || initialState.record.key,
  recordTitle: (state: RootState) =>
    state?.domainPage?.record.title || initialState.record.title,
  recordValue: (state: RootState) =>
    state?.domainPage?.record.value || initialState.record.value,
  recordType: (state: RootState) =>
    state?.domainPage?.record.type || initialState.record.type,
  isLoadingSetDataFee: (state: RootState) =>
    state?.domainPage?.loadingSetDataFee || initialState.loadingSetDataFee,
  resolverNewAddress: (state: RootState) =>
    state?.domainPage?.resolverNewAddress || initialState.resolverNewAddress,
  isLoadingSetAddressFee: (state: RootState) =>
    state?.domainPage?.loadingSetAddressFee ||
    initialState.loadingSetAddressFee,
  bidsList: (state: RootState) =>
    state?.domainPage?.bids.list || initialState.bids.list,
  isLoadingBids: (state: RootState) =>
    state?.domainPage?.bids.isLoading || initialState.bids.isLoading,
  bidsTotalCount: (state: RootState) =>
    state?.domainPage?.bids.totalCount || initialState.bids.totalCount,
  nftId: (state: RootState) => state?.domainPage?.nftId || initialState.nftId,
  auctionIncrement: (state: RootState) => initialState.auctionIncrement,
  topBid: (state: RootState) =>
    state?.domainPage?.domain?.auction?.actual_price ||
    state?.domainPage?.domain?.auction?.start_price,
  isLoadingNftId: (state: RootState) =>
    state?.domainPage?.isLoadingNftId || initialState.isLoadingNftId,
}

export const DomainPageSelectors = {
  domaintoRegister: createSelector(
    DomainPageDomains.domainToRegister,
    (domaintoRegister) => domaintoRegister
  ),
  registerDuration: createSelector(
    DomainPageDomains.domainToRegister,
    (domainData) => domainData?.duration
  ),

  // legacy
  year: createSelector(DomainPageDomains.year, (year) => year),
  extendYear: createSelector(
    DomainPageDomains.extendYear,
    (extendYear) => extendYear
  ),
  domain: createSelector(DomainPageDomains.domain, (domain) => domain),
  registerFee: createSelector(
    DomainPageDomains.registerFee,
    (registerFee) => registerFee
  ),
  registerFeeUSD: createSelector(
    DomainPageDomains.registerFeeUSD,
    (registerFeeUSD) => registerFeeUSD
  ),
  transferFee: createSelector(
    DomainPageDomains.transferFee,
    (transferFee) => transferFee
  ),
  extendFee: createSelector(
    DomainPageDomains.extendFee,
    (extendFee) => extendFee
  ),
  extendPrice: createSelector(
    DomainPageDomains.extendPrice,
    (extendPrice) => extendPrice
  ),
  subdomainFee: createSelector(
    DomainPageDomains.subdomainFee,
    (subdomainFee) => subdomainFee
  ),
  subdomainPrice: createSelector(
    DomainPageDomains.subdomainPrice,
    (subdomainPrice) => subdomainPrice
  ),
  setDataFee: createSelector(
    DomainPageDomains.setDataFee,
    (setDataFee) => setDataFee
  ),
  setAddressFee: createSelector(
    DomainPageDomains.setAddressFee,
    (setAddressFee) => setAddressFee
  ),
  bidFee: createSelector(DomainPageDomains.bidFee, (bidFee) => bidFee),
  bidAmount: createSelector(
    DomainPageDomains.bidAmount,
    (bidAmount) => bidAmount
  ),
  subdomains: createSelector(
    DomainPageDomains.subdomains,
    (subdomains) => subdomains
  ),
  subdomainName: createSelector(
    DomainPageDomains.subdomainName,
    (name) => name
  ),
  transferDomainWalletAddress: createSelector(
    DomainPageDomains.transferDomainWalletAddress,
    (name) => name
  ),
  isLoadingDomain: createSelector(
    DomainPageDomains.isLoadingDomain,
    (isLoading) => isLoading
  ),
  isLoadingSubdomains: createSelector(
    DomainPageDomains.isLoadingSubdomains,
    (isLoading) => isLoading
  ),
  isLoadingRegGasFee: createSelector(
    DomainPageDomains.isLoadingRegGasFee,
    (isLoading) => isLoading
  ),
  isLoadingTransferFee: createSelector(
    DomainPageDomains.isLoadingTransferFee,
    (isLoading) => isLoading
  ),
  isLoadingExtendFee: createSelector(
    DomainPageDomains.isLoadingExtendFee,
    (isLoading) => isLoading
  ),
  isLoadingSubdomainFee: createSelector(
    DomainPageDomains.isLoadingSubdomainFee,
    (isLoading) => isLoading
  ),
  isLoadingBidFee: createSelector(
    DomainPageDomains.isLoadingBidFee,
    (isLoading) => isLoading
  ),
  isLoadingSetDataFee: createSelector(
    DomainPageDomains.isLoadingSetDataFee,
    (isLoading) => isLoading
  ),
  isLoadingSetAddressFee: createSelector(
    DomainPageDomains.isLoadingSetAddressFee,
    (isLoading) => isLoading
  ),
  isCreatingDomain: createSelector(
    DomainPageDomains.isCreatingDomain,
    (isLoading) => isLoading
  ),
  isOpenConfirmModalDomain: createSelector(
    DomainPageDomains.isOpenConfirmModalDomain,
    (isOpen) => isOpen
  ),
  isOpenTransferModal: createSelector(
    DomainPageDomains.isOpenTransferModal,
    (isOpen) => isOpen
  ),
  isOpenExtendModal: createSelector(
    DomainPageDomains.isOpenExtendModal,
    (isOpen) => isOpen
  ),
  isOpenPlaceBidModal: createSelector(
    DomainPageDomains.isOpenPlaceBidModal,
    (isOpen) => isOpen
  ),
  isOpenSetAddressModal: createSelector(
    DomainPageDomains.isOpenSetAddressModal,
    (isOpen) => isOpen
  ),
  slippage: createSelector(DomainPageDomains.slippage, (slippage) => slippage),
  recordKey: createSelector(
    DomainPageDomains.recordKey,
    (recordKey) => recordKey
  ),
  recordTitle: createSelector(
    DomainPageDomains.recordTitle,
    (recordTitle) => recordTitle
  ),
  recordValue: createSelector(
    DomainPageDomains.recordValue,
    (recordValue) => recordValue
  ),
  recordType: createSelector(
    DomainPageDomains.recordType,
    (recordType) => recordType
  ),
  resolverNewAddress: createSelector(
    DomainPageDomains.resolverNewAddress,
    (resolverNewAddress) => resolverNewAddress
  ),
  domainRegisterPriceInCCD: createSelector(
    [DomainPageDomains.domainRegisterPriceInCCD, DomainPageDomains.year],
    (price, durationYear) => multiply(Number(price), durationYear)
  ),
  domainRegisterPriceInUSD: createSelector(
    [DomainPageDomains.domainRegisterPriceInUSD, DomainPageDomains.year],
    (price, durationYear) => multiply(Number(price), durationYear)
  ),
  domainRegPriceSlippageInCCD: createSelector(
    [
      DomainPageDomains.slippage,
      DomainPageDomains.domainRegisterPriceInCCD,
      DomainPageDomains.year,
    ],
    (slippagePercent, domainPrice, durationYear) => {
      const actualPrice = multiply(domainPrice || (0 as number), durationYear)
      const priceWithSlippagePercent = multiply(actualPrice, slippagePercent)
      const priceWithSlippage = divide(priceWithSlippagePercent, 100)
      return priceWithSlippage
    }
  ),
  domainRegPriceSlippageInUSD: createSelector(
    [
      DomainPageDomains.slippage,
      DomainPageDomains.domainRegisterPriceInUSD,
      DomainPageDomains.year,
    ],
    (slippagePercent, domainPrice, durationYear) =>
      divide(multiply(Number(domainPrice), durationYear, slippagePercent), 100)
  ),
  totalRegPriceInCCD: createSelector(
    [
      DomainPageDomains.year,
      DomainPageDomains.domainRegisterPriceInCCD,
      DomainPageDomains.slippage,
      DomainPageDomains.registerFee,
    ],
    (durationYear, domainPrice, slippagePercent, registerFee) => {
      const domainPriceByDuration = multiply(Number(domainPrice), durationYear)
      const slipagePrice = divide(
        multiply(Number(domainPrice), durationYear, slippagePercent),
        100
      )

      return add(domainPriceByDuration, slipagePrice, Number(registerFee))
    }
  ),
  totalRegPriceInUSD: createSelector(
    [
      DomainPageDomains.year,
      DomainPageDomains.domainRegisterPriceInUSD,
      DomainPageDomains.slippage,
      DomainPageDomains.registerFeeUSD,
    ],
    (durationYear, domainPrice, slippagePercent, registerFee) => {
      const domainPriceByDuration = multiply(Number(domainPrice), durationYear)

      const slipagePrice = divide(
        multiply(Number(domainPrice), durationYear, slippagePercent),
        100
      )

      return add(domainPriceByDuration, slipagePrice, Number(registerFee))
    }
  ),
  extendPriceByYear: createSelector(
    [DomainPageDomains.extendPrice, DomainPageDomains.extendYear],
    (extendPrice, durationYear) => multiply(Number(extendPrice), durationYear)
  ),
  totalExtendPrice: createSelector(
    [
      DomainPageDomains.extendYear,
      DomainPageDomains.extendPrice,
      DomainPageDomains.extendFee,
    ],
    (durationYear, extendPrice, extendFee) => {
      const extendPriceByDuration = multiply(Number(extendPrice), durationYear)

      return add(extendPriceByDuration, Number(extendFee))
    }
  ),
  subdomainPriceSlippage: createSelector(
    [DomainPageDomains.slippage, DomainPageDomains.subdomainPrice],
    (slippagePercent, domainPrice) => {
      return divide(multiply(Number(domainPrice), slippagePercent), 100)
    }
  ),
  totalSubdomainPrice: createSelector(
    [
      DomainPageDomains.subdomainPrice,
      DomainPageDomains.slippage,
      DomainPageDomains.subdomainFee,
    ],
    (subdomainPrice, slippagePercent, registerFee) => {
      const slipagePrice = divide(
        multiply(Number(subdomainPrice), slippagePercent),
        100
      )

      return add(Number(subdomainPrice), slipagePrice, Number(registerFee))
    }
  ),
  totalBidPrice: createSelector(
    [DomainPageDomains.bidAmount, DomainPageDomains.bidFee],
    (bidAmount, bidFee) => {
      return add(Number(bidAmount), Number(bidFee))
    }
  ),
  bidsList: createSelector([DomainPageDomains.bidsList], (list) => list),
  isLoadingBids: createSelector(
    [DomainPageDomains.isLoadingBids],
    (isLoading) => isLoading
  ),
  bidsTotalCount: createSelector(
    [DomainPageDomains.bidsTotalCount],
    (totalCount) => totalCount
  ),
  nftId: createSelector([DomainPageDomains.nftId], (id) => id),
  isLoadingNftId: createSelector(
    [DomainPageDomains.isLoadingNftId],
    (isLoading) => isLoading
  ),
  leastAmountToBid: createSelector(
    [DomainPageDomains.topBid, DomainPageDomains.auctionIncrement],
    (topBid, auctionIncrement) => {
      const multiplied = multiply(Number(topBid || 0), auctionIncrement)
      const bidIncrement = divide(multiplied, 100)

      return add(Number(topBid || 0), bidIncrement)
    }
  ),
  allowedYearToExtend: createSelector([DomainPageDomains.domain], (domain) => {
    const diffAsYears = Math.ceil(
      moment
        .duration(moment(domain?.expiration_date).diff(new Date()))
        ?.asYears()
    )
    const allowedYearToBeExtended = subtract(maxYear, diffAsYears)

    return allowedYearToBeExtended
  }),
}
