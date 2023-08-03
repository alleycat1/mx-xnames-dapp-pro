import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18.5px 16px 18.5px;
`

export const NavItems = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`

export const NavItem = styled.button`
  border: none;
  cursor: pointer;
  height: max-content;
  padding: 10px 14px;
  border-radius: 12px;
  background-color: ${CssVariables.Neutral800};
  color: ${CssVariables.Neutral300};
`

export const BlockLeft = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`
