import { DomainsType, DomainType } from "app/types"

/* --- STATE --- */
export interface HomePageState {
  domains: DomainsType
  isLoadingDomains: boolean
  searchedDomain: undefined | DomainType
  searchValue: string
  searchText: string
  total: number
  selectedPage: number
  filterValue: undefined | DomainsOptionsType
  errorValue: boolean
  helperText: string
}

export type ContainerState = HomePageState

export enum DomainsStatusEnum {
  OngoingAuctions = "on_going_auction",
  EndingSoonAuctions = "ending_soon_auction24h",
  NewAuctions = "new_auction24h",
}

export type DomainsOptionsType =
  | "Ongoing auctions"
  | "Ending soon auctions"
  | "New auctions"

export const DomainsStatusConvertor = {
  "Ongoing auctions": DomainsStatusEnum.OngoingAuctions,
  "Ending soon auctions": DomainsStatusEnum.EndingSoonAuctions,
  "New auctions": DomainsStatusEnum.NewAuctions,
}
