import { fontFamily, textAlign, textConfig } from "./config"
import {
  TextType,
  ResponsiveProp,
  TextPropsReduced,
  HeadingFontSize,
} from "./type"
import { getNumsFromStr } from "utils/getNumFromStr"

// This function works like @media (max-width) {...}

export const reduceProp = <Type>(
  breakpoints: { isXSmall: boolean; isSmall: boolean; isMedium: boolean },
  prop?: Type | ResponsiveProp<Type>
) => {
  const { isXSmall, isSmall, isMedium } = breakpoints

  let value = undefined as Type | undefined,
    obj = {} as ResponsiveProp<Type>

  if (typeof prop === "object") {
    prop = prop as ResponsiveProp<Type>

    if (isXSmall) value = prop.xs ?? prop.sm ?? prop.md ?? prop.lg
    else if (isSmall) value = prop.sm ?? prop.md ?? prop.lg
    else if (isMedium) value = prop.md ?? prop.lg
    else value = prop.lg

    obj = !prop.md && !prop.sm && !prop.xs ? {} : prop // if only lg is provided, return an empty object
  } else {
    value = prop
  }

  // Note: value is the smallest available at each breakpoint or the single value provided.
  return [value, obj] as [Type, ResponsiveProp<Type>]
}

export const switchToNextSmallType = (tt: TextType): TextType => {
  const fontSize = getNumsFromStr(tt)[0] as HeadingFontSize

  const getTextType = (fontSize: HeadingFontSize) => {
    return `h${fontSize}r` as TextType
  }

  // h1 - h2
  if (fontSize > 60) return getTextType(60)
  // h2 - h3
  else if (fontSize > 40) return getTextType(40)
  // h3 - h4
  else if (fontSize > 32) return getTextType(32)
  // h4 - h5
  else if (fontSize > 30) return getTextType(30)
  return tt
}

export const textElementConfig = (props: TextPropsReduced) => {
  const tt = props.type ?? "p16r"

  const typeProps = textConfig[tt]

  const otherProps = tt.toString().startsWith("h")
    ? { ff: props.ff ?? "roobertPro" } // title
    : { ff: props.ff ?? "inter" } // text

  let mb = props.mb ?? props.marginBottom
  let lh = props.lh ?? typeProps.lh

  return {
    mb: typeof mb === "number" ? mb + "px" : mb, // Read Note*
    maxWidth: props.maxw,
    textAlign: textAlign[props.ta || "l"],
    // fontSize: typeProps.fs / 16 + "rem",
    fontSize: typeProps.fs + "px",
    fontWeight: typeProps.fw,
    lineHeight: lh + "px",
    fontFamily: fontFamily[otherProps.ff ?? "inter"],
    as: props.render ?? typeProps.as,
  }

  /**
   * Note* --> I did this because there's a glitch with mb prop. If you pass a number from outside the component, it gets multiplied to give you a higher number, but if you pass a string, you get what you want.
   *
   *
   */
}
