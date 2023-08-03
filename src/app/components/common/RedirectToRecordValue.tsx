import { DataValue } from "app/types"
import { FC } from "react"
import styled from "styled-components"

interface Props {
  address: string
  type: DataValue
  name: string
}

const linkConvertor = (name: string, address: string): string => {
  switch (name) {
    case "ethereum":
      return `https://etherscan.io/address/${address}`
    case "solana":
      return `https://solscan.io/account/${address}`

    default:
      return address
  }
}

export const RedirectToRecordValue: FC<Props> = ({
  address,
  type,
  name,
  children,
}) => {
  let url = linkConvertor(name, address)

  if (
    (type !== DataValue.ADDRESS && type !== DataValue.URL) ||
    name === "email"
  ) {
    return <></>
  }

  return (
    <StyledLink onClick={() => window.open(url, "_blank")}>
      {children}
    </StyledLink>
  )
}

const StyledLink = styled.div`
  cursor: pointer;
`
