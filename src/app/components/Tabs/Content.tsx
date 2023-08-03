import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { TabStylesConfig, TabsProps } from "./types"
import { TabItem } from "./Item"

export const Tabs = ({ list, className, ...rest }: TabsProps) => {
  rest.tabStyle = mergeStyles(rest.tabStyle)

  return (
    <Container>
      <Wrapper className={className}>
        {list.map((item, idx) => (
          <TabItem key={idx} tab={item} {...rest} />
        ))}
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  overflow-y: hidden;
  overflow-x: auto;
  display: flex;
  align-items: center;
  height: 48px;

  &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: none;
  }
`

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 0 20px;
  width: max-content;
  background-color: ${CssVariables.Neutral800};
  height: inherit;
`

function mergeStyles(styles?: TabStylesConfig): TabStylesConfig {
  return {
    default: {
      color: CssVariables.Cyan2,
      minWidth: "max-content",
      ...styles?.default,
    },
    selected: {
      bg: CssVariables.Neutral0,
      color: CssVariables.Neutral50,
      ...styles?.selected,
    },
    hover: {
      ...styles?.hover,
    },
  }
}
