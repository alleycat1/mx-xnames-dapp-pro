import { TextField } from "@material-ui/core"
import styled, { css } from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const StyledInput = styled(TextField)<{ error?: boolean | undefined }>`
  border-radius: 4px;
  color: ${CssVariables.White};
  width: 100%;
  .MuiInputBase-input {
    height: 38px;
    padding: 0 10px 0 20px;
    font-size: 14px;
    font-weight: 400;
    color: ${CssVariables.White};
    &::placeholder {
      color: ${CssVariables.Neutral500};
    }
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  .MuiInputBase-root {
    background: ${CssVariables.Neutral900};
    border: 1px solid transparent;
    border-radius: 6px;
    &.MuiInput-underline:before,
    &.MuiInput-underline:after {
      display: none;
    }
    ${({ error = false }) =>
      error &&
      css`
        border-color: ${CssVariables.Red400};
      `}
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: ${CssVariables.Neutral900};
  }

  .MuiOutlinedInput-root {
    &.Mui-error .MuiOutlinedInput-notchedOutline {
      border-color: ${CssVariables.Red400};
    }
  }

  .MuiFormHelperText-root.Mui-error {
    color: ${CssVariables.Red400};
  }

  .MuiInputBase-adornedEnd {
    color: ${CssVariables.Neutral500};
  }
`
