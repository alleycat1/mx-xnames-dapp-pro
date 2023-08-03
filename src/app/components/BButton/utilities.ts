import { fontFamily, textAlign } from "../Text/config"
import { buttonTextConfig } from "./configurations/typography"
import { BButtonPropsReduced } from "./type"

export const buttonElementConfig = (props: BButtonPropsReduced) => {
  const tt = props.btnText ?? "p18m"

  const typeProps = buttonTextConfig[tt]

  const mb = props.mb

  return {
    mb: typeof mb === "number" ? mb + "px" : mb, // Read Note*
    maxWidth: props.maxw,
    textAlign: textAlign[props.ta || "c"],
    fontSize: typeProps.fs / 16 + "rem",
    fontWeight: typeProps.fw,
    lineHeight: typeProps.lh + "px",
    fontFamily: fontFamily[props.ff ?? "inter"],
  }

  /**
   *      Note* --> I did this because there's a glitch with mb prop. If you pass a number from outside the component, it gets multiplied to give you a higher number, but if you pass a string, you get what you want.
   *
   *
   */
}
