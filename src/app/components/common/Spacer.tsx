import styled, { css } from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"

/**
 * vSpace or hSpace values will be used with CssVariables spacing
 */

export const Spacer = styled.div<{
  vSpace?: CssVariables
  hSpace?: CssVariables
}>`
  ${({ vSpace }) =>
    vSpace &&
    css`
      height: ${vSpace};
      ${media.lg`
        height: calc(${vSpace} / 1.1);
      `}
      ${media.md`
        height: calc(${vSpace} / 1.3);
      `}
      ${media.sm`
        height: calc(${vSpace} / 1.5);
      `}
    `}
  ${({ hSpace }) =>
    hSpace &&
    css`
      width: ${hSpace};
      ${media.lg`
        width: calc(${hSpace} / 1.1);
      `}
      ${media.md`
        width: calc(${hSpace} / 1.3);
      `}
      ${media.sm`
        width: calc(${hSpace} / 1.5);
      `}
    `}
`
