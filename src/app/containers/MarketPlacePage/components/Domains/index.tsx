import { useSelector } from "react-redux"
import { MarketPlacePageSelectors } from "../../selectors"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { XCard } from "app/components/XCard"
import { BInfiniteScroll } from "app/components/BInfiniteScroll"

export const Domains = () => {
  const dispatch = useDispatch()
  const domains = useSelector(MarketPlacePageSelectors.domains)
  const [page, setPage] = useState(0)

  const items = {
    data: domains ?? [],
    totalCount: 0,
  }

  const loading = false

  const fetchData = () => {
    //dispatch action to fetch data
  }

  useEffect(() => {
    fetchData()
  }, [page])

  if (!domains?.length) return <></>

  return (
    <BInfiniteScroll
      page={page}
      setPage={setPage}
      dataLength={items.data.length}
      totalLength={items.totalCount}
      fetchData={fetchData}
      loading={loading}
      emptyContent=""
    >
      {items.data.map((item, idx) => (
        <XCard key={idx} name={item} />
      ))}
    </BInfiniteScroll>
  )
}
