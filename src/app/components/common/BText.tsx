import { FC } from "react"
import styled from "styled-components"
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  variant,
} from "styled-system"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"

type T = string | undefined | CssVariables

interface BTextProps
  extends ColorProps,
    SpaceProps,
    FlexboxProps,
    LayoutProps,
    FontWeightProps,
    TextAlignProps,
    FontSizeProps {
  btnSize?: sizeType
  weight?: weightType
  color?: T
}

type sizeType = "l" | "m" | "s" | "xs"
type weightType = "reg" | "med" | "bold"

export const BText: FC<BTextProps> = ({ children, ...props }) => {
  return <BTextStyled {...(props as any)}>{children}</BTextStyled>
}

const BTextStyled = styled.div<BTextProps>`
  font-size: 16px;
  font-weight: 400;
  ${media.md`
    font-size: 15px;
  `}
  ${media.sm`
    font-size: 14px;
  `}

  ${variant({
    prop: "size",
    variants: {
      l: {
        fontSize: ["14px", "16px", "18px"],
      },
      m: {
        fontSize: ["14px", "15px", "16px"],
      },
      s: {
        fontSize: ["12px", "13px", "14px"],
      },
      xs: {
        fontSize: "12px",
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
  ${fontWeight}
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${textAlign}
`
