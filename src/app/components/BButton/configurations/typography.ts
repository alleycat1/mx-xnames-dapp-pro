import { textConfig } from "../../Text/config"
import { ButtonSize, ButtonText } from "../type"

const {
  p12m,
  p12b,
  p12r,
  p12s,

  p14m,
  p14b,
  p14r,
  p14s,

  p16r,
  p16b,
  p16m,
  p16s,

  p18r,
  p18b,
  p18m,
  p18s,
} = textConfig

export const buttonTextConfig = {
  p18r,
  p18b,
  p18m,
  p18s,

  p16b,
  p16r,
  p16m,
  p16s,

  p14m,
  p14b,
  p14r,
  p14s,

  p12m,
  p12b,
  p12r,
  p12s,
}

type GetTextTypeParam = {
  size?: ButtonSize
  text?: ButtonText
}

export const getTextType = ({ size, text }: GetTextTypeParam): ButtonText => {
  if (text) return text

  const large: ButtonText = "p18m"

  switch (size) {
    case "lg":
      return large
    case "md":
      return "p14m"
    case "sm":
      return "p14m"
    case "xs":
      return "p12m"
    default:
      return large
  }
}
