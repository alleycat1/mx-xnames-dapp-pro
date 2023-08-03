import { BButtonProps } from "app/components/BButton/type"
import { CssVariables } from "styles/glob-styles"

type ActionConfig = Record<"primary" | "secondary", Partial<BButtonProps>>

export const actionConfig: ActionConfig = {
  primary: {
    btn: "primary",
    color: CssVariables.Neutral900,
    btnText: "p16b",
  },
  secondary: {
    btn: "secondary",
    bg: CssVariables.Neutral900,
    borderColor: CssVariables.Neutral300,
    btnText: "p16b",
  },
}
