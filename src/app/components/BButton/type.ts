import { ReactNode } from "react"
import {
  SpaceProps,
  LayoutProps,
  ColorProps,
  TypographyProps,
  BorderRadiusProps,
  BorderProps,
} from "styled-system"
import { EventHandlerProps } from "types"
import { FontFamily, HTMLTag, ResponsiveProp, TextAlign } from "../Text/type"
import { WithWrapperProps } from "../WithWrapper"
import { buttonTextConfig } from "./configurations/typography"

export interface BButtonPropsReduced extends BButtonProps {
  width?: string
  maxw?: string // max-width
}

export interface BButtonProps
  extends SpaceProps,
    LayoutProps,
    ColorProps,
    TypographyProps,
    BorderRadiusProps,
    BorderProps,
    EventHandlerProps<HTMLButtonElement> {
  type?: "button" | "submit"
  btn?: ButtonType
  btnText?: ButtonText
  btnSize?: ButtonSize

  onClick?: () => void

  content?: ReactNode
  children?: ReactNode
  startIcon?: ReactNode
  endIcon?: ReactNode

  loading?: boolean
  loadingContent?: ReactNode

  disabled?: boolean

  width?: string | ResponsiveProp<string>
  ta?: TextAlign
  maxw?: string | ResponsiveProp<string> // max-width
  m?: string

  ff?: FontFamily
  fs?: number // font-size
  fw?: number // font-weight
  lh?: number // line-height

  debug?: boolean

  dangerouslySetInnerHTML?: string
  withWrapper?: WithWrapperProps
  className?: string
}

export type ButtonText = keyof typeof buttonTextConfig

export type ButtonType =
  | "default"
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
// | "success"
// | "danger"
// | "warning"
// | "secondary"

export type ButtonSize = "lg" | "md" | "sm" | "xs"
