import { Link, NavLink } from "react-router-dom"
import { Hidden } from "@material-ui/core"
import {
  Wrapper,
  SidebarBlock,
  SidebarLink,
  SidebarLinks,
  SidebarTitle,
} from "../style"
import { Links } from "../constant"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { CssVariables } from "styles/glob-styles"
import { AppPages } from "app/constants"
import HeaderLogo from "images/logo.svg"

export default function SidebarContent() {
  return (
    <Wrapper style={{ paddingTop: "20px" }}>
      <Hidden mdUp>
        <Link
          to={AppPages.RootPage}
          style={{
            display: "inline-block",
            marginLeft: "10px",
            marginBottom: "10px",
          }}
        >
          <img src={HeaderLogo} alt="logo" />
        </Link>
      </Hidden>
      {Links.map((item) => (
        <SidebarBlock key={item.title}>
          {item.title && <SidebarTitle type="p12m">{item.title}</SidebarTitle>}
          <SidebarLinks>
            {item.links.map(({ text, path, icon }) => (
              <SidebarLink key={text}>
                <NavLink
                  exact
                  to={path}
                  className={(isActive: boolean) => (isActive ? "active" : "")}
                >
                  <FontAwesomeIcon
                    icon={`fa-solid ${icon as "fa-function"}`}
                    color={CssVariables.White as string}
                    fontSize={"16px"}
                  />
                  {text}
                </NavLink>
              </SidebarLink>
            ))}
          </SidebarLinks>
        </SidebarBlock>
      ))}
    </Wrapper>
  )
}
