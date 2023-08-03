import { css } from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { ButtonType } from "../type"

export const getColor = (btn?: ButtonType) => {
  let colors = colorConfig[btn || "default"]

  return css`
    background-color: ${colors.bg};
    color: ${colors.color};
    border-color: ${colors.border || "transparent"};

    &:focus {
      outline: 2px solid ${colors.focus || "currentColor"};
    }

    &:hover {
      background-color: ${colors.hover?.bg ?? colors.bg};
      color: ${colors.hover?.color ?? colors.color};
    }

    &.bbutton-disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `
}

const colorConfig: Record<ButtonType, ColorConfig> = {
  default: {
    bg: CssVariables.Neutral100,
    color: CssVariables.Neutral700,
  },
  primary: {
    bg: CssVariables.Cyan,
    color: CssVariables.Neutral700,
    focus: CssVariables.Neutral700,
    hover: {
      bg: CssVariables.Cyan,
      color: CssVariables.Neutral900,
    },
  },
  secondary: {
    bg: CssVariables.Neutral700,
    color: CssVariables.Neutral300,
  },
  danger: {
    bg: CssVariables.Red500,
    color: CssVariables.Neutral50,
    focus: CssVariables.Neutral50,
    hover: {
      bg: CssVariables.Red400,
      color: CssVariables.Neutral900,
    },
  },
  success: {
    bg: CssVariables.Green400,
    color: CssVariables.Neutral900,
    hover: {
      bg: CssVariables.Green500,
      color: CssVariables.Neutral900,
    },
  },
  warning: {
    bg: CssVariables.Yellow400,
    color: CssVariables.Neutral900,
    hover: {
      bg: CssVariables.Yellow500,
      color: CssVariables.Neutral900,
    },
  },
}

type T = string | CssVariables

type ColorConfig = {
  bg: T
  color: T
  border?: T
  focus?: T
  hover?: {
    bg: T
    color: T
  }
}
