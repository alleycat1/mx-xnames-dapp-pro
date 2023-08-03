import styled from "styled-components"
import { Text } from "app/components/Text"
import { FC } from "react"
import { XCardTopProps } from "../type"
import { CssVariables } from "styles/glob-styles"
import { XBlob } from "./Blob"
import { Icon } from "./Icon"

export const CardTop: FC<XCardTopProps> = ({
  nameConfig,
  suffixConfig,
  ...props
}) => {
  const { name } = props

  return (
    <Wrapper {...props}>
      <XBlob {...props} />

      <Icon {...props} />

      <DomainName type="h24m" content={name} mt="auto" {...nameConfig} />

      <DomainSuffix type="p16m" content=".x" {...suffixConfig} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    z-index: -4;
    background-color: ${CssVariables.Neutral900};
    inset: 0;
    border-radius: inherit;
  }

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 189px;
  padding: 16px;
`

const DomainName = styled(Text)``

const DomainSuffix = styled(Text)``
