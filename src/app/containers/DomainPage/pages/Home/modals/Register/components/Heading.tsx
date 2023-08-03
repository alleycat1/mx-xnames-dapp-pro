import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { Text } from "app/components/Text"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { RegLineBreak } from "./LineBreak"

export const RegHeading = () => {
  return (
    <Header>
      <FontAwesomeIcon
        icon="fa-solid fa-circle-3"
        color={CssVariables.Neutral500 as any}
        size="lg"
      />

      <Text
        type="p14s"
        content="Review your purchase"
        color={CssVariables.Neutral50}
        m="5px 0 3px 0"
      />

      <RegLineBreak />
    </Header>
  )
}

const Header = styled.div`
  margin-bottom: 10px;
`
