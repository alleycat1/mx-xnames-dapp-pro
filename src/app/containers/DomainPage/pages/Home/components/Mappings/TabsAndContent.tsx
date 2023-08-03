import { Tabs } from "app/components/Tabs"
import { useState } from "react"
import { MappingPages, tabs } from "./constant"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { Fallback } from "./Fallback"
import { jmedia } from "styles/media"

export const MappingContent = () => {
  const [tab, setTab] = useState(tabs.list[0])

  const handleSelect = (item: typeof tab) => {
    // Do needed computation

    // update state
    setTab(item)
  }

  tabs.selectedTab = tab
  tabs.onSelect = handleSelect

  const Page = MappingPages[tab.value] ?? Fallback

  return (
    <>
      <Tabs {...tabs} />

      <Wrapper>
        <Page />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  overflow: auto;
  display: grid;
  place-items: center;
  margin-top: 15px;
  height: 560px;
  border-radius: 14px;
  padding: 24px;
  background-color: ${CssVariables.Neutral900};
  border: 1px solid ${CssVariables.Neutral700};

  ${jmedia.sm} {
    padding-inline: 4px;
  }
`
