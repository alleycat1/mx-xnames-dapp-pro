export type DurationType = 1 | 2 | 3

export enum DomainKind {
  Domain = 0,
  SubDomain = 1,
}

export interface GetPriceType {
  domain_kind: DomainKind
  length: number // length of domain name without .ccd | example: test.ccd length = 4
}

export interface SerializeDomainType {
  duration: DurationType
  domain: string
  address: string
}

export interface SerializeSubdomainType {
  parent_id: number
  name: string
}

export interface SerializeTransferDomainType {
  to: string
  domain: string
  amount: number
  from: string
}

export interface SerializeExtendDomainType {
  domain: string
  duration: DurationType
}

export interface SerializePlaceBidType {
  domain: string
  amount: any
}

export interface SerializeSetDataType {
  title: string
  key: string
  value: string
  domain_id: number
  value_type: string
}

export interface SerializeSetAddressType {
  domain: string
  address: string
}
