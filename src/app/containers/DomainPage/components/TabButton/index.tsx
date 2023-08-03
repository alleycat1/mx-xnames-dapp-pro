import { BButton } from "app/components/BButton"
import { DomainTabs } from "app/constants"
import React, { FC } from "react"
import { Link } from "react-router-dom"

interface Props {
  currentTab: DomainTabs
  tab: DomainTabs
  children: React.ReactNode
}

export const TabButton: FC<Props> = ({ currentTab, tab, children }) => {
  return (
    <Link to={tab}>
      <BButton btn={currentTab === tab ? `secondary` : "default"} btnSize="sm">
        {children}
      </BButton>
    </Link>
  )
}
