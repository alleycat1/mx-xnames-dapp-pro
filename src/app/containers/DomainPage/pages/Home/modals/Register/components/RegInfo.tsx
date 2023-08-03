import styled from "styled-components"
import { RegInfoItem } from "./InfoItem"
import { TooltipText } from "app/components/TooltipText"

export const RegInfo = () => {
  const slippage = (
    <TooltipText content="Slippage (3%):" icon="fa-solid fa-circle-info" />
  )

  return (
    <Wrapper>
      <RegInfoItem content={["Annual Fee:", "$30 (~123 EGLD)"]} />
      <RegInfoItem content={[slippage, "$0.4 (~1 EGLD)"]} />
      <RegInfoItem content={["Estimated Gas Fee:", "$0.4 (~0.3 EGLD)"]} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
  height: max-content;
`
