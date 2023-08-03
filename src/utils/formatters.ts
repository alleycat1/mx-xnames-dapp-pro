// import { currencyMap, pairMap } from "./sharedData"

import { AddressMinimizerConfig } from "types"

export function queryStringer(params: any): string {
  let qs = "?"
  let counter = 0
  for (let key in params) {
    let prefix = counter === 0 ? "" : "&"
    qs += prefix + key + "=" + params[key]
    counter++
  }
  if (counter === 0) {
    qs = ""
  }
  return qs
}

const addComma = (s: string) => {
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export function numberToString(num) {
  let numStr = String(num)

  if (Math.abs(num) < 1.0) {
    let e = parseInt(num.toString().split("e-")[1])
    if (e) {
      let negative = num < 0
      if (negative) num *= -1
      num *= Math.pow(10, e - 1)
      numStr = "0." + new Array(e).join("0") + num.toString().substring(2)
      if (negative) numStr = "-" + numStr
    }
  } else {
    let e = parseInt(num.toString().split("+")[1])
    if (e > 20) {
      e -= 20
      num /= Math.pow(10, e)
      numStr = num.toString() + new Array(e + 1).join("0")
    }
  }

  return numStr
}

export const CurrencyFormatter = (val: string) => {
  let value = val
  if (!value) {
    return ""
  }
  if (value.includes("%")) {
    return value
  }
  let trail = ""
  if (value.includes(" ")) {
    if (+value.split[0] < 1) {
      return value
    }
    value = +value.split(" ")[0] + " " + value.split(" ")[1]
    trail = " " + value.split(" ")[1]
  } else {
    if (+value < 1) {
      return value + ""
    }
    value = +value + ""
  }
  if (!value.split(".")[1]) {
    value = Number(value.split(" ")[0]).toFixed(2) + trail
  } else if (value.split(" ")[0].split(".")[1].length < 3) {
    value = Number(value.split(" ")[0]).toFixed(2) + trail
  }

  let separated = value.split(".")
  let comaSeparated = separated[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  if (separated[1]) {
    return comaSeparated + "." + separated[1]
  }
  return comaSeparated
}

export const formatSmall = (val: string, toFix = 8) => {
  let value = val
  if (!value) {
    return ""
  }
  if (value.includes("%")) {
    return value
  }
  if (isNaN(Number(value))) {
    return ""
  }
  if (Number(value) < 0) {
    return ""
  }
  if (Number(value) < 1) {
    value = numberToString(Number(value)).toString()
    const splitted = value.split(".")
    if (splitted[1]) {
      value = splitted[0] + "." + splitted[1].substring(0, toFix)
    }
    return value
  } else {
    const splitted = value.split(".")
    if (splitted[1]) {
      value = splitted[0] + "." + splitted[1].substring(0, toFix)
    }
    return CurrencyFormatter(value)
  }
}

export const formatCurrencyWithMaxFraction = (
  s: string | undefined,
  maxFraction = 8,
  preserveInsignificantZeros = false
) => {
  if (s == undefined) {
    return ""
  }
  let formatted = s
  if (s.includes("e")) {
    return formatSmall(s, maxFraction)
  }
  if (s.includes(".")) {
    if (s.startsWith(".")) {
      return "0" + s
    }
    let splitted = s.split(".")
    if (preserveInsignificantZeros) {
      const addedFraction = Number(s).toFixed(maxFraction)
      splitted = addedFraction.split(".")
    }
    splitted[0] = addComma(splitted[0])
    if (splitted[1]) {
      formatted = splitted[0] + "." + splitted[1].substring(0, maxFraction)
    } else {
      formatted = splitted[0] + "."
    }
    return formatted
  }
  return formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const removeTrailingZeroes = (value: string) => {
  value = value ? value.toString() : ""
  if (value !== "") {
    if (value.indexOf(".") === -1) {
      return value
    }

    let cutFrom = value.length - 1
    do {
      if (value[cutFrom] === "0") {
        cutFrom--
      }
    } while (value[cutFrom] === "0")
    if (value[cutFrom] === ".") {
      cutFrom--
    }
    return value.substr(0, cutFrom + 1)
  }
  return ""
}

export const zeroFixer = (value: string) => {
  let tmp
  if (value) {
    if (value.split(".")[0] !== "0") {
      tmp = CurrencyFormatter(value)
    } else {
      tmp = removeTrailingZeroes(value)
    }
  }
  return tmp
}

// export const formatCurrencyCell = ({
//   value,
//   code,
// }: {
//   value: string
//   code?: string
// }) => {
//   if (!value) return ""
//   const splitted = value.split(" ")
//   if (splitted[0] === "0") {
//     return `0.00 ${splitted[1] ?? ""}`
//   }
//   return `${formatCurrencyWithMaxFraction(
//     splitted[0],
//     coinPrecision(splitted[1] || code),
//     true
//   )} ${splitted[1] || ""}`
// }

// export const coinPrecision = (code = "BTC") => {
//   return (
//     currencyMap({ code })?.showDigits ?? currencyMap({ code })?.precision ?? 8
//   )
// }
export const abbreviatedNumber = (num: number, digits = 2) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ]
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value
    })
  return item ? (num / item.value).toFixed(digits) + item.symbol : "0"
}

export const timestampFormatter = (timestamp: number | string): string => {
  const date = new Date(timestamp)
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
}

export const domainMinimizer = (domain: string): string => {
  return domain.length > 15
    ? `${domain.substring(0, 5)}...${domain.substring(domain.length - 7)}`
    : domain
}

export const addressMinimizer = (
  address?: string,
  config?: AddressMinimizerConfig
): string => {
  if (!address || typeof address !== "string") return ""

  const { maxChar = 12, seperator = "..." } = config ?? {}

  if (address.length <= maxChar || address.length <= 10) return address

  const half = Math.ceil(maxChar / 2)

  const firstHalf = address.substring(0, half)
  const lastHalf = address.substring(address.length - half)

  return `${firstHalf}${seperator}${lastHalf}`
}
