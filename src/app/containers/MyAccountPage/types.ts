import { DomainsType } from "app/types"

/* --- STATE --- */
export interface MyAccountState {
  domains: DomainsType
  isLoadingDomains: boolean
  total: number
  selectedPage: number
  filterValue: FilterOptionsType | undefined
}

export type ContainerState = MyAccountState

export enum FilterStatusEnum {
  MyDomains = "mydomains",
  InAuction = "myauctions",
  Favourites = "myfavorites",
}

export type FilterOptionsType = "My Domains" | "Favourites" | "In Auctions"

export const filterStatusConvertor = {
  "My Domains": FilterStatusEnum.MyDomains,
  Favourites: FilterStatusEnum.Favourites,
  "In Auctions": FilterStatusEnum.InAuction,
}
