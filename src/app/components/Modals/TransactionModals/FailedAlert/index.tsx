import { Box } from "@material-ui/core"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { useDispatch, useSelector } from "react-redux"
import { BModal } from "../../../BModal"
import { ModalAlert } from "app/components/BModal/ModalAlert"
import { SubTitle } from "../style"
import { BButton } from "app/components/BButton"
import { RedirectToCcdTx } from "app/components/common/RedirectToCcdTx"
import { RedirectToSupport } from "app/components/common/RedirectToSupport"

export const FailedAlert = () => {
  const dispatch = useDispatch()
  const isOpen = false
  const txHash = "useSelector(GlobalSelectors.txHash)"

  const onClose = () =>
    dispatch(globalActions.setIsOpenFailedAlert({ open: false }))

  return (
    <BModal isOpen={isOpen} onClose={onClose} modalsize="medium" title="Alert">
      <ModalAlert mode="error" title="Something went wrong">
        <SubTitle>
          This transaction failed on the blockchain.{" "}
          <RedirectToSupport>Please contact our support</RedirectToSupport>{" "}
          {txHash && (
            <RedirectToCcdTx address={txHash}>
              See transaction on explorer
            </RedirectToCcdTx>
          )}
        </SubTitle>
      </ModalAlert>
      <Box mt={3}>
        <BButton btnSize="md" btn="danger" onClick={onClose}>
          Close
        </BButton>
      </Box>
    </BModal>
  )
}
