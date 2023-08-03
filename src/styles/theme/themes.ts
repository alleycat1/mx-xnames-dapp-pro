import { breakpoints } from "./breakpoints"

const defaultTheme = {
  breakpoints,
}

const lightTheme = {
  text: "rgba(58,52,51,1)",
  textSecondary: "rgba(58,52,51,0.7)",
  background: "rgba(255,255,255,1)",
  backgroundVariant: "rgba(251,249,249,1)",
  border: "rgba(58,52,51,0.12)",
  borderLight: "rgba(58,52,51,0.05)",
  red: "#E64141",
  blackText: "#323a46",
  greyBackground: "#f0f1f3",
  white: "#ffffff",
  greyHead: "#F8F8F8",
  textGrey: "#818181",
  oddRows: "#F8F8F8",
  lightBlue: "#F9FAFE",
  darkGrey: "#C1C1C1",
  textBlue: "#396DE0",
  primary: "#396DE0",
  green: "#1BA160",
  navBackground: "#38414A",
  colors: {
    primary: "#396DE0",
    lightGrey: "#D8D8D8",
  },
  ...defaultTheme,
}

const darkTheme: Theme = {
  text: "rgba(241,233,231,1)",
  textSecondary: "rgba(241,233,231,0.6)",
  background: "rgba(0,0,0,1)",
  backgroundVariant: "rgba(28,26,26,1)",
  border: "rgba(241,233,231,0.15)",
  borderLight: "rgba(241,233,231,0.05)",
  red: "#E64141",
  blackText: "#F2F2F2",
  greyBackground: "#292A2C",
  white: "#1C1C21",
  greyHead: "#16161A",
  textGrey: "#BFBFBF",
  oddRows: "#16161A",
  lightBlue: "#23232B",
  darkGrey: "#525252",
  textBlue: "#00A7FF",
  green: "#1BA160",
  primary: "#396DE0",
  navBackground: "#38414A",
  colors: {
    primary: "#231312",
    lightGrey: " #313131",
  },
  ...defaultTheme,
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}
