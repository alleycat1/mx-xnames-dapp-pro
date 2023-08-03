import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const Input = styled.input`
  box-sizing: border-box;
  height: 56px;
  width: 200px;
  border-radius: 6px;
  padding: 8px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  border: none;
  background-color: ${CssVariables.Neutral900};
  border: 3px solid ${CssVariables.Neutral900};
  color: ${CssVariables.Neutral500};
  outline: none;

  transition: 0.4s ease-in-out;

  &::placeholder {
    color: ${CssVariables.Neutral500};
  }

  &[disabled="true"] {
    border-color: ${CssVariables.Neutral900};
    background-color: ${CssVariables.Neutral800};
  }

  &[error="true"] {
    border-color: ${CssVariables.Red400};
  }

  &:hover {
    border-color: ${CssVariables.Teal900};
  }

  &:focus {
    border-color: ${CssVariables.Teal600};
  }

  /* &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: ${CssVariables.Neutral500};
    -webkit-box-shadow: 0 0 0px 1000px ${CssVariables.White} inset;
    box-shadow: 0 0 0px 1000px ${CssVariables.White} inset;
  } */
`
