import { XIcon, XIconProps } from "images/styledImages/XIcon"
import styled from "styled-components"
import { XCardTopProps } from "../type"

export const Icon = (props: XCardTopProps) => {
  let xProps = {}

  if (props.blobSize !== "lg") {
    xProps = {
      width: "16.71",
      height: "12.57",
    }
  }

  return (
    <Wrapper>
      <XIcon {...xProps} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-left: auto;
`
