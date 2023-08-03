/*
 * Media queries utility
 */

import {
  css,
  DefaultTheme,
  CSSObject,
  InterpolationFunction,
  ThemedStyledProps,
  Interpolation,
  FlattenInterpolation,
} from "styled-components"

/*
 * Taken from https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32914
 */

// Update your breakpoints if you want
export const sizes = {
  /** 280px */
  xxs: 280,

  /** 360px */
  xs: 360,

  /** 700px */
  sm: 700,

  /** 960px */
  md: 960,

  /** 1280px */
  lg: 1280,

  /** 1920px */
  xl: 1920,
}

// Iterate through the sizes and create a media template
export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (max-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `

    return acc
  },
  {} as { [key in keyof typeof sizes]: MediaFunction }
)

/*
 * @types/styled-component is not working properly as explained in the github issue referenced above.
 * We must overcome this with custom typings, however, this might not work in time as the styled-components update.
 * Be carefull and keep an eye on the issue and the possible improvements
 */
type MediaFunction = <P extends object>(
  first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
  ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
) => FlattenInterpolation<ThemedStyledProps<P, DefaultTheme>>

/* Example
const SomeDiv = styled.div`
  display: flex;
  ....
  ${media.md`
    display: block
  `}
`;
*/

// For CSS
export const jmedia = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, label) => {
    acc[label] = `@media (max-width: ${sizes[label]}px)`

    return acc
  },
  {} as { [K in keyof typeof sizes]: string }
)

/**
 * How to use,
 *
 * import {media} from '...'
 *
 * ---> CSS
 * const Element = styled.div`
 *  ${media.sm} {
 *    ...
 * }
 * `
 */
