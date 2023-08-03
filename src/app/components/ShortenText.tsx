import { ResponsiveProp } from "./Text/type"
import { reduceProp } from "./Text/utilities"
import useDevice2 from "hooks/useDevice2"
import { AddressMinimizerConfig } from "types"
import { addressMinimizer } from "utils/formatters"

interface Props extends Omit<AddressMinimizerConfig, "maxChar"> {
  text: string
  maxChar?: number | ResponsiveProp<number>
}

export const ShortenText = ({ text, maxChar, seperator }: Props) => {
  const breakpoints = useDevice2()

  let [reducedMaxChar] = reduceProp<number>(breakpoints, maxChar)

  if (!reducedMaxChar) reducedMaxChar = text.length

  text = addressMinimizer(text, { seperator, maxChar: reducedMaxChar })

  return <>{text}</>
}
