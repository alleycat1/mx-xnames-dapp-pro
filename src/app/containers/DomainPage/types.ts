import { DomainTabs } from "app/constants"
import { DataValue, DomainType, SubDomainsType } from "app/types"
import { DurationType } from "utils/cryptoXconvertors"

/* --- STATE --- */
export interface DomainPageState {
  domainToRegister?: {
    name: string
    duration: number
  }
  year: DurationType
  extendYear: DurationType
  modals: {
    register: {
      isOpenConfirmModal: boolean
    }
    transfer: {
      isOpenTransferModal: boolean
    }
    extend: {
      isOpenExtendModal: boolean
    }
    auction: {
      isOpenPlaceBidModal: boolean
    }
    address: {
      isOpenSetAddressModal: boolean
    }
  }
  domain: undefined | DomainType
  isLoadingDomain: boolean
  isCreatingDomain: boolean
  subdomains: SubDomainsType
  isLoadingSubdomains: boolean
  subdomainName: string
  transferDomainWalletAddress: string
  bidAmount: string
  registerFee: null | number
  registerFeeUSD: null | number
  loadingRegisterFee: boolean
  slippage: number
  transferFee: null | number
  loadingTransferFee: boolean
  extendPrice: null | number
  extendFee: null | number
  loadingExtendFee: boolean
  subDomainPrice: null | number
  subDomainFee: null | number
  loadingSubDomainFee: boolean
  bidFee: null | number
  loadingBidFee: boolean
  record: {
    key: string
    title: string
    value: string
    type: string
  }
  setDataFee: null | number
  loadingSetDataFee: boolean
  bids: {
    list: Array<BidModule>
    isLoading: boolean
    totalCount: number
  }
  resolverNewAddress: string
  setAddressFee: null | number
  loadingSetAddressFee: boolean
  nftId: null | number
  isLoadingNftId: boolean
  auctionIncrement: number
}

export type ContainerState = DomainPageState

export interface ParamsModule {
  id: string
  tab: DomainTabs
  name: string
}

export interface CreateDomainType {
  name: string
  expiration_date: string
}

export interface CreateSubdomainType {
  parent_id: number
  name: string
  subdomainName: string
  from: string
}

export interface ExtendDomainType {
  domain: string
  from: string
  duration: DurationType
}

export interface PlaceBidType {
  domain: string
  from: string
  bidAmount: number
}

export interface RegisterFee {
  duration: DurationType
  contract_index: number
  domain: string
}

export interface TransferFee {
  amount: 1
  domain: string
}

export interface ExtendFee {
  duration: DurationType
  domain: string
}

export interface SubdomainFee {
  parent_id: number
  name: string
}

export interface BidFee {
  domain: string
  amount: number
}

export interface SetDataFee {
  title: string
  key: string
  value: string
  domain_id: number
  value_type: string
}

export interface SetAddressFee {
  domain: string
  address: string
}

export interface SetDataType {
  from: string
  title: string
  key: string
  value: string
  domain_id: number
  value_type: string
}

export interface BidModule {
  id: number
  created_at: string
  holder: string
  bid: number
}

export interface GetBidsQueryParams {
  auction_id: number
  page: number
  size: number
  search?: string
}

export interface SetAddressType {
  from: string
  domain: string
  address: string
}

export interface FieldType {
  domain_id: number
  key: string
  title: string
  value: string
  value_type: DataValue
}
