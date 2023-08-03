import { BButton } from "app/components/BButton"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { actionConfig } from "./config"

export const TransferAction = () => {
  return (
    <BButton
      {...actionConfig.secondary}
      startIcon={<FontAwesomeIcon icon="fa-regular fa-send" />}
      content="Transfer"
    />
  )
}
