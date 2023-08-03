import { FC, ReactNode } from "react"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { space, SpaceProps, layout, LayoutProps } from "styled-system"
import { jmedia } from "styles/media"

interface Props extends SpaceProps, LayoutProps {
  children?: ReactNode
  className?: string
  fullHeight?: boolean
  render?: "main"
}

export const PageLayer: FC<Props> = ({
  children,
  render,
  fullHeight,
  ...rest
}) => {
  if (fullHeight) {
    rest.minHeight = fullHeight ? "100%" : "auto"
    render = render ?? "main"
  }

  return (
    <Layer {...rest} as={render}>
      {children}
    </Layer>
  )
}

const Layer = styled.section`
  box-sizing: border-box;
  width: 100%;
  /* max-width: 1040px; */
  border-radius: 24px;
  padding: 40px;
  margin: auto;
  background-color: ${CssVariables.Neutral0};

  ${space}
  ${layout}

  ${jmedia.md} {
    padding-inline: 20px;
    border-radius: 0;
  }

  ${jmedia.sm} {
    padding-inline: 10px;
  }
`
