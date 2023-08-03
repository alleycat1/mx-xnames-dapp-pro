import { apiService } from "services/api_service"
import { RequestTypes } from "services/constants"

export const isItRegistered = async (name: string) => {
  const response = await apiService.fetchData({
    requestType: RequestTypes.GET,
    url: `domains?search=${name}`,
  })
  if (response && response[name]) {
    return true
  }
  return false
}
