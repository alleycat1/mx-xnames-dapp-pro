import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { Text } from "app/components/Text"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const TopRightInfo = () => {
  return (
    <Wrapper>
      <Title type="p18m" content="Buy Now" />

      <Text
        type="p16s"
        content="Current Price"
        color={CssVariables.Neutral400}
      />

      <Group>
        <FontAwesomeIcon
          icon="fa-regular fa-money-bills"
          flip="horizontal"
          size="lg"
        />

        <Stack>
          <Text type="p14r" content="Own for 1 year for" mb="5px" />
          <Text type="p18m" content="$30 (53.893 EGLD)" />
        </Stack>
      </Group>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 190px;
  padding: 24px;
  border-radius: 12px;
  background-color: ${CssVariables.Neutral0};
`

const Title = styled(Text)``

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${CssVariables.Neutral50};
  margin-top: auto;
`

const Stack = styled.div``
