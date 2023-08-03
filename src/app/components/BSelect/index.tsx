import styled from "styled-components"
import { CSSProperties, FC, ReactElement } from "react"
import { MenuItem } from "@material-ui/core"
import { StyledPaper, StyledSelect } from "./styles"

type Props = CSSProperties & {
  options: ReactElement[]
  value?: number
  onChange?: (value: number) => void
}

export const BSelect: FC<Props> = ({
  options,
  onChange,
  value = 0,
  ...props
}) => {
  return (
    // @ts-ignore
    <StyledSelect
      value={value}
      disableUnderline
      MenuProps={{
        anchorOrigin: { vertical: "bottom", horizontal: "left" },
        getContentAnchorEl: null,
        PaperProps: {
          component: StyledPaper,
        },
      }}
      onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
        onChange && onChange(event.target.value as number)
      }}
      {...props}
    >
      {options.map((item, index) => (
        <MenuItem
          key={index}
          value={index}
          style={{
            display: index === value ? "none" : "block",
            padding: 0,
          }}
        >
          {item}
        </MenuItem>
      ))}
    </StyledSelect>
  )
}

export const OptionItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  padding: 6px 16px;
`

export const OptionImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`
