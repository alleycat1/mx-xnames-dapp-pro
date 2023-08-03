import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { Text } from "app/components/Text"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const IsAvailable = () => {
  return (
    <Content type="h32m" render="div" color={CssVariables.Green}>
      <FontAwesomeIcon icon="fa-solid fa-circle-check" />
      <span>Is Available!</span>
    </Content>
  )
}

const Content = styled(Text)`
  display: flex;
  align-items: center;
  gap: 10px;
`
