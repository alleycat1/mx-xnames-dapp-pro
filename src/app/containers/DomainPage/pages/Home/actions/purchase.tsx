import { BButton } from "app/components/BButton"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { actionConfig } from "./config"

export const PurchaseAction = () => {
  return (
    <BButton
      {...actionConfig.primary}
      startIcon={<FontAwesomeIcon icon="fa-solid fa-money-check-dollar" />}
      content="Purchase"
    />
  )
}
