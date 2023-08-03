import { BButton } from "app/components/BButton"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { actionConfig } from "./config"

export const SellAction = () => {
  return (
    <BButton
      {...actionConfig.primary}
      startIcon={<FontAwesomeIcon icon="fa-solid fa-ticket" />}
      content="Sell"
    />
  )
}
