import { SearchInput } from "app/components/Inputs/SearchInput"
import { SortBy, Wrapper } from "./style"
import { Text } from "app/components/Text"
import { CssVariables } from "styles/glob-styles"
import { BSelect, OptionItem } from "app/components/BSelect"
import { useState } from "react"
import { BButton } from "app/components/BButton"

export const SearchPanel = () => {
  const [sortBy, setSortBy] = useState(0)

  return (
    <Wrapper>
      <SearchInput placeholder="Search for Domains" />
      <SortBy>
        <Text type="p14r" content="Sort by" color={CssVariables.Neutral400} />
        <BSelect
          value={sortBy}
          onChange={setSortBy}
          options={[
            <OptionItem>Newly Listed</OptionItem>,
            <OptionItem>smth</OptionItem>,
            <OptionItem>smth</OptionItem>,
          ]}
        />
      </SortBy>
      <BButton
        btn="secondary"
        content="Bulk Search"
        btnSize="md"
        borderColor={CssVariables.Cyan}
      />
    </Wrapper>
  )
}
