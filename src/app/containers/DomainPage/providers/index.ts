import { apiService } from "services/api_service"
import { RequestTypes } from "services/constants"
import {
  BidFee,
  ExtendFee,
  GetBidsQueryParams,
  RegisterFee,
  SetAddressFee,
  SetDataFee,
  SubdomainFee,
  TransferFee,
} from "../types"

export const getDomainApi = (id: number) => {
  return apiService.fetchData({
    url: `domain_name/${id}`,
    requestType: RequestTypes.GET,
  })
}

export const getSubdomainsByDomainNameApi = (name: string) => {
  return apiService.fetchData({
    url: `subdomain/${name}`,
    requestType: RequestTypes.GET,
  })
}

export const getRegisterFeeAPI = (data: RegisterFee) => {
  return apiService.fetchData({
    data,
    url: `fee/register_domain`,
    requestType: RequestTypes.POST,
  })
}

export const getTransferFeeAPI = (data: TransferFee) => {
  return apiService.fetchData({
    data,
    url: `fee/transfer`,
    requestType: RequestTypes.POST,
  })
}

export const getExtendFeeAPI = (data: ExtendFee) => {
  return apiService.fetchData({
    data,
    url: `fee/extend`,
    requestType: RequestTypes.POST,
  })
}

export const getSubdomainFeeAPI = (data: SubdomainFee) => {
  return apiService.fetchData({
    data,
    url: `fee/register_subdomain`,
    requestType: RequestTypes.POST,
  })
}

export const getBidFeeAPI = (data: BidFee) => {
  return apiService.fetchData({
    data,
    url: `fee/bid`,
    requestType: RequestTypes.POST,
  })
}

export const getSetDataFeeAPI = (data: SetDataFee) => {
  return apiService.fetchData({
    data,
    url: `fee/set_data`,
    requestType: RequestTypes.POST,
  })
}

export const getSetAddressFeeAPI = (data: SetAddressFee) => {
  return apiService.fetchData({
    data,
    url: `fee/set_address`,
    requestType: RequestTypes.POST,
  })
}

export const getBidsApi = (data: GetBidsQueryParams) => {
  return apiService.fetchData({
    url: `auction/bids/${data.auction_id}/list`,
    requestType: RequestTypes.GET,
    data,
  })
}

export const getCnsNftId = (id: number) => {
  return apiService.fetchData({
    url: `cns-nft/${id}`,
    requestType: RequestTypes.GET,
  })
}
