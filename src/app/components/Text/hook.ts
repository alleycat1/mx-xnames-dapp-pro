import useDevice from "hooks/useDevice2"
import { TextProps, TextPropsReduced, TextType } from "./type"
import { reduceProp, switchToNextSmallType } from "./utilities"

export const usePropReducer = (props: TextProps): TextPropsReduced => {
  const { isXSmall, isSmall, isMedium } = useDevice()

  const doPropReduction = (prop: any) =>
    reduceProp({ isXSmall, isSmall, isMedium }, prop)[0]

  const getResponsiveType = () => {
    const [value, obj] = reduceProp<TextType>(
      { isXSmall, isSmall, isMedium },
      props.type
    )

    const isMobile = isXSmall || isSmall || isMedium

    // Condition for automatic switch.
    if (isMobile && Object.keys(obj).length === 0)
      return switchToNextSmallType(value)

    return value
  }

  return {
    ...props,
    type: getResponsiveType(),
    maxw: doPropReduction(props.maxw),
    lh: doPropReduction(props.lh),
    ta: doPropReduction(props.ta),
    m: doPropReduction(props.m),
    ml: doPropReduction(props.ml),
  }
}
