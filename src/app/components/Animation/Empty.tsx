import { FC, ReactNode } from "react"
import styled from "styled-components"
import { LayoutProps, layout } from "styled-system"

interface Props extends LayoutProps {
  children?: ReactNode
  content?: ReactNode
}

export const EmptyContentWrapper: FC<Props> = ({
  content,
  children,
  ...rest
}) => {
  return <Wrapper {...rest}>{children}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;

  ${layout};
`
