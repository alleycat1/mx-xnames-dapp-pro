import { Dispatch } from "@reduxjs/toolkit"
import { FieldType } from "./containers/DomainPage/types"

export interface GlobalState {
  loggedIn: boolean
  isLoadingSignIn: boolean
  executeRecaptcha: any
  globalModals: {
    isWalletConnectionModalOpen: boolean
    isOpenConnectWalletQR: boolean
    isOpenUserWallet: boolean
    isOpenDisconnectWallet: boolean
    isOpenAlert: boolean
    isOpenCreateSubdomain: boolean
    isOpenConfirmSubdomain: boolean
    isOpenSetRecord: boolean
    isOpenSubmittedAlert: boolean
    isOpenFailedAlert: boolean
    isOpenSellAlert: boolean
  }
  qrCodeWalletConnectorData: QrCodeWalletConnectorDataType
  walletInfoData: WalletInfoDataType
  afterWalletConnection: any
  tx_hash: undefined | string
  user: UserDataType | undefined
  isLoadingUserData: boolean
  favoriteDomains: undefined | string[]
  isLoadingFavoriteDomains: boolean
  dispatch: Dispatch<any> | undefined
}
export interface OpenWalletConnectionModel {
  open: boolean
  afterConnection?: any
}

export interface OpenAlertModal {
  open: boolean
  tx_hash?: string
}

export type StatusType =
  | "available"
  | "on_auction"
  | "registered"
  | "listed"
  | "reserved"

export enum StatusEnum {
  available = "available",
  registered = "registered",
  onAuction = "on_auction",
  listed = "listed",
  reserved = "reserved",
}

// Wallet types

export type QrCodeWalletConnectorDataType = WalletResponse | undefined

export interface WalletResponse {
  connect_string: string
}

export type WalletInfoDataType = Array<WalletAccountInfo> | undefined

export interface WalletAccountInfo {
  address: string
  balance: number
}

export interface TransferMessage {
  data: {
    action: any
    tx_hash: string
    tx_status: TxStatus
  }
  message_type: TransferMessageTypes
  network_id: string
  originator: string
  user_status: string
}

export enum TransferMessageTypes {
  SimpleTransferResponse = "SimpleTransferResponse",
}

export enum TxStatus {
  Accepted = "Accepted",
  Rejected = "Rejected",
}

export interface SignInModel {
  wallet_address: string
}

export interface DomainType {
  id: number
  name: string
  owner: string
  editor: string
  parent: null
  registrant: string
  resolver: string
  expiration_date: string
  available: boolean
  status: StatusType
  price: DomainPriceType
  subscription_fee?: DomainPriceType
  gas_fee?: DomainPriceType
  total?: DomainPriceType
  auction?: AuctionType
  favorite: boolean
  fields: Array<FieldType> | []
  entity?: any
}

interface AuctionType {
  actual_price: number
  creator: null
  domain: null
  end_time: Date
  id: number
  start_price: number
  start_time: string
}

export interface SubDomainType {
  id: number
  name: string
  registrant: string
  resolver: null | string
  expiration_date: string
  status: StatusType
  owner: string
  editor: string
  parent: string
}
export interface DomainPriceType {
  primary: {
    value: number
    unit: string
  }
  secondary: {
    value: number
    unit: string
  }
}

export type DomainsType = Array<DomainType> | undefined

export type SubDomainsType = Array<DomainType> | undefined

export interface PageableInterface {
  page?: number
  size?: number
}

// current user data

export interface UserDataType {
  id: number
  wallet_address: string
  is_blocked: boolean
  avatar_url: null
  username: string | null
  twitter_acc: string | null
  created_at: string
  is_hide_dmns_for_other: boolean
  email: string
  lined_in_email?: string
  lined_in_firstname?: string
  lined_in_image?: string
  lined_in_lastname?: string
}

export enum DataValue {
  EMPTY = "0",
  ADDRESS = "1", // address
  URL = "2", // string
  BINARY = "3", // bytes
  STRING = "4", // string
}

export interface FavoriteValue {
  domainName: string
  favorited: boolean | undefined
}
