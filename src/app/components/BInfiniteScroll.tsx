import { FC, ReactNode, useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import styled from "styled-components"
import { layout } from "styled-system"
import { jmedia } from "styles/media"
import { LoadingGrid } from "./grid_loading/componentLoading"

interface Props {
  dataLength: number
  totalLength: number
  page: number
  setPage: (page: number) => void
  fetchData: (page: number) => void
  loading?: boolean
  emptyContent?: ReactNode
}

export const BInfiniteScroll: FC<Props> = ({
  loading,
  dataLength,
  page,
  totalLength,
  setPage,
  fetchData,
  children,
  emptyContent,
  ...rest
}) => {
  const [hasMore, setHasMore] = useState(false)

  const isEmpty = loading ? false : dataLength === 0

  useEffect(() => {
    if (isEmpty) {
      setHasMore(true)
      setPage(1)
    }
  }, [dataLength])

  const handleNext = () => {
    if (loading) return

    if (dataLength >= totalLength) {
      setHasMore(false)
    } else {
      setPage(page + 1)
      fetchData(page + 1)
    }
  }

  return (
    <Wrapper {...rest}>
      <InfiniteScroll
        dataLength={dataLength}
        next={handleNext}
        hasMore={hasMore}
        loader={<></>}
      >
        <ContentWrapper>{children}</ContentWrapper>
      </InfiniteScroll>

      <Section>
        {isEmpty && emptyContent}

        {loading && <LoadingGrid />}
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  /* border: 1px solid orange; */

  ${layout}

  ${jmedia.sm} {
    min-width: 100%;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(218px, 1fr));
  gap: 26px;
`
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
