import { makeStyles, TextField } from "@material-ui/core"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const useStyles = makeStyles({
  input: {
    "&.MuiFormControl-root": {
      marginBottom: "20px",
    },
    "& .MuiInputBase-root": {
      "&:hover": {
        borderRadius: 6,
      },
    },
    "& .MuiInputBase-input": {
      padding: "10px 20px",
      background: CssVariables.Black,
      border: CssVariables.Black,
      color: CssVariables.White,
      colorScheme: "dark",
      borderRadius: 6,

      "&[type='password']": {
        paddingRight: 50,
      },
      "&:-webkit-autofill": {
        boxShadow: "inset 0 0 0 35px rgb(26, 24, 66)",
      },
      "&::placeholder": {
        color: "rgba(158, 158, 158, 0.56)",
        fontSize: 14,
      },
      "&:focus": {
        borderColor: CssVariables.Black,
      },
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(59, 241, 165, 0.3)",
    },

    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },

    "& .MuiFormHelperText-root": {
      position: "absolute",
      bottom: "-22px",
      margin: "0",
      color: CssVariables.Black,
    },
    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: CssVariables.Black,
    },
  },
})

export const PickerWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 8px;
  cursor: pointer;
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

export const StyledTextField = styled(TextField)`
  border: 1px solid transparent !important;
  border-radius: 6px;

  &:hover {
    border: 1px solid ${CssVariables.GrayWhite} !important;
  }
`
