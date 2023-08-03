import { FC, useState } from "react"
import { FieldProps, getIn } from "formik"
import { TextFieldProps, TextField } from "@material-ui/core"
import EyeIcon from "images/styledImages/EyeIcon"
import CrossedEyeIcon from "images/styledImages/CrossedEyeIcon"
import { PickerWrapper, StyledTextField, useStyles, Wrapper } from "./style"
import { CssVariables } from "styles/glob-styles"

export const FormInput: FC<FieldProps & TextFieldProps> = (props) => {
  const isTouched = getIn(props.form.touched, props.field.name)
  const errorMessage = getIn(props.form.errors, props.field.name)

  const { error, helperText, type = "text", field, form, ...rest } = props

  const [canPick, setCanPick] = useState(false)

  const classes = useStyles()

  return (
    <Wrapper>
      <StyledTextField
        classes={{ root: classes.input }}
        className={type === "password" ? "password" : ""}
        variant="outlined"
        error={error ?? Boolean(isTouched && errorMessage)}
        helperText={
          helperText ?? (isTouched && errorMessage ? errorMessage : undefined)
        }
        autoComplete="off"
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
