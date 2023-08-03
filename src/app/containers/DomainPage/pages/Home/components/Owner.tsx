import { Text } from "app/components/Text"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
// import { addressMinimizer } from "utils/formatters"

export const Owner = () => {
  return (
    <Group>
      <Avatar>AVT</Avatar>

      <Stack>
        <Text type="p14r" content="Listed by" mb="5px" />
        <Text type="p18m" content="XNS: X-Name System" />
      </Stack>
    </Group>
  )
}

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${CssVariables.Neutral50};
`

const Stack = styled.div``

const Avatar = styled.div`
  display: grid;
  place-items: center;
  height: 46px;
  width: 46px;
  border-radius: 50%;
  border: 2px solid ${CssVariables.Cyan};
`
