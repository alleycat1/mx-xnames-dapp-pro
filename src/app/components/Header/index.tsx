import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { AppPages } from "app/constants"
import { BlockLeft, NavItem, NavItems, Wrapper } from "./styles"
import { logout } from "@multiversx/sdk-dapp/utils"
import { useSelector } from "react-redux"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { AuthButton } from "../AuthButton"
import { BSelect, OptionImg, OptionItem } from "../BSelect"
import { Hidden } from "@material-ui/core"
import HeaderLogo from "images/logo.svg"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"

import { addressMinimizer } from "utils/formatters"

export const Header = ({ setIsOpenSidebar, isOpenSidebar }) => {
  const history = useHistory()
  const connectedAccount = useSelector(BlockchainSelectors.connectedAccount)

  const handleLogout = () => {
    logout()
    history.push(AppPages.UnlockPage)
  }

  return (
    <Wrapper>
      <BlockLeft>
        <Hidden mdUp>
          <FontAwesomeIcon
            icon={`fa-solid fa-bars`}
            onClick={() => setIsOpenSidebar(true)}
            fontSize="30px"
          />
        </Hidden>
        <Hidden xsDown>
          <Link to={AppPages.RootPage} className="nav__logo">
            <img src={HeaderLogo} alt="logo" />
          </Link>
        </Hidden>
      </BlockLeft>
      {connectedAccount?.address ? (
        <NavItems>
          <Hidden xsDown>
            <NavItem title="question">
              <FontAwesomeIcon icon="fa-solid fa-question" />
            </NavItem>
            <NavItem title="set position">
              <FontAwesomeIcon icon="fa-solid fa-grid" />
            </NavItem>
          </Hidden>
          <BSelect
            options={[
              <OptionItem>
                <OptionImg
                  src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt="user-img"
                />
                <span>{addressMinimizer(connectedAccount.address)}</span>
              </OptionItem>,
              <OptionItem>Settings</OptionItem>,
              <Hidden smUp>
                <OptionItem style={{ color: "teal" }}>
                  <span>Questions</span>
                  <FontAwesomeIcon icon="fa-solid fa-question" />
                </OptionItem>
              </Hidden>,
              <Hidden smUp>
                <OptionItem style={{ color: "teal" }}>
                  <span>Grid</span>
                  <FontAwesomeIcon icon="fa-solid fa-grid" />
                </OptionItem>
              </Hidden>,
              <OptionItem onClick={handleLogout} style={{ color: "red" }}>
                Log Out
              </OptionItem>,
            ]}
          />
        </NavItems>
      ) : (
        <AuthButton />
      )}
    </Wrapper>
  )
}
