import { apiService } from "services/api_service"
import { RequestTypes } from "services/constants"
import { SignInModel } from "../types"

export const signInAPI = (data: SignInModel) => {
  return apiService.fetchData({
    data,
    url: "sign-in",
    requestType: RequestTypes.POST,
  })
}
