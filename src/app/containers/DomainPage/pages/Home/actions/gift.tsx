import { BButton } from "app/components/BButton"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { actionConfig } from "./config"
interface Props {
  name: string
}
export const GiftAction = (props: Props) => {
  const { name } = props
  return (
    <BButton
      {...actionConfig.secondary}
      btnSize="md"
      startIcon={<FontAwesomeIcon icon="fa-solid fa-gift" />}
      content="Gift"
    />
  )
}
