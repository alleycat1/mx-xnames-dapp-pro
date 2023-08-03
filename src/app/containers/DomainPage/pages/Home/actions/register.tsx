import { AuthorizationRequiredButton } from "app/components/AuthorizationRequiredButton"
import { BButton } from "app/components/BButton"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { DomainPageActions } from "app/containers/DomainPage/slice"
import { useDispatch, useSelector } from "react-redux"
import { RegisterModal } from "../modals/Register"
import { actionConfig } from "./config"

interface RegisterActionProps {
  name: string
}

export const RegisterAction = (props: RegisterActionProps) => {
  const name = props.name
  const dispatch = useDispatch()
  const txStatus = useSelector(BlockchainSelectors.xNamesTransactionStatus)
  const isLoading = txStatus.pending
  const setDomainToRegister = () => {
    dispatch(
      DomainPageActions.setDomainToRegister({
        name: name,
        duration: 1,
      })
    )
  }

  return (
    <>
      <AuthorizationRequiredButton>
        <BButton
          loading={isLoading}
          disabled={isLoading}
          {...actionConfig.primary}
          startIcon={<FontAwesomeIcon icon="fa-solid fa-ticket" />}
          content="Register"
          loadingContent="Registering"
          btnSize="md"
          onClick={setDomainToRegister}
        />
      </AuthorizationRequiredButton>
      <RegisterModal />
    </>
  )
}
