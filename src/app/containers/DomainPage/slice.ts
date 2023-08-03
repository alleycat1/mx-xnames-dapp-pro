import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "utils/@reduxjs/toolkit"
import {
  BidModule,
  ContainerState,
  CreateSubdomainType,
  ExtendDomainType,
  GetBidsQueryParams,
  PlaceBidType,
  SetAddressType,
  SetDataType,
} from "./types"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"

import { domainPageSaga } from "./saga"
import { maxYear, minYear } from "./constants"
import { DomainType, SubDomainsType } from "app/types"
import {
  DurationType,
  SerializeDomainType,
  SerializeTransferDomainType,
} from "utils/cryptoXconvertors"
import moment from "moment"
import { usexNamesTransactions } from "../Blockchain/hooks/usexNamesTransactions"

// The initial state of the DomainPage container
export const initialState: ContainerState = {
  year: 1,
  extendYear: 1,
  modals: {
    register: {
      isOpenConfirmModal: false,
    },
    transfer: {
      isOpenTransferModal: false,
    },
    extend: {
      isOpenExtendModal: false,
    },
    auction: {
      isOpenPlaceBidModal: false,
    },
    address: {
      isOpenSetAddressModal: false,
    },
  },
  domain: undefined,
  isLoadingDomain: false,
  isCreatingDomain: false,
  subdomains: undefined,
  isLoadingSubdomains: false,
  subdomainName: "",
  transferDomainWalletAddress: "",
  bidAmount: "",
  registerFee: null,
  registerFeeUSD: null,
  loadingRegisterFee: false,
  slippage: 3,
  transferFee: null,
  loadingTransferFee: false,
  extendPrice: null,
  extendFee: null,
  loadingExtendFee: false,
  subDomainPrice: null,
  subDomainFee: null,
  loadingSubDomainFee: false,
  bidFee: null,
  loadingBidFee: false,
  record: {
    key: "",
    title: "",
    value: "",
    type: "",
  },
  setDataFee: null,
  loadingSetDataFee: false,
  bids: {
    list: [],
    isLoading: false,
    totalCount: 0,
  },
  resolverNewAddress: "",
  setAddressFee: null,
  loadingSetAddressFee: false,
  nftId: null,
  isLoadingNftId: false,
  auctionIncrement: 5,
}

const domainPageSlice = createSlice({
  name: "domainPage",
  initialState,
  reducers: {
    setDomainToRegister(
      state,
      action: PayloadAction<ContainerState["domainToRegister"]>
    ) {
      state.domainToRegister = action.payload
    },
    updateregisterDuration(state, action: PayloadAction<number>) {
      if (state.domainToRegister) {
        state.domainToRegister.duration = action.payload
      }
    },
    startDomainRegisteration(state) {},
    // legacy
    setYear(state, action: PayloadAction<DurationType>) {
      state.year = action.payload
    },
    incrementYear(state) {
      if (state.year < maxYear) state.year += 1
    },
    decrementYear(state) {
      if (state.year > minYear) state.year -= 1
    },
    incrementExtendYear(state) {
      const diffAsYears = Math.ceil(
        moment
          .duration(moment(state.domain?.expiration_date).diff(new Date()))
          ?.asYears()
      )
      const allowedYearToBeExtended = maxYear - diffAsYears

      if (state.extendYear < allowedYearToBeExtended) state.extendYear += 1
    },
    decrementExtendYear(state) {
      if (state.extendYear > minYear) state.extendYear -= 1
    },
    setIsOpenConfirmModal(state, action: PayloadAction<boolean>) {
      state.modals.register.isOpenConfirmModal = action.payload
    },
    setIsOpenTransferModal(state, action: PayloadAction<boolean>) {
      state.modals.transfer.isOpenTransferModal = action.payload
    },
    setIsOpenExtendModal(state, action: PayloadAction<boolean>) {
      state.modals.extend.isOpenExtendModal = action.payload
    },
    setIsOpenPlaceBidModal(state, action: PayloadAction<boolean>) {
      state.modals.auction.isOpenPlaceBidModal = action.payload
    },
    setIsOpenSetAddressModal(state, action: PayloadAction<boolean>) {
      state.modals.address.isOpenSetAddressModal = action.payload
    },
    getDomain(_, action: PayloadAction<number>) {},
    getSearchedDomain(_, action: PayloadAction<string>) {},
    setTransferDomainWalletAddress(state, action: PayloadAction<string>) {
      state.transferDomainWalletAddress = action.payload
    },
    setDomain(state, action: PayloadAction<DomainType | undefined>) {
      state.domain = action.payload
    },
    setIsLoadingDomain(state, action: PayloadAction<boolean>) {
      state.isLoadingDomain = action.payload
    },
    setIsLoadingRegisterFee(state, action: PayloadAction<boolean>) {
      state.loadingRegisterFee = action.payload
    },
    setIsLoadingTransferFee(state, action: PayloadAction<boolean>) {
      state.loadingTransferFee = action.payload
    },
    setIsLoadingExtendFee(state, action: PayloadAction<boolean>) {
      state.loadingExtendFee = action.payload
    },
    setIsLoadingSubdomainFee(state, action: PayloadAction<boolean>) {
      state.loadingSubDomainFee = action.payload
    },
    setIsLoadingBidFee(state, action: PayloadAction<boolean>) {
      state.loadingBidFee = action.payload
    },
    createDomain(_, action: PayloadAction<SerializeDomainType>) {},
    setIsCreatingDomain(state, action: PayloadAction<boolean>) {
      state.isCreatingDomain = action.payload
    },
    setBidAmount(state, action: PayloadAction<string>) {
      state.bidAmount = action.payload
    },
    getSubdomainsByDomainName(_, action: PayloadAction<string>) {},
    setSubdomains(state, action: PayloadAction<SubDomainsType>) {
      state.subdomains = action.payload
    },
    setIsLoadingSubdomains(state, action: PayloadAction<boolean>) {
      state.isLoadingSubdomains = action.payload
    },
    setSubdomainName(state, action: PayloadAction<string>) {
      state.subdomainName = action.payload
    },
    createSubdomain(_, action: PayloadAction<CreateSubdomainType>) {},
    transferDomain(
      state,
      action: PayloadAction<SerializeTransferDomainType>
    ) {},
    getRegisterFee(_, action: PayloadAction<undefined>) {},
    setRegisterFee(state, action: PayloadAction<number>) {
      state.registerFee = action.payload
    },
    setRegisterFeeUSD(state, action: PayloadAction<number>) {
      state.registerFeeUSD = action.payload
    },
    getTransferFee(_, action: PayloadAction<undefined>) {},
    setTransferFee(state, action: PayloadAction<number>) {
      state.transferFee = action.payload
    },
    getExtendFee(_, action: PayloadAction<undefined>) {},
    setExtendFee(state, action: PayloadAction<number>) {
      state.extendFee = action.payload
    },
    setExtendPrice(state, action: PayloadAction<number>) {
      state.extendPrice = action.payload
    },
    getSubdomainFee(_, action: PayloadAction<undefined>) {},
    setSubdomainFee(state, action: PayloadAction<number>) {
      state.subDomainFee = action.payload
    },
    setSubdomainPrice(state, action: PayloadAction<number>) {
      state.subDomainPrice = action.payload
    },
    getBidFee(_, action: PayloadAction<undefined>) {},
    setBidFee(state, action: PayloadAction<number>) {
      state.bidFee = action.payload
    },
    placeBid(state, action: PayloadAction<PlaceBidType>) {},

    setRecordKey(state, action: PayloadAction<string>) {
      state.record.key = action.payload
    },
    setRecordTitle(state, action: PayloadAction<string>) {
      state.record.title = action.payload
    },
    setRecordValue(state, action: PayloadAction<string>) {
      state.record.value = action.payload
    },
    setRecordType(state, action: PayloadAction<string>) {
      state.record.type = action.payload
    },
    setSetDataFee(state, action: PayloadAction<number>) {
      state.setDataFee = action.payload
    },
    setIsLoadingSetDataFee(state, action: PayloadAction<boolean>) {
      state.loadingSetDataFee = action.payload
    },
    setResolverNewAddress(state, action: PayloadAction<string>) {
      state.resolverNewAddress = action.payload
    },
    setSetAddressFee(state, action: PayloadAction<number>) {
      state.setAddressFee = action.payload
    },
    setIsLoadingSetAddressFee(state, action: PayloadAction<boolean>) {
      state.loadingSetAddressFee = action.payload
    },
    // need to change any
    setData(_, action: PayloadAction<SetDataType>) {},
    setAddress(_, action: PayloadAction<SetAddressType>) {},
    extendDomain(_, action: PayloadAction<ExtendDomainType>) {},
    startSubdomainRegisterProccess(_, action: PayloadAction<undefined>) {},
    startTransferDomainProccess(_, action: PayloadAction<undefined>) {},
    startExtendDomainProccess(_, action: PayloadAction<undefined>) {},
    startPlaceBidProccess(_, action: PayloadAction<undefined>) {},
    startSetRecordProccess(_, action: PayloadAction<undefined>) {},
    startSetAddressProccess(_, action: PayloadAction<undefined>) {},

    // Bids
    getBids(_, action: PayloadAction<GetBidsQueryParams>) {},
    setBidsList(state, action: PayloadAction<Array<BidModule>>) {
      state.bids.list = action.payload
    },
    setIsLoadingBids(state, action: PayloadAction<boolean>) {
      state.bids.isLoading = action.payload
    },
    setBidsTotalCount(state, action: PayloadAction<number>) {
      state.bids.totalCount = action.payload
    },
    setNftId(state, action: PayloadAction<number>) {
      state.nftId = action.payload
    },
    setIsLoadingNftId(state, action: PayloadAction<boolean>) {
      state.isLoadingNftId = action.payload
    },
    getNftId(state, action: PayloadAction<number>) {},
  },
})

export const {
  actions: DomainPageActions,
  reducer: DomainPageReducer,
  name: sliceKey,
} = domainPageSlice

export const useDomainPageSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: DomainPageReducer })
  useInjectSaga({ key: sliceKey, saga: domainPageSaga })

  return { DomainPageActions }
}
