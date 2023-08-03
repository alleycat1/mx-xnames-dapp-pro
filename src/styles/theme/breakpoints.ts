export interface breakpointsProps {
  sm?: string
  md?: string
  lg?: string
  xl?: string
}

// theme.js
export const breakpoints: string[] & breakpointsProps = [
  "600px",
  "960px",
  "1280px",
  "1920px",
]

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]
