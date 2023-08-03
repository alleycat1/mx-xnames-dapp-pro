import { memo } from "react"
import styled from "styled-components"

// Memoize the return JSX to animate only once.

// Animation will be implemented later.

// Is memo doesn't work, useMemo with a prop, page: number;

export const XCardAnimation = memo(() => {
  return <Wrapper></Wrapper>
})

const Wrapper = styled.div``
