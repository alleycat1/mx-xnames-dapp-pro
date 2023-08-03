import { FC } from "react"
import { FieldProps, useField } from "formik"

import { BCheckbox } from "app/components/common/BCheckbox"

interface Props {
  checked: boolean
}

export const FormikBChekbox: FC<FieldProps & Props> = ({ field, ...rest }) => {
  const [, , helpers] = useField(field.name)

  const { setValue } = helpers

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(!field.value)
  }

  return (
    <BCheckbox
      {...rest} // includes any Checkbox specific props
      {...field} // includes all props contributed by the Formik Field/FastField
      id={field.name}
      checked={field.value}
      onClick={handleClick}
    />
  )
}
