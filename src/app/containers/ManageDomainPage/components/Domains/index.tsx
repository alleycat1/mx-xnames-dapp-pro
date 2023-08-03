import React from "react"
import { useSelector } from "react-redux"
import { ManageDomainsPageSelectors } from "../../selectors"
import { EmptyState } from "../EmptyState"
import { CardsWrapper } from "./style"
import { XCard } from "app/components/XCard"

export const Domains = () => {
  const domains = useSelector(ManageDomainsPageSelectors.domains)

  if (!domains?.length) {
    return <EmptyState />
  }

  return (
    <CardsWrapper>
      {domains.map((card, idx) => (
        <XCard key={idx} name={card} />
      ))}
    </CardsWrapper>
  )
}
