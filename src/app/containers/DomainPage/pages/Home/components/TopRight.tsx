import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { DomainActions } from "./DomainActions"
import { Text } from "app/components/Text"
import { TopRightInfo } from "./TopRightInfo"
import { IsAvailable } from "./IsAvailable"
import { Owner } from "./Owner"
import { jmedia } from "styles/media"
import { useParams } from "react-router-dom"
interface Props {
  name: string
}
export const TopRight = (props: Props) => {
  const { name } = props

  return (
    <Wrapper>
      <Stack>
        <Title
          type="h32m"
          content="The domain name"
          color={CssVariables.Neutral400}
        />

        <DomainName
          type="h56m"
          content={`${name}.x`}
          color={CssVariables.Neutral50}
          mb="10px"
        />

        <IsAvailable />
      </Stack>

      <Owner />

      <TopRightInfo />

      <LineBreak />

      <DomainActions name={name} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 30px;
  height: 644px;
  /* width: 437px; */
  background-color: ${CssVariables.Neutral900};
  border-radius: 16px;
  padding: 40px 20px;

  ${jmedia.md} {
    min-height: 644px;
  }
`

const Title = styled(Text)``

const DomainName = styled(Text)``

const LineBreak = styled.div`
  border: 2px solid ${CssVariables.Neutral800};
  height: 0;
`

const Stack = styled.div``
