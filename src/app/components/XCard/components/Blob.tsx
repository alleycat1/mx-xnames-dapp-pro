import styled from "styled-components"
import stc from "string-to-color"
import { BlobLg } from "./BlobLg"
import { BlobSm } from "./BlobSm"
import { XCardTopProps } from "../type"

export const XBlob = ({ name, blobSize = "sm" }: XCardTopProps) => {
  const color = stc(name)

  const Blob = blobSize === "lg" ? BlobLg : BlobSm

  return (
    <Wrapper>
      <Blob color={color} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 100%;
`
