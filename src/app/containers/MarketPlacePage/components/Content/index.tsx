import { FC } from "react"
import Filter from "../Filter"
import { SearchPanel } from "../SearchPanel"
import { Domains } from "../Domains"
import { Section, Wrapper } from "./style"

export const Content: FC = () => {
  return (
    <Wrapper>
      <Filter />
      <Section>
        <SearchPanel />
        <Domains />
      </Section>
    </Wrapper>
  )
}
