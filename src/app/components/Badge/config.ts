import { CssVariables } from "styles/glob-styles"
import { BadgeType } from "types"

type T = CssVariables

type Colors = Record<BadgeType, { color: T; borderColor: T }>

export const badgeColors: Colors = {
  success: { color: CssVariables.Green, borderColor: CssVariables.Green },
  warning: { color: CssVariables.Yellow, borderColor: CssVariables.Yellow },
  disabled: {
    color: CssVariables.Green,
    borderColor: CssVariables.Green,
  },
}
