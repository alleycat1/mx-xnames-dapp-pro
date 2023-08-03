import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { fontFamily } from "app/components/Text/config"
import { media } from "styles/media"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 27px;
  max-width: 255px;
  width: 100%;
  background-color: ${CssVariables.Neutral900};
  border-radius: 16px;
  padding: 16px;
  ${media.md`
    display: none;
  `}
`

export const FilterCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 8px;
`

export const FilterCheckbox = styled.label`
  display: flex;
  align-items: center;
  column-gap: 12px;

  font-size: 12px;
  font-weight: 400;
  font-family: ${fontFamily.inter};
  color: ${CssVariables.Neutral500};

  &:focus {
    border: 5px solid #eee;
  }

  span {
    margin-bottom: -3px;
  }
`
export const FilterInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 18px;
  padding: 12px;
  background-color: ${CssVariables.Black};
  border-radius: 12px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`

export const FilterInputTitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: ${CssVariables.Neutral400};
  font-family: ${fontFamily.inter};
`

export const FilterPriceInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8.5px 16px;
  background-color: ${CssVariables.Neutral900};
  border-radius: 16px;

  input {
    background: none;
    border: none;
    outline: none;
    color: ${CssVariables.White};
    font-weight: 600;

    &::placeholder {
      font-weight: ${({ fontWeight }: { fontWeight?: number }) =>
        fontWeight || 600};
    }
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  span {
    color: ${CssVariables.Neutral400};
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
  }
`

export const NameType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: none;
    border: none;
  }
`

export const NameTypeText = styled.div`
  font-family: ${fontFamily.inter};
  font-weight: 500;
  font-size: 14px;
  color: ${CssVariables.Neutral100};
`
