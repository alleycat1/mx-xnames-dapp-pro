import { Text } from "app/components/Text"
import { LogoImages } from "app/constants"
import styled from "styled-components"

export const RegTitle = () => {
  return (
    <Wrapper>
      <Icon src={LogoImages.circleXIcon} alt="" />

      <Text type="h32m" content="Jamalmusa.x" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 80px;
  margin-bottom: 10px;
`

const Icon = styled.img``
