import { useState } from "react"
import {
  FilterCheckbox,
  FilterCheckboxes,
  FilterInputTitle,
  FilterInputs,
  FilterPriceInput,
  InputWrapper,
  NameType,
  Wrapper,
} from "./styles"
import { BCheckbox } from "app/components/common/BCheckbox"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { CssVariables } from "styles/glob-styles"
import { Collapse } from "@material-ui/core"
import { Text } from "app/components/Text"

export default function Filter() {
  const [checked, setChecked] = useState(true)

  return (
    <Wrapper>
      <Text type="p18r">
        <FontAwesomeIcon
          icon="fa-regular fa-filters"
          color={CssVariables.White}
        />
        Filters
      </Text>

      <FilterCheckboxes>
        <FilterCheckbox htmlFor={"available-checkbox"}>
          <BCheckbox
            id={"available-checkbox"}
            checked={checked}
            onClick={() => setChecked(!checked)}
          />
          <span>Available</span>
        </FilterCheckbox>
        <FilterCheckbox htmlFor={"all-bids-checkbox"}>
          <BCheckbox
            id={"all-bids-checkbox"}
            checked={checked}
            onClick={() => setChecked(!checked)}
          />
          <span>All Bids</span>
        </FilterCheckbox>
        <FilterCheckbox htmlFor={"accepts-offers-checkbox"}>
          <BCheckbox
            id={"accepts-offers-checkbox"}
            checked={checked}
            onClick={() => setChecked(!checked)}
          />
          <span>Accepts Offers</span>
        </FilterCheckbox>
      </FilterCheckboxes>
      <FilterInputs>
        <InputWrapper>
          <FilterInputTitle>Min Price</FilterInputTitle>
          <FilterPriceInput>
            <input type="number" placeholder="0" min={0} />
            <span>0 USDC </span>
          </FilterPriceInput>
        </InputWrapper>
        <InputWrapper>
          <FilterInputTitle>Max Price</FilterInputTitle>
          <FilterPriceInput>
            <input type="number" placeholder="0" />
            <span>0 USDC </span>
          </FilterPriceInput>
        </InputWrapper>
      </FilterInputs>
      <FilterInputs>
        <InputWrapper>
          <FilterInputTitle>Min Length</FilterInputTitle>
          <FilterPriceInput fontWeight={400}>
            <input type="number" placeholder="0 USDC" min={0} />
          </FilterPriceInput>
        </InputWrapper>
        <InputWrapper>
          <FilterInputTitle>Max Length</FilterInputTitle>
          <FilterPriceInput fontWeight={400}>
            <input type="number" placeholder="0 USDC" min={0} />
          </FilterPriceInput>
        </InputWrapper>
      </FilterInputs>
      <NameType>
        <h5 className="name-type__title">Name Type</h5>
        <button>
          <FontAwesomeIcon
            icon="fa-solid fa-plus"
            color={CssVariables.Neutral700}
          />
        </button>
      </NameType>
      <FilterCheckboxes>
        <FilterCheckbox htmlFor={"available-checkbox"}>
          <BCheckbox
            id={"available-checkbox"}
            checked={!checked}
            onClick={() => setChecked(!checked)}
          />
          <span>Exclude Numbers</span>
        </FilterCheckbox>
        <FilterCheckbox htmlFor={"all-bids-checkbox"}>
          <BCheckbox
            id={"all-bids-checkbox"}
            checked={!checked}
            onClick={() => setChecked(!checked)}
          />
          <span>Exclude Curated Names </span>
        </FilterCheckbox>
        <FilterCheckbox htmlFor={"accepts-offers-checkbox"}>
          <BCheckbox
            id={"accepts-offers-checkbox"}
            checked={!checked}
            onClick={() => setChecked(!checked)}
          />
          <span>Exclude Hyphens</span>
        </FilterCheckbox>
        <FilterCheckbox htmlFor={"accepts-offers-checkbox"}>
          <BCheckbox
            id={"accepts-offers-checkbox"}
            checked={!checked}
            onClick={() => setChecked(!checked)}
          />
          <span>Exclude Single Emoji</span>
        </FilterCheckbox>
        <FilterCheckbox htmlFor={"accepts-offers-checkbox"}>
          <BCheckbox
            id={"accepts-offers-checkbox"}
            checked={!checked}
            onClick={() => setChecked(!checked)}
          />
          <span>Exclude Underscores</span>
        </FilterCheckbox>
      </FilterCheckboxes>
    </Wrapper>
  )
}
