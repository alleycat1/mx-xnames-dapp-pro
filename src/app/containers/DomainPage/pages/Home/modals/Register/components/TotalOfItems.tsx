import { Text } from "app/components/Text"
import { RegInfoItem } from "./InfoItem"
import { CssVariables } from "styles/glob-styles"

export const TotalOfItems = () => {
  const total = "$30.8 (~123.893X)"

  const text = (
    <Text type="p14s" content="Total" color={CssVariables.Neutral50} />
  )

  return <RegInfoItem content={[text, total]} />
}
