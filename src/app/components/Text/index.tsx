import { FC } from "react"
import styled from "styled-components"
import { layout, space, color, typography, border } from "styled-system"
import { WithWrapper } from "../WithWrapper"
import { usePropReducer } from "./hook"
import { TextProps } from "./type"
import { textElementConfig } from "./utilities"

export const Text: FC<TextProps> = (props) => {
  let { children, content, withWrapper, ...rest } = props

  children = content ?? children

  rest = usePropReducer(rest)

  if (rest.dangerouslySetInnerHTML) {
    rest.dangerouslySetInnerHTML = {
      __html: rest.dangerouslySetInnerHTML,
    } as any
  }

  if (withWrapper) {
    // GSAP has a problem animating a heading element. That's why I created this option to conditionally wrap it in a div.
    return (
      <WithWrapper wrapperProps={withWrapper}>
        <TextElement {...rest}>{children}</TextElement>
      </WithWrapper>
    )
  }

  return <TextElement {...rest}>{children}</TextElement>
}

export const TextElement = styled.p.attrs(textElementConfig)`
  margin: 0;

  ${typography};
  ${layout};
  ${space};
  ${color};
  ${border};
`
