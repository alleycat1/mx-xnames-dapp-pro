import { BButton } from "app/components/BButton"
import { RegisterConfirmModal } from "app/containers/DomainPage/components/Modals/RegisterConfirmModal"
import { DomainPageActions } from "app/containers/DomainPage/slice"
import { useDispatch } from "react-redux"

export const RegisterButton = () => {
  const dispatch = useDispatch()
  const openConfirmModal = () => {
    dispatch(DomainPageActions.setIsOpenConfirmModal(true))
  }
  return (
    <>
      <RegisterConfirmModal />
      <BButton onClick={openConfirmModal} btn="secondary" btnSize="md">
        Register
      </BButton>
    </>
  )
}
