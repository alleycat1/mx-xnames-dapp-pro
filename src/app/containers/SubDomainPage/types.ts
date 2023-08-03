import { SubDomainType } from "app/types"

/* --- STATE --- */
export interface SubDomainPageState {
  subdomain: undefined | SubDomainType
  isLoadingSubdomain: boolean
}

export type ContainerState = SubDomainPageState
