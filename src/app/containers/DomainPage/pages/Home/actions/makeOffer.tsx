import { BButton } from "app/components/BButton"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { actionConfig } from "./config"

export const MakeOfferAction = () => {
  return (
    <BButton
      {...actionConfig.secondary}
      startIcon={<FontAwesomeIcon icon="fa-solid fa-money-check-dollar" />}
      content="Make an Offer"
      minWidth="max-content"
    />
  )
}
