import { Text } from "app/components/Text"
import { ReactNode } from "react"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { jmedia } from "styles/media"

interface Props {
  records: [ReactNode, ReactNode][]
}

export const RecordPanel = ({ records, ...rest }: Props) => {
  return (
    <Stack {...rest}>
      {records.map((item, idx) => (
        <Group key={idx}>
          <Text
            type="p14s"
            content={item[0]}
            render="div"
            ta="r"
            width="100px"
            color={CssVariables.Neutral400}
          />

          <Text
            type="p14s"
            content={item[1]}
            render="div"
            color={CssVariables.Neutral400}
          />
        </Group>
      ))}
    </Stack>
  )
}

const Stack = styled.div``

const Group = styled.div`
  display: flex;
  gap: 20px;
  height: 58px;
  padding: 16px 0px 17px 40px;
  border-block: 1px solid ${CssVariables.Neutral800};

  &:first-child {
    border-block-start: none;
  }

  ${jmedia.sm} {
    padding-inline-start: 0;
  }
`
