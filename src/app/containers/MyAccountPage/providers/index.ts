import { PageableParams } from "app/constants"
import { apiService } from "services/api_service"
import { RequestTypes } from "services/constants"
import { filterStatusConvertor } from "../types"

export const getMyDomainsApi = (
  page: number = PageableParams.page,
  filterStatus: string = ""
) => {
  let url = `user/my_dns?page=${page}&size=${PageableParams.size}`
  if (filterStatus) {
    url = `${url}&filter_status=${filterStatusConvertor[filterStatus]}`
  }
  return apiService.fetchData({
    url,
    requestType: RequestTypes.GET,
  })
}
