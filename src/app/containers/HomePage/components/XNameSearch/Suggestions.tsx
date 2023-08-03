import { FC } from "react"
import { DropdownAnimation } from "app/components/Animation"
import { Badge } from "app/components/Badge"
import { Text } from "app/components/Text"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { jmedia } from "styles/media"
import { BadgeType } from "types"

export type SuggestionOption = {
  name: string
  status: "available" | "registered" | "taken" | "invalid"
}

interface SuggestionsProps {
  options: SuggestionOption[]
  query: string
}

export const Suggestions: FC<SuggestionsProps> = ({ options, query }) => {
  const reveal = !!query
  const isEmpty = !!query && options.length === 0
  const emptyContent = "No name found."

  const getBadge = (status: string): BadgeType => {
    if (status === "available") return "warning"
    else if (status === "registered") return "success"
    else return "warning"
  }

  return (
    <Wrapper {...{ reveal, isEmpty, emptyContent }}>
      {options.map((item, idx) => (
        <Option key={idx} type="p14r" color={CssVariables.White} mb="0">
          <span>{item.name}</span>
          <Badge content={item.status} type={getBadge(item.status)} />
        </Option>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled(DropdownAnimation)`
  position: absolute;
  top: calc(100% + 5px);
  width: min(400px, 100%);
  min-height: 80px;
  max-height: 250px;
  border-radius: 10px;
  overflow-y: auto;
  border: 1px solid ${CssVariables.Neutral800};
  background-color: ${CssVariables.Neutral900};

  ${jmedia.sm} {
    top: calc(50% + 5px);
    border-radius: 0;
  }
`

const Option = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
