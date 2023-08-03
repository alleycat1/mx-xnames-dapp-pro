import styled from "styled-components"
import { Text } from "app/components/Text"
import { CssVariables } from "styles/glob-styles"
import { addressMinimizer } from "utils/formatters"
import { Like } from "./Like"
import { useState } from "react"

export const CardBottom = () => {
  const [liked, setLiked] = useState(false)

  const handleToggle = () => {
    setLiked(!liked)
  }

  return (
    <Wrapper>
      <Group>
        <Address
          type="p14m"
          content={addressMinimizer("jj739lkdmhs6772hdns72j")}
          color={CssVariables.Neutral300}
          mb={4}
        />
        <Status
          type="p12s"
          content="Available"
          color={CssVariables.Neutral500}
        />
      </Group>

      <Like liked={liked} onClick={handleToggle} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${CssVariables.Black};
  height: 68px;
  padding: 16px;
`

const Group = styled.div``

const Address = styled(Text)``

const Status = styled(Text)``
