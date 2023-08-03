import { FC, ReactNode } from "react"
import styled from "styled-components"
import { layout, LayoutProps } from "styled-system"
import useDevice from "hooks/useDevice2"
import { ResponsiveProp } from "./Text/type"
import { reduceProp } from "./Text/utilities"

export type WithWrapperProps = FullWrapperProps | boolean

interface FullWrapperProps extends LayoutProps {
  className?: string
  width?: string | ResponsiveProp<string>
}

interface InternalProps extends Omit<FullWrapperProps, "width"> {
  width: string
}

interface Props {
  children?: ReactNode
  wrapperProps?: WithWrapperProps
}

export const WithWrapper: FC<Props> = ({ children, wrapperProps }) => {
  // const props = typeof wrapperProps === "object" ? wrapperProps : {}

  const props = useGetResponsive(wrapperProps ?? {})

  return <Wrapper {...props}>{children}</Wrapper>
}

const Wrapper = styled.div`
  ${layout};
`

export const useGetResponsive = (props: WithWrapperProps): InternalProps => {
  const { isXSmall, isSmall, isMedium } = useDevice()

  if (typeof props !== "object") return {} as InternalProps

  const doPropReduction = (prop: any) =>
    reduceProp({ isXSmall, isSmall, isMedium }, prop)[0]

  return {
    ...props,
    width: doPropReduction(props.width),
  }
}
