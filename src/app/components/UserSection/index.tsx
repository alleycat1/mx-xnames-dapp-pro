import { Avatar } from "app/components/Avatar"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Box } from "@material-ui/core"
import { Spacer } from "app/components/common/Spacer"
import copyIcon from "images/icons/copyIcon.svg"
import { BTitle } from "app/components/common/BTitle"
import { media } from "styles/media"
import { copiedToClipboardMsg, walletToName } from "utils/commonUtils"
import { useSelector } from "react-redux"
import { GlobalSelectors } from "app/selectors"

export const UserSection = () => {
  const userData = undefined

  return (
    <>
      {userData && (
        <Wrapper>
          <BgImg />
          <Content>
            <User>
              <StyledAvatar name="userData.username ?? walletToName(userData.wallet_address)" />

              <Box display="flex" flexDirection="column">
                <UserName>
                  <BTitle color={CssVariables.Black} btnSize="h5" weight="med">
                    {
                      "userData.username ?? walletToName(userData.wallet_address)"
                    }
                  </BTitle>
                </UserName>

                <Spacer vSpace={CssVariables.Space8} />

                <CopyToClipboard
                  text={"userData.wallet_address"}
                  onCopy={copiedToClipboardMsg}
                >
                  <WalletAddress>
                    <span>{"userData.wallet_address"}</span>
                    <CopyIcon />
                  </WalletAddress>
                </CopyToClipboard>
              </Box>
            </User>
          </Content>
        </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${media.md`
    padding: 10px 0;
  `}
`

const BgImg = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 90%;
  background: ${CssVariables.Cyan};
  ${media.md`
    height: 100%;
  `}
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
  align-content: center;
`

const UserName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`

const WalletAddress = styled.div`
  max-width: 250px;
  overflow: hidden;
  color: ${CssVariables.Black};
  cursor: pointer;
  display: flex;
  align-items: center;
  span {
    font-size: 14px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${media.sm`
      font-size: 12px;
    `}
  }
`

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 12px 24px;
  ${media.md`
    flex-direction: column;
    align-items: flex-start;
  `}
`

const StyledAvatar = styled(Avatar)`
  width: 128px;
  ${media.md`
    width: 90px;
  `}
  ${media.sm`
    width: 64px;
  `}
`

const CopyIcon = styled("div")`
  height: 18px;
  width: 18px;
  margin-left: 10px;
`
