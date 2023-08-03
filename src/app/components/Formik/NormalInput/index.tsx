import { FC, useState } from "react"
import { PickerWrapper, Wrapper } from "./style"
import { NormalInput } from "../../Inputs"
import { TextFieldProps } from "@material-ui/core"
import { FieldProps, getIn } from "formik"

import EyeIcon from "images/styledImages/EyeIcon"
import CrossedEyeIcon from "images/styledImages/CrossedEyeIcon"
import { CssVariables } from "styles/glob-styles"

interface Props {
  labelinput?: string
  endComponent?: JSX.Element
  startComponent?: JSX.Element
}

export const Input: FC<FieldProps & TextFieldProps & Props> = ({
  error,
  helperText,
  type = "text",
  field,
  form,
  labelinput,
  endComponent,
  startComponent,
  ...rest
}) => {
  const isTouched = getIn(form.touched, field.name)
  const errorMessage = getIn(form.errors, field.name)

  const [canPick, setCanPick] = useState(false)

  return (
    <Wrapper>
      <NormalInput
        variant="outlined"
        error={error ?? Boolean(isTouched && errorMessage)}
        helperText={
          helperText ?? (isTouched && errorMessage ? errorMessage : undefined)
        }
        InputProps={{
          startAdornment: startComponent,
          endAdornment: endComponent,
        }}
        type={
          type === "password" && !canPick
            ? "password"
            : type !== "password"
            ? type
            : "text"
        }
        {...rest} // includes any Material-UI specific props
        {...field} // includes all props contributed by the Formik Field/FastField
      />
      {type === "password" && (
        <PickerWrapper
          onClick={() => {
            setCanPick(!canPick)
          }}
        >
          {canPick === false ? (
            <EyeIcon color={CssVariables.White} />
          ) : (
            <CrossedEyeIcon color={CssVariables.White} />
          )}
        </PickerWrapper>
      )}
    </Wrapper>
  )
}
