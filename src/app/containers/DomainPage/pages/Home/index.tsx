import styled from "styled-components"
import { PageLayer } from "app/components/common/PageLayer"
import { Tutorial } from "app/components/Tutorial"
import { TopLeft } from "./components/TopLeft"
import { TopRight } from "./components/TopRight"
import { Mappings } from "./components/Mappings"
import { jmedia } from "styles/media"
import { useSelector } from "react-redux"
import { BlockchainDomains } from "app/containers/Blockchain/selectors"
import { useParams } from "react-router-dom"

export const Home = () => {
  const xNamesTransactionStatus = useSelector(
    BlockchainDomains.xNamesTransactionStatus
  )
  console.log({ xNamesTransactionStatus })
  const { name } = useParams<{ name: string }>()
  return (
    <Main>
      <TopLayer>
        <TopLeft name={name || "testName"} />
        <TopRight name={name || "testName"} />
      </TopLayer>
      <Mappings />
      <Tutorial />
    </Main>
  )
}

const Main = styled.main`
  display: grid;
  gap: 15px;

  width: 100%;
`

const TopLayer = styled(PageLayer)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  & > * {
    &:first-child {
      width: 53%;
    }
    &:last-child {
      width: 45%;
    }
  }

  ${jmedia.md} {
    justify-content: center;

    & > * {
      width: min(600px, 100%) !important;
    }
  }
`
