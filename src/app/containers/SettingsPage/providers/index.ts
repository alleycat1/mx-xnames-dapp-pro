import { apiService } from "services/api_service"
import { RequestTypes } from "services/constants"

export const saveSettingsApi = (data: any) => {
  return apiService.fetchData({
    data,
    url: `user`,
    requestType: RequestTypes.PUT,
  })
}

export const saveLinkedInTokenApi = (data: string) => {
  return apiService.fetchData({
    data: {
      code: data,
    },
    url: `user/set_linked_in_code`,
    requestType: RequestTypes.POST,
  })
}
