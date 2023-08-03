import { Text } from "app/components/Text"
import styled from "styled-components"
import { RecordPanel } from "../../../RecordPanel"
import { CssVariables } from "styles/glob-styles"
import { ShortenText } from "app/components/ShortenText"
import { Coin } from "../components/Coin"
import { EditButton } from "../components/EditButton"

export const TRWallets = () => {
  return (
    <Wrapper>
      <Group>
        <Stack>
          <Title type="p16m" content="Wallets" mb="15px" />

          <Text
            type="p14s"
            content="Add Crypto address to receive payment"
            color={CssVariables.Neutral400}
          />
        </Stack>

        <EditButton />
      </Group>

      <RecordPanel
        records={[
          [
            <Coin name="EGLD" image="" />,
            <ShortenText
              text="erd1ly7q2w6e6dhtryg32fang2wmhx9zqq3tv33jz6m3m3kltmqhkfcq7tftz3"
              maxChar={{ sm: 20 }}
            />,
          ],
          [<Coin name="BTC" image="" />, "Not Set"],
          [
            <Coin name="ETH" image="" />,
            <ShortenText
              text="erd1ly7q2w6e6dhtryg32fang2wmhx9zqq3tv33jz6m3m3kltmqhkfcq7tftz3"
              maxChar={{ sm: 20 }}
            />,
          ],
        ]}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const Title = styled(Text)``

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-end: 30px;
`

const Stack = styled.div``
