import { XCardTop } from "app/components/XCard"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { TopLeftInfo } from "./TopLeftInfo"
import { jmedia } from "styles/media"

interface Props {
  name: string
}

export const TopLeft = (props: Props) => {
  const { name } = props
  return (
    <Wrapper>
      <Card
        name={name}
        blobSize="lg"
        nameConfig={{ type: "h48m" }}
        suffixConfig={{ type: "h40m" }}
      />
      <LineBreak />
      <TopLeftInfo />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  align-content: space-between;
  border: 1px solid ${CssVariables.Neutral800};
  min-height: 703px;
  /* width: 522px; */
  border-radius: 12px;
  padding: 16px 20px;

  ${jmedia.sm} {
    padding: 0;
    border: none;
  }
`

const Card = styled(XCardTop)`
  && {
    height: 479px;
    border-radius: 12px;
    padding: 47px 39px;
    border: 1px solid ${CssVariables.Neutral800};
  }
`

const LineBreak = styled.div`
  border: 2px solid ${CssVariables.Neutral800};
  height: 0;
`
