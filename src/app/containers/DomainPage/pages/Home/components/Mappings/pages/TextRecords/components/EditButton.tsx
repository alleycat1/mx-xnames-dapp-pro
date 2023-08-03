import { BButton } from "app/components/BButton"
import { CssVariables } from "styles/glob-styles"

export const EditButton = () => {
  return (
    <BButton
      btnText="p12m"
      btn="secondary"
      btnSize="sm"
      content="Edit"
      borderRadius={20}
      padding="6px 22px"
      width="111px"
      borderColor={CssVariables.Neutral50}
      bg={CssVariables.Color1}
      height={34}
    />
  )
}
