import useDevice from "hooks/useDevice2"
import { reduceProp } from "../Text/utilities"
import { BButtonProps, BButtonPropsReduced } from "./type"

export const useReduceProps = (props: BButtonProps): BButtonPropsReduced => {
  const { isXSmall, isSmall, isMedium } = useDevice()

  const doPropReduction = (prop: any) =>
    reduceProp({ isXSmall, isSmall, isMedium }, prop)[0]

  return {
    ...props,
    width: doPropReduction(props.width),
    maxw: doPropReduction(props.maxw),
    mt: doPropReduction(props.mt),
  }
}
