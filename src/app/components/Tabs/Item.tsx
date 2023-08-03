import styled from "styled-components"
import { Text } from "../Text"
import { TabProps, TabStylesConfig } from "./types"
import { useState } from "react"

export const TabItem = ({ tab, selectedTab, tabStyle, onSelect }: TabProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const isSelected = tab.value === selectedTab.value

  const style: TabStylesConfig = { default: tabStyle?.default }

  if (isHovered) style.hover = tabStyle?.hover
  if (isSelected) style.selected = tabStyle?.selected

  const raiseSelect = () => {
    if (onSelect) onSelect(tab)
  }

  return (
    <Item
      type="p16s"
      {...style?.default}
      {...style?.hover}
      {...style?.selected}
      render="div"
      content={tab.label}
      onClick={raiseSelect}
    />
  )
}

const Item = styled(Text)`
  display: grid;
  place-items: center;
  height: 40px;
  border-radius: 8px;
  padding: 0 17px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`
