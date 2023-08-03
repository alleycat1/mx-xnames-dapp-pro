import { FC } from "react"
import { MenuItem, Select, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { CssVariables } from "styles/glob-styles"
import styled from "styled-components"

interface Props {
  options: string[]
  value?: string
  onChange: (value: string) => void
}

export const BAutoComplete: FC<Props> = ({ options, onChange, value }) => {
  const classes = useStyles()

  return (
    <Select
      classes={{
        root: classes.dropdown,
        icon: classes.icon,
        select: classes.paper,
      }}
      value={value ?? options[0]}
      onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
        onChange(event.target.value as string)
      }}
      disableUnderline
      MenuProps={{
        classes: { paper: classes.paper },
      }}
      IconComponent={() => <ChevronDownIcon />}
    >
      {options.map((item) => (
        <MenuItem value={item}>{item}</MenuItem>
      ))}
    </Select>
  )
}

const useStyles = makeStyles({
  dropdown: {
    background: CssVariables.Black,
    borderRadius: "8px",
    padding: "10px 38px 10px 10px !important",
    border: `1px solid ${CssVariables.GrayWhite}`,
    color: CssVariables.White as string,

    "&:focus": {
      borderRadius: "8px",
    },

    "& .MuiFormLabel-root": {
      color: CssVariables.White as string,
    },
    "& svg": {
      width: "24px",
      height: "24px",
      right: "10px",
      color: CssVariables.White as string,
    },
  },
  icon: {
    width: "24px",
    height: "24px",
    right: "10px",
    color: CssVariables.White as string,
  },
  paper: {
    color: CssVariables.White as string,
    background: CssVariables.Black,
  },
})

const ChevronDownIcon = styled("div")`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 10px;
  path {
    fill: ${CssVariables.White};
  }
`
