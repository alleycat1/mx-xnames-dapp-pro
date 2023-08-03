import { Box } from "@material-ui/core"
import {
  ExtensionLoginButton,
  LedgerLoginButton,
  WalletConnectLoginButton,
} from "@multiversx/sdk-dapp/UI"
import styled, { css } from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  margin: auto;
`

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const WalletsContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`

const clearDefaults = css`
  padding: 3rem;
  margin: 7px;
  display: flex;
  flex: 1 1 30%;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: ${CssVariables.Neutral800};
  border-radius: 24px;
  border: transparent;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${CssVariables.Neutral700};
  }
`

export const StyledWalletConnectLoginButton = styled(WalletConnectLoginButton)`
  ${clearDefaults}
`

export const StyledLedgerLoginButton = styled(LedgerLoginButton)`
  ${clearDefaults}
`

export const StyledExtensionLoginButton = styled(ExtensionLoginButton)`
  ${clearDefaults}
`
