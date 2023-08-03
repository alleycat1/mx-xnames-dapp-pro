import { FC } from "react"
import styled from "styled-components"
import { media } from "styles/media"
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  fontSize,
  FontSizeProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  variant,
} from "styled-system"
import { CssVariables } from "styles/glob-styles"

type T = CssVariables | undefined

interface BTitleProps
  extends ColorProps,
    SpaceProps,
    FlexboxProps,
    LayoutProps,
    FontSizeProps {
  btnSize?: sizeType
  weight?: weightType
  color?: T
}

type sizeType = "h1" | "h2" | "h3" | "h4" | "h5"
type weightType = "reg" | "med" | "bold"

export const BTitle: FC<BTitleProps> = ({ children, ...props }) => {
  return <BTitleStyled {...(props as any)}>{children}</BTitleStyled>
}

const BTitleStyled = styled.h2<BTitleProps>`
  font-size: 56px;
  font-weight: 700;

  ${variant({
    prop: "size",
    variants: {
      h1: {
        fontSize: ["36px", "46px", "56px"],
      },
      h2: {
        fontSize: ["28px", "38px", "48px"],
      },
      h3: {
        fontSize: ["20px", "30px", "40px"],
      },
      h4: {
        fontSize: ["18px", "25px", "32px"],
      },
      h5: {
        fontSize: ["16px", "20px", "24px"],
      },
    },
  })};
  ${variant({
    prop: "weight",
    variants: {
      reg: {
        fontWeight: "400",
      },
      med: {
        fontWeight: "500",
      },
      bold: {
        fontWeight: "600",
      },
    },
  })};

  ${fontSize}
  ${color}
  ${space}
  ${layout}
  ${flexbox}
`
