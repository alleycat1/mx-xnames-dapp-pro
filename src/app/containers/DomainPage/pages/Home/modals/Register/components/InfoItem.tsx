import { Text } from "app/components/Text"
import { ReactNode } from "react"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

type Props = {
  content: [ReactNode, ReactNode]
}

export const RegInfoItem = ({ content }: Props) => {
  const [first, last] = content

  return (
    <ItemWrapper>
      <Text
        type="p14s"
        render="div"
        content={first}
        color={CssVariables.Neutral400}
      />

      <Text
        type="p14m"
        render="div"
        content={last}
        color={CssVariables.Neutral200}
        minWidth="109px"
      />
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
