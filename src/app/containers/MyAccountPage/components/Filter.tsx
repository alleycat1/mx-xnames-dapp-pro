import { BAutoComplete } from "app/components/BAutoComplete"
import { useQuery } from "hooks/queryHook"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { MyAccountSelectors } from "../selectors"
import { MyAccountActions } from "../slice"
import { FilterOptionsType } from "../types"

const FilterOptions: FilterOptionsType[] = [
  "My Domains",
  "Favourites",
  "In Auctions",
]

export const Filter = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const query = useQuery()

  const filterStatus = useSelector(MyAccountSelectors.filterValue)

  const onChange = (value) => {
    dispatch(MyAccountActions.setFilterValue(value))
    history.push({
      search: `&filterStatus=${value}`,
    })
  }

  useEffect(() => {
    const filterStatus = FilterOptions.find(
      (option) => option === query.get("filterStatus")
    )
    if (filterStatus) dispatch(MyAccountActions.setFilterValue(filterStatus))
  }, [])

  return (
    <BAutoComplete
      options={FilterOptions}
      value={filterStatus}
      onChange={onChange}
    />
  )
}
