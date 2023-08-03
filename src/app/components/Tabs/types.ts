import { ReactNode } from "react"
import { ColorProps, SpaceProps } from "styled-system"
import { TextProps } from "../Text/type"

export interface TabsProps {
  selectedTab: Tab
  list: Tab[]
  className?: string
  onSelect?: (tab: Tab) => void

  tabStyle?: TabStylesConfig
  debug?: boolean
}

export interface TabProps
  extends Pick<TabsProps, "selectedTab" | "tabStyle" | "onSelect" | "debug"> {
  tab: Tab
}

type Tab = {
  value: any
  label: ReactNode
}

export interface Style extends ColorProps, SpaceProps {}

export type TabStylesConfig = {
  default?: TextProps
  hover?: TextProps
  selected?: TextProps
}
