import { TextType } from "../Text/type"

export type XCardProps = {
  name: string
  address: string
  status: string
  liked: boolean
}

export type XCardTopProps = {
  name: string
  blobSize?: "lg" | "sm"
  className?: string
  nameConfig?: NameConfig
  suffixConfig?: NameConfig
}

type NameConfig = {
  type?: TextType
}
