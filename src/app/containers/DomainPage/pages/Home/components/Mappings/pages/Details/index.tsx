import { Text } from "app/components/Text"
import styled from "styled-components"
import { RecordPanel } from "../../RecordPanel"
import { ShortenText } from "app/components/ShortenText"
import { TooltipText } from "app/components/TooltipText"

export const MappingDetails = () => {
  const registrant = (
    <StyledTooltipText
      content="Registrant"
      tooltip={{ content: "Registrant" }}
    />
  )

  const tokenId = <StyledTooltipText content="Token ID" />

  return (
    <Wrapper>
      <Title
        type="p18m"
        content="Domain Information"
        mb="60px"
        ml={{ sm: "20px" }}
      />

      <RecordPanel
        records={[
          ["Parent", "XName"],
          ["Domain Name", "Dana.x"],
          [
            "Owner",
            <ShortenText
              text="erd1ly7q2w6e6dhtryg32fang2wmhx9zqq3tv33jz6m3m3kltmqhkfcq7tftz3"
              maxChar={{ sm: 20 }}
            />,
          ],
          [registrant, "0X782HDghe8HjJWQp"],
          [tokenId, "0X782HDghe8HjJWQp"],
          ["Resolver", "Default Resolver"],
          ["Expiration date ", "45 days 18 hrs (Feb 23, 2023 17:18:12 UTC)"],
        ]}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const Title = styled(Text)``

const StyledTooltipText = styled(TooltipText)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`
