import {
  RequestTypes,
  RequestParameters,
  BaseUrl,
  ContentTypes,
} from "./constants"
import { queryStringer } from "utils/formatters"

import { MessageService, MessageNames } from "./message_service"
import { toast } from "react-toastify"
import { CookieKeys, cookies } from "./cookie"

export class ApiService {
  private static instance: ApiService
  private constructor() {}
  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService()
    }
    return ApiService.instance
  }

  public baseUrl = BaseUrl
  public token: string = ""
  public async fetchData(params: RequestParameters) {
    const url = params.isRawUrl ? params.url : this.baseUrl + params.url

    if (!this.token) {
      this.token = cookies.get(CookieKeys.ACCESS_TOKEN) ?? ""
    }

    if (process.env.NODE_ENV !== "production") {
      const uri = `${params.isRawUrl ? "" : this.baseUrl}${params.url}`
      console.log(
        `🚀 %c${params.requestType} %crequest to: %c${uri}\n✉%c:`,
        "color:green;",
        "color:black;",
        "color:green;",
        "color:black;",
        params.data
      )
    }
    switch (params.requestType) {
      case RequestTypes.GET:
        let query = ""
        if (params.data && Object.keys(params.data).length > 0) {
          query = queryStringer(params.data)
        }
        const rawRes = await fetch(url + query, {
          method: "GET",
          // credentials: 'include',
          headers: this.getHeaders(params.contentType),
        })
        return await this.handleRawResponse(rawRes, params)
      default:
        const rawResponse = await fetch(url, {
          method: params.requestType,
          headers: this.getHeaders(params.contentType),
          // credentials: 'include',
          body: JSON.stringify(params.data),
        })
        return await this.handleRawResponse(rawResponse, params)
    }
  }

  async handleRawResponse(rawResponse: Response, params: RequestParameters) {
    // let c = rawResponse
    //   .clone()
    //   .json()
    //   .then(response => {
    //     this.extractMessages(response);
    //   });
    if (!rawResponse.ok) {
      const res = await rawResponse.clone().json()
      if (res.message && res.message !== "invalid token") {
        toast.error(res.message)
      }
      if (rawResponse.status === 422) {
        return rawResponse.json()
      }
      if (rawResponse.status === 401) {
        //toast.error('Authentication Failed');
        MessageService.send({ name: MessageNames.AUTH_ERROR_EVENT })
      } else if (rawResponse.status === 500) {
        // toast.error('connection failed');
      }
    }
    if (process.env.NODE_ENV !== "production") {
      const uri = `${params.isRawUrl ? "" : this.baseUrl}${params.url}`
      if (rawResponse.ok) {
        rawResponse
          .clone()
          .json()
          .then((response) => {
            console.log(
              `✅ %csuccess %c${params.requestType} %crequest to: %c${uri}\n✉%c:`,
              "color:green;font-size:15px;",
              "color:blue;",
              "color:black;",
              "color:green;",
              "color:black;",
              params.data,
              "\n",
              " response 👇",
              response
            )
          })
      } else {
        console.log(
          `⛔ %cError %c${params.requestType} %crequest to: %c${uri}\n✉%c:`,
          "color:red;font-size:15px;",
          "color:green;",
          "color:black;",
          "color:green;",
          "color:black;",
          params.data
        )
        return new Error(`❌ Error calling ${uri}`)
      }
    }
    return rawResponse.json()
  }
  // async extractMessages(response) {
  //   if (response.message) {
  //     // if (response.message[i].type == 0 || response.message[i].type == 1) {
  //     //   toast.success(response.message[i].text);
  //     // } else if (response.message[i].type == 2) {
  //     //   toast.warn(response.message[i].text);
  //     // } else {
  //     //   this.Alert(response.message, 'error');
  //     // }
  //   }
  // }
  private getHeaders(
    contentType: ContentTypes = ContentTypes.JSON
  ): Headers | string[][] | Record<string, string> | undefined {
    if (this.token === "") {
      //@ts-ignore
      return {
        "Content-Type": contentType,
      }
    }
    //@ts-ignore
    return {
      "Content-Type": contentType,
      Authorization: `Bearer ${this.token}`,
    }
  }
}
export const apiService = ApiService.getInstance()
