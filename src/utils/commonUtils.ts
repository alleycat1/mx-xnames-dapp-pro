import { toast } from "react-toastify"
import { format, addYears } from "date-fns"
import moment from "moment"
import { DataValue, StatusEnum, StatusType } from "app/types"
import { multiply } from "precise-math"

export const omit = (key: string, obj: any) => {
  const { [key]: omitted, ...rest } = obj
  return rest
}

export const getRandomColor = (name: string = "CNS"): string => {
  const firstAlphabet: string = name?.charAt(0).toLowerCase()
  const lastAlphabet: string = name?.charAt(name.length - 1).toLowerCase()
  const midAlphaber: string = name
    ?.charAt(Math.ceil(name.length / 2))
    .toLowerCase()

  const asciiCode: number = firstAlphabet?.charCodeAt(0)
  const asciiCodeMid: number = midAlphaber?.charCodeAt(0)
  const asciiCodeLast: number = lastAlphabet?.charCodeAt(0)

  const colorNum: string =
    asciiCodeLast?.toString() + asciiCode?.toString() + asciiCodeMid?.toString()

  var num: number = Math.round(0x1f1111 * parseInt(colorNum))
  var r: number = (num >> 16) & 255
  var g: number = (num >> 8) & 255
  var b: number = num & 255

  return "rgb(" + r + ", " + g + ", " + b + ", 1)"
}

export const copiedToClipboardMsg = () => {
  toast.success("Copied to clipboard!")
}

export const removeTrailingDomainName = (domainName) => {
  return domainName.replace(/\.ccd$/, "")
}

export const addTrailingCCD = (domainName: string) => {
  let name: string = domainName
  if (!name.endsWith(".ccd")) {
    name = `${name}.ccd`
  }
  return `${name}`
}

export const walletToName = (wallet: string | undefined, length = 3) => {
  if (wallet) {
    return `${wallet.slice(0, length)}...${wallet.slice(
      wallet.length - length
    )}`
  }
  return ``
}

export const formatExpirationDate = (expirationDate: string) => {
  return moment(new Date(expirationDate))?.format("hh:mm-DD/MM/YYYY")
}

export const normalizeStatus = (status: StatusType) => {
  switch (status?.toLowerCase()) {
    case "on_auction":
      return "on auction"
    case "registered":
      return "Taken"
    default:
      return status
  }
}

export const statusToTab = (status: StatusType | undefined): string => {
  switch (status) {
    case StatusEnum.available:
      return "register"
    case StatusEnum.registered:
      return "details"
    case StatusEnum.onAuction:
      return "auction"
    case StatusEnum.reserved:
      return "register"
    default:
      return "details"
  }
}

export const recortTypeToText = (type) => {
  switch (type) {
    case DataValue.ADDRESS:
      return "wallet"
    case DataValue.URL:
      return "url"
    case DataValue.STRING:
      return "text"
    default:
      return ""
  }
}
export const bumpFee = (fee: number) => {
  return multiply(Number(fee), 3)
}
export const byteSize = (str: string) => new Blob([str]).size
