/**
 *
 * Unlock Page
 *
 */

import { Helmet } from "react-helmet-async"
import { BTitle } from "app/components/common/BTitle"
import { CssVariables } from "styles/glob-styles"
import { Spacer } from "app/components/common/Spacer"
import {
  Header,
  StyledExtensionLoginButton,
  StyledLedgerLoginButton,
  StyledWalletConnectLoginButton,
  WalletsContainer,
  Wrapper,
} from "./style"
import multiversXIcon from "images/unlock/multiversXIcon.png"
import ledgerIcon from "images/unlock/ledgerIcon.png"
import defiIcon from "images/unlock/defiIcon.png"
import { Text } from "app/components/Text"
import { PageLayer } from "app/components/common/PageLayer"

export function UnlockPage() {
  return (
    <PageLayer fullHeight>
      <Helmet>
        <title>Unlock</title>
        <meta name="description" content="Description of Unlock" />
      </Helmet>
      <Wrapper>
        <Header>
          <BTitle btnSize="h5">Connect your wallet</BTitle>
          <Text>Choose one of the options below</Text>
        </Header>

        <Spacer vSpace={CssVariables.Space40} />

        <WalletsContainer>
          <StyledWalletConnectLoginButton>
            <Text>Mobile</Text>
            <img src={multiversXIcon} alt="multiversXIcon" />
            <Text color={CssVariables.White} size="l">
              xPortal App
            </Text>
          </StyledWalletConnectLoginButton>
          <StyledLedgerLoginButton>
            <Text>Hardware</Text>
            <img src={ledgerIcon} alt="ledgerIcon" />
            <Text color={CssVariables.White} size="l">
              Ledger
            </Text>
          </StyledLedgerLoginButton>
          <StyledExtensionLoginButton loginButtonText="DeFi Wallet">
            <Text>Extension</Text>
            <img src={defiIcon} alt="defiIcon" />
            <Text color={CssVariables.White} size="l">
              DeFi Wallet
            </Text>
          </StyledExtensionLoginButton>
        </WalletsContainer>

        <Spacer vSpace={CssVariables.Space120} />
      </Wrapper>
    </PageLayer>
  )
}
