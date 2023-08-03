import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { useHomePageSlice } from "./slice"
import { Text } from "app/components/Text"
import { XNameSearch } from "./components/XNameSearch"
import { HomeSort } from "./components/HomeSort"
import { Cards } from "./components/Cards"
import { PageLayer } from "app/components/common/PageLayer"

export const HomePage = () => {
  useHomePageSlice()

  const content = {
    title: "Own your identity on MultiversX.",
    subTitle: "Buy. Trade. Auction and manage your xNames.",
  }

  return (
    <PageLayer fullHeight>
      <Text
        type="h40r"
        content={content.title}
        mb="0"
        ta={{ lg: "l", sm: "c" }}
      />

      <Text
        type="h40r"
        content={content.subTitle}
        color={CssVariables.Neutral600}
        ta={{ lg: "l", sm: "c" }}
        mb={40}
      />

      <XNameSearch />

      <Group>
        <Text type="p20r" content="Marketplace" />
        <HomeSort />
      </Group>

      <Cards />
    </PageLayer>
  )
}

const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;
`
