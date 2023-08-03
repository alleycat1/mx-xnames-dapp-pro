import { Text } from "app/components/Text"
import styled from "styled-components"

interface Props {
  name: string
  image: string
}

export const Coin = ({ name, image }: Props) => {
  return (
    <Content type="p16m" render="div">
      <Img src={image} alt="" />
      <span>{name}</span>
    </Content>
  )
}

const Content = styled(Text)`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Img = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid white;
`
