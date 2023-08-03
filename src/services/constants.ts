export const EMPTY_ARRAY: any[] = []

export enum RequestTypes {
  PUT = "PUT",
  POST = "POST",
  GET = "GET",
  DELETE = "DELETE",
}
export enum ContentTypes {
  JSON = "application/json",
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  MULTIPART_FORM_DATA = "multipart/form-data",
}
export interface RequestParameters {
  requestType: RequestTypes
  url: string
  data?: any
  isRawUrl?: boolean
  contentType?: ContentTypes
}
export enum LocalStorageKeys {}
export enum SessionStorageKeys {
  ACCESS_TOKEN = "access_token",
  REDIRECT_ACTION = "redirect_action",
}
export interface StandardResponse {
  message: string
  data: any
  status: boolean
  is_success: boolean
}

export const IS_PRODUCTION = !!import.meta.env.VITE_APP_IS_PRODUCTION
export const IS_DEV = import.meta.env.NODE_ENV === "development"

// Production/Staging Url
// export const BaseUrl = process.env.NODE_ENV === "production" ? process.env.VITE_APP_API_ENDPOINT : "/dev/"
export const BaseUrl = import.meta.env.VITE_APP_API_ENDPOINT
