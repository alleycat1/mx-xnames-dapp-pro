import { Box } from "@material-ui/core"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { useDispatch, useSelector } from "react-redux"
import { CssVariables } from "styles/glob-styles"
import { BModal } from "../../../BModal"
import { BText } from "../../../common/BText"
import { Spacer } from "../../../common/Spacer"
import { StyledText } from "../../style"
import saturn from "images/saturn.gif"
import styled from "styled-components"

export const PendingAlert = () => {
  const dispatch = useDispatch()
  const isOpen = false

  const onClose = () => dispatch(globalActions.setIsOpenAlert(false))

  return (
    <BModal
      isOpen={!!isOpen}
      onClose={onClose}
      modalsize="medium"
      title="Approve the transaction on your wallet"
    >
      <SaturnGif src={saturn} alt="saturn animation" />
      <Spacer vSpace={CssVariables.Space24} />

      <Box display="flex" flexDirection="column" alignItems="center">
        <BText btnSize="m">Approval Required in Wallet</BText>
        <Spacer vSpace={CssVariables.Space16} />
        <StyledText btnSize="s">
          You have a pending interaction in your CryptoX wallet.
        </StyledText>
      </Box>

      <Spacer vSpace={CssVariables.Space40} />
    </BModal>
  )
}

const SaturnGif = styled.img`
  max-width: 250px;
  display: block;
  margin: 0 auto;
`
