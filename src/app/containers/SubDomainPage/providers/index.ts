import { apiService } from "services/api_service"
import { RequestTypes } from "services/constants"

export const getSubdomainApi = (id: number) => {
  return apiService.fetchData({
    url: `subdomain/byid/${id}`,
    requestType: RequestTypes.GET,
  })
}
