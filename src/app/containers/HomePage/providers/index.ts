import { PageableParams } from "app/constants"
import { apiService } from "services/api_service"
import { RequestTypes } from "services/constants"
import { DomainsStatusConvertor } from "../types"

const apiDomain = "domain"

export const getDomainsApi = (
  page: number = PageableParams.page,
  // name: string = "",
  filterStatus: string = ""
) => {
  let url = `${apiDomain}_name?page=${page}&size=${PageableParams.size}&filter_status=${DomainsStatusConvertor[filterStatus]}`
  /* if (name) {
    url = `${url}&name=${name}`
  } */
  return apiService.fetchData({
    url,
    requestType: RequestTypes.GET,
  })
}
