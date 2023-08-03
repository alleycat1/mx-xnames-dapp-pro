import styled from "styled-components"
import { fontFamily } from "../Text/config"
import { Text } from "../Text"
import { CssVariables } from "styles/glob-styles"

export const Wrapper = styled.aside`
  position: sticky;
  top: 0;
  width: 208px;
  min-height: 100%;
  background-color: ${CssVariables.Neutral900};
`

export const SidebarBlock = styled.div`
  margin-bottom: 14px;
`
export const SidebarLinks = styled.ul``

export const SidebarLink = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #d4d4d4;
    font-family: ${fontFamily.roobertPro};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    width: 100%;
    padding: 8px 12px;
    transition: color 0.3s ease-out, background 0.3s ease-out;

    svg {
      transition: color 0.3s ease-out;
      margin-top: -2px;
    }

    &.active {
      background: #000000;
      border-radius: 8px;
      color: ${CssVariables.Cyan};

      svg {
        color: ${CssVariables.Cyan};
      }
    }
  }
`

export const SidebarTitle = styled(Text)`
  color: ${CssVariables.Neutral500};
  font-family: ${fontFamily.inter};
  padding: 8px 12px 0;
  text-transform: uppercase;
`
