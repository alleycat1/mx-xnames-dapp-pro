import { BButton } from "app/components/BButton"
import { ModalOverlay } from "app/components/ModalOverlay"
import { FC, useState } from "react"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { RegHeading } from "./components/Heading"
import { RegTitle } from "./components/Title"
import { RegLineBreak } from "./components/LineBreak"
import { RegInfo } from "./components/RegInfo"
import { TotalOfItems } from "./components/TotalOfItems"
import { NumOfYears } from "./components/NumOfYears"
import { useDispatch, useSelector } from "react-redux"
import { DomainPageSelectors } from "app/containers/DomainPage/selectors"
import { DomainPageActions } from "app/containers/DomainPage/slice"

export const RegisterModal: FC = () => {
  const dispatch = useDispatch()
  const isOpen = !!useSelector(DomainPageSelectors.domaintoRegister)

  const handleRegister = () => {
    dispatch(DomainPageActions.startDomainRegisteration())
  }
  const handleClose = () => {
    dispatch(DomainPageActions.setDomainToRegister(undefined))
  }

  return (
    <Modal isOpen={isOpen}>
      <RegHeading />
      <RegTitle />
      <NumOfYears />
      <RegInfo />
      <RegLineBreak />
      <TotalOfItems />
      <BButton
        btn="primary"
        content="Register now"
        width="100%"
        onClick={handleRegister}
        btnSize="md"
      />
      <BButton
        btn="secondary"
        content="cancel"
        width="100%"
        onClick={handleClose}
        btnSize="md"
      />
    </Modal>
  )
}

const Modal = styled(ModalOverlay)`
  box-sizing: border-box;
  display: grid;
  gap: 20px;
  width: min(459px, 100%);
  height: 570.28px;
  background-color: ${CssVariables.Neutral900};
  border-radius: 16px;
  padding: 40px;
`
