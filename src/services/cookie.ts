import CookieProvider, { CookieAttributes } from "js-cookie"
export enum CookieKeys {
  ACCESS_TOKEN = "cns_access_token",
  WalletAddress = "cns_wallet_address",
}
export const cookies = CookieProvider
export const cookieConfig = (): CookieAttributes => {
  let date = new Date()
  date.setTime(date.getTime() + 10 * 60 * 60 * 1000)
  const isLocal = process.env.NODE_ENV !== "production"
  return {
    path: "/",
    domain: isLocal ? "localhost" : ".ccd.domains",
    expires: date,
    sameSite: "Strict",
    secure: process.env.NODE_ENV === "production",
  }
}
