import { DropdownAnimation } from "app/components/Animation"
import { Text } from "app/components/Text"
import { FC } from "react"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { SortOption } from "types"
import { Config } from "./type"
import { layout } from "styled-system"

interface Props {
  reveal: boolean
  options: SortOption[]
  onChange: (value: SortOption) => void
  config?: Config
}

export const SortOptions: FC<Props> = ({ reveal, options, onChange }) => {
  return (
    <Wrapper reveal={reveal}>
      {options.map((item, idx) => (
        <Option
          key={idx}
          type="p14r"
          color={CssVariables.White}
          mb="0"
          content={item.label}
          onClick={() => onChange(item)}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled(DropdownAnimation)`
  position: absolute;
  top: calc(100% + 5px);
  width: 100%;
  min-height: 100px;
  max-height: 250px;
  border-radius: 6px;
  overflow-y: auto;
  border: 1px solid ${CssVariables.Neutral800};
  background-color: ${CssVariables.Neutral900};

  ${layout}
`

const Option = styled(Text)`
  height: 42px;
  width: 100%;
  padding: 9px 32px;
  background-color: inherit;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${CssVariables.Neutral800};
  }
`
