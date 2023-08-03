import { Sort } from "app/components/Sort"
import { useState } from "react"
import { SortOption } from "types"

const options: SortOption[] = [
  { id: 0, label: "View all" },
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
  { id: 3, label: "Option 3" },
]

export const HomeSort = () => {
  const [value, setValue] = useState(options[0])

  return (
    <Sort
      value={value}
      options={options}
      onChange={setValue}
      labelConfig={{ minWidth: "130px" }}
    />
  )
}
