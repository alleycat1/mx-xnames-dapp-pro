import { apiService } from "services/api_service"
import { RequestTypes } from "services/constants"

export const getSiteKeyAPI = () => {
  return apiService.fetchData({
    url: "config/recaptcha",
    requestType: RequestTypes.GET,
  })
}

export const getUserAPI = () => {
  return apiService.fetchData({
    url: "user/current",
    requestType: RequestTypes.GET,
  })
}

export const checkDomainApi = (name: string) => {
  return apiService.fetchData({
    url: `domain_name/check/${name.toLowerCase()}`,
    requestType: RequestTypes.GET,
  })
}

export const domainLikeAPI = (domainName: string) => {
  return apiService.fetchData({
    data: { domain_names: [domainName] },
    url: `favorite/domain/toggle`,
    requestType: RequestTypes.POST,
  })
}

export const getFavoriteDomainsAPI = () => {
  return apiService.fetchData({
    url: `favorite/domain/my`,
    requestType: RequestTypes.GET,
  })
}
