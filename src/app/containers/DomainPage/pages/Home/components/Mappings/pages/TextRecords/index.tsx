import { Text } from "app/components/Text"
import styled from "styled-components"
import { useState } from "react"
import { Fallback } from "../../Fallback"
import { TextRecordTabs, TextRecordPages } from "./constant"
import { CssVariables } from "styles/glob-styles"
import { Tabs } from "app/components/Tabs"
import { jmedia } from "styles/media"

export const TextRecords = () => {
  const [tab, setTab] = useState(TextRecordTabs.list[0])

  const handleSelect = (item: typeof tab) => {
    // Do needed computation

    // update state
    setTab(item)
  }

  TextRecordTabs.selectedTab = tab
  TextRecordTabs.onSelect = handleSelect

  const Page = TextRecordPages[tab.value] ?? Fallback

  return (
    <Wrapper>
      <Title type="p18m" content="Text Records" mb="50px" ml={{ sm: "10px" }} />

      <StyledTabs {...TextRecordTabs} />

      <PageWrapper>
        <Page />
      </PageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const Title = styled(Text)``

const PageWrapper = styled.div`
  flex-grow: 1;
  overflow: auto;
  display: grid;
  place-items: center;
  margin-top: 40px;
  border-radius: 14px;
  padding: 24px;
  background-color: ${CssVariables.Color1};

  ${jmedia.sm} {
    border-radius: 0;
    padding-inline: 10px;
  }
`
const StyledTabs = styled(Tabs)`
  && {
    background-color: transparent;
    padding: 0;
  }
`
