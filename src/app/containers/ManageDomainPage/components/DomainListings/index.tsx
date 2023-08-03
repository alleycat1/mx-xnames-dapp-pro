import { Text } from "app/components/Text"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { CssVariables } from "styles/glob-styles"
import { BSelect, OptionItem } from "app/components/BSelect"
import { SearchInput } from "app/components/Inputs/SearchInput"
import { useEffect, useState } from "react"
import { Spacer } from "app/components/common/Spacer"
import {
  FiltersWrapper,
  RotateIconWrapper,
  SortBy,
  TitleWrapper,
  Wrapper,
} from "./style"
import { useDispatch } from "react-redux"
import { ManageDomainPageActions } from "../../slice"
import { Domains } from "../Domains"

export const DomainListings = () => {
  const dispatch = useDispatch()
  const [sortBy, setSortBy] = useState(0)

  useEffect(() => {
    if (sortBy === 1) {
      dispatch(ManageDomainPageActions.setDomains())
    }
  }, [sortBy])

  return (
    <Wrapper>
      <TitleWrapper>
        <Text type="h24r" content="Manage Domain Listings" />

        <RotateIconWrapper>
          <FontAwesomeIcon icon="fa-regular fa-arrows-rotate" />
        </RotateIconWrapper>
      </TitleWrapper>

      <Text
        type="p12r"
        content="Attach records such as wallet addresses, URLs and texts to your domain name."
        color={CssVariables.Neutral600}
        mt={12}
        mb={24}
      />

      <FiltersWrapper>
        <SearchInput placeholder="Search for Domains" />
        <SortBy>
          <Text type="p14r" content="Sort by" color={CssVariables.Neutral400} />
          <BSelect
            value={sortBy}
            onChange={setSortBy}
            options={[
              <OptionItem>Expiry Date</OptionItem>,
              <OptionItem>Start Date</OptionItem>,
              <OptionItem>End Date</OptionItem>,
            ]}
          />
        </SortBy>
      </FiltersWrapper>

      <Spacer vSpace={CssVariables.Space24} />

      <Domains />
    </Wrapper>
  )
}
