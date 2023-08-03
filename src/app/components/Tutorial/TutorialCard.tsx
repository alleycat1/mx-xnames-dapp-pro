import { Text } from "app/components/Text"
import { FC } from "react"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

interface Props {
  count: number
  title: string
  text: string
}

export const TutorialCard: FC<Props> = ({ count, title, text }) => {
  return (
    <Wrapper>
      <Content>
        <Count
          type="p14s"
          content={count}
          color={CssVariables.Neutral0}
          mb="15px"
        />

        <Title
          type="h24m"
          content={title}
          color={CssVariables.Neutral50}
          mb="5px"
        />

        <Text
          type="p12s"
          content={text}
          color={CssVariables.Neutral400}
          maxw="200px"
        />
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-radius: 16px;
  background-image: linear-gradient(90deg, #23f7dd 0%, #171717 51.94%);
`

const Content = styled.div`
  padding: 24px;
  background-color: ${CssVariables.Neutral900};
  border-radius: inherit;
  margin: 1px;
  margin-left: 2px;
`

const Count = styled(Text)`
  display: grid;
  place-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${CssVariables.Neutral50};
`

const Title = styled(Text)``
