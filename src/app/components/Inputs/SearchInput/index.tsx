import { FC } from "react"
import { StyledSearchInput } from "./style"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { TextFieldProps } from "@material-ui/core"
import { Spacer } from "app/components/common/Spacer"
import { CssVariables } from "styles/glob-styles"

export const SearchInput: FC<TextFieldProps> = ({ ...props }) => {
  return (
    <StyledSearchInput
      InputProps={{
        endAdornment: (
          <>
            <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" />
            <Spacer hSpace={CssVariables.Space24} />
          </>
        ),
      }}
      {...props}
    />
  )
}
