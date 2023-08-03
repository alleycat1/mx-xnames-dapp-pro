import { Spacer } from "app/components/common/Spacer"
import { FC } from "react"
import { CssVariables } from "styles/glob-styles"
import { AuctionBids } from "./components/AuctionBids"
import { AuctionContent } from "./components/AuctionContent"

interface Props {}

export const Auction: FC<Props> = () => {
  return (
    <>
      <AuctionContent />

      <Spacer vSpace={CssVariables.Space72} />

      <AuctionBids />
    </>
  )
}
