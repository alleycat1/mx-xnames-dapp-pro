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
import { WithWrapperProps } from "../WithWrapper"
import { textAlign, fontFamily } from "./config"

export interface TextPropsReduced extends TextProps {
  type?: TextType
  maxw?: string
  lh?: number
  ta?: TextAlign
  m?: string
}

// type PropsFromGeneral = Omit<GeneralTextProps, "ta">

type EventHandlers = EventHandlerProps<any>

export interface TextProps
  extends SpaceProps,
    LayoutProps,
    ColorProps,
    TypographyProps,
    BorderRadiusProps,
    BorderProps,
    EventHandlers {
  type?: TextType | ResponsiveProp<TextType>
  ta?: TextAlign | ResponsiveProp<TextAlign>
  maxw?: string | ResponsiveProp<string> // max-width
  m?: string | ResponsiveProp<string>
  ml?: string | ResponsiveProp<string>

  ff?: FontFamily
  fs?: number // font-size
  fw?: number // font-weight
  lh?: number | ResponsiveProp<number> // line-height

  children?: ReactNode
  content?: ReactNode
  className?: string
  id?: string

  render?: HTMLTag // To render a specific html tag of your choice. Use carefully though
  debug?: boolean

  dangerouslySetInnerHTML?: string
  withWrapper?: WithWrapperProps

  style?: any
}

export type TextConfig = Record<
  TextType,
  { fs: FS; fw: number; lh: number; as: HTMLTag }
>

export type TextType = TTHeading | TTParagraph

export type ResponsiveProp<Type> = {
  lg?: Type
  md?: Type
  sm?: Type
  xs?: Type
}

export type FontFamily = keyof typeof fontFamily

export type TextAlign = keyof typeof textAlign

type FS = HeadingFontSize | ParagraphFontSize // Font-Size.

type TTHeading = `h${HeadingFontSize}${BMRS}` // TextType Heading

type TTParagraph = `p${ParagraphFontSize}${BMRS}` // TextType Paragraph

export type HeadingFontSize = 77 | 60 | 56 | 48 | 40 | 36 | 32 | 30 | 24

type ParagraphFontSize = 20 | 18 | 16 | 14 | 12

type BMRS = "b" | "m" | "r" | "s"

export type HTMLTag = keyof JSX.IntrinsicElements
