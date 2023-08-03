import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { XCard } from "app/components/XCard"
import { BInfiniteScroll } from "app/components/BInfiniteScroll"

export const Cards = () => {
  const dispatch = useDispatch()

  const items = {
    data: [],
    totalCount: 0,
  }

  const loading = false

  const [page, setPage] = useState(0)

  const fetchData = () => {
    //dispatch action to fetch data
  }

  useEffect(() => {
    fetchData()
  }, [page])

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
      <XCard name="Cyan" />
      <XCard name="Peter" />
      <XCard name="Dana" />
      <XCard name="James" />
      <XCard name="Orange" />
      <XCard name="Dina" />
      <XCard name="xName" />
      <XCard name="Combat" />
    </BInfiniteScroll>
  )
}
