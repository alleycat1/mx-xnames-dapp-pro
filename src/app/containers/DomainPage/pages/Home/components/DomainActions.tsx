import styled from "styled-components"
import { RegisterAction } from "../actions/register"
import { GiftAction } from "../actions/gift"
import { jmedia } from "styles/media"
import { useParams } from "react-router-dom"
// import { PurchaseAction } from "../actions/purchase"
// import { MakeOfferAction } from "../actions/makeOffer"
// import { SellAction } from "../actions/sell"
// import { TransferAction } from "../actions/transfer"

interface Props {
  name: string
}
export const DomainActions = (props: Props) => {
  const { name } = props

  return (
    <Wrapper>
      <RegisterAction name={name} />
      <GiftAction name={name} />

      {/* <PurchaseAction />
      <MakeOfferAction />

      <SellAction />
      <TransferAction /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;

  & > * {
    flex-basis: 46%;
    flex-grow: 1;
  }

  ${jmedia.sm} {
    & > * {
      flex-basis: 100%;
    }
  }
`
