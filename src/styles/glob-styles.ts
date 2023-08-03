import { createGlobalStyle } from "styled-components"

export enum CssVariables {
  /* Here starts cns colors */

  //   Constant Colors
  Cyan = "var(--cyan)",
  Cyan2 = "var(--cyan2)",
  CyanHover = "var(--cyanHover)",

  Purple = "var(--purple)",
  Black = "var(--black)",
  White = "var(--white)",
  GrayWhite = "var(--graywhite)",
  Orange = "var(--orange)",

  Green = "var(--green)",
  Green400 = "var(--green400)",
  Green500 = "var(--green500)",

  Yellow = "var(--yellow)",
  Yellow400 = "var(--yellow400)",
  Yellow500 = "var(--yellow500)",

  Red400 = "var(--red400)",
  Red500 = "var(--red500)",

  Light200 = "var(--light200)",

  Teal600 = "var(--teal600)",
  Teal900 = "var(--teal900)",

  Shades200 = "var(--shades200)",

  Gradient1 = "var(--gradient1)",

  // Variable Colors
  Neutral0 = "var(--neutral0)",
  Neutral50 = "var(--neutral50)",
  Neutral100 = "var(--neutral100)",
  Neutral200 = "var(--neutral200)",
  Neutral300 = "var(--neutral300)",
  Neutral400 = "var(--neutral400)",
  Neutral500 = "var(--neutral500)",
  Neutral600 = "var(--neutral600)",
  Neutral700 = "var(--neutral700)",
  Neutral800 = "var(--neutral800)",
  Neutral900 = "var(--neutral900)",

  // Colors not included in the style guide.

  Color1 = "var(--color1)",

  //   Spacing margins

  Space8 = "8px",
  Space16 = "16px",
  Space24 = "24px",
  Space32 = "32px",
  Space40 = "40px",
  Space56 = "56px",
  Space72 = "72px",
  Space80 = "80px",
  Space96 = "96px",
  Space120 = "120px",

  ZIndexModal = "100",
}

export const GlobalStyle = createGlobalStyle`
:root {
    /* Constant Color Codes */
    --cyan: #23F7DD;
    --cyan2: #99F6E4;
    --cyanHover: #09E5CA;
    
    --purple: #9664F7;
    --black: #000000;
    --graywhite: #F5F7F9;
    --white: #FFFFFF;
    --orange: #FB923C;
    
    --red400: #F87171;
    --red500: #DC2626;
    
    --green: #12A366;
    --green400: #4ADE80;
    --green500: #22C55E;
    
    --yellow: #FBC63C;
    --yellow400: #FACC15;
    --yellow500: #EAB308;

    --teal600: #099887;
    --teal900: #134E48;

    --shades200: #87EEC7;

    --light200: #FAFBFC;

    --gradient1: linear-gradient(221.4deg, #23FF7B 11.22%, #23FF7B 11.22%, #23FF7B 32.71%, #34B1CD 49.01%, #A855FF 62.38%, #DA45FF 90.08%);

    /* Dark Mode Variable Color Codes */
    --neutral0: #000000;
    --neutral50: #FFFFFF;
    --neutral100: #F5F5F5;
    --neutral200: #E5E5E5;
    --neutral300: #D4D4D4;
    --neutral400: #A3A3A3;
    --neutral500: #737373;
    --neutral600: #525252;
    --neutral700: #404040;
    --neutral800: #262626;
    --neutral900: #171717;

    --color1: #121212;

    .light {
        /* Light Mode Variable Color Codes */
        /* Note: Light Mode Colors will go here.. */
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    color: var(--neutral50);
    background-color: var(--neutral900);
    font-family: "Inter", sans-serif;
  }

  a {
    text-decoration: none;
  }

  a {
      text-decoration: none;
  }

  ul {
      list-style: none;
  }

  ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
  }

  /*vertical Track */

  ::-webkit-scrollbar-track:vertical {
      /* box-shadow: inset 0 0 3px grey; */
    border-radius: 10px;
    /* background-color: var(--black); */

  }

  /*vertical Handle */

  ::-webkit-scrollbar-thumb:vertical {
      border-radius: 10px;
      background-color: var(--cyan);
  }

  /*horizontal Track */

  ::-webkit-scrollbar-track:horizontal {
      /* box-shadow: inset 0 0 3px grey; */
      background-color: var(--cyan);
      border-radius: 10px;
  }

  /*horizontal Handle */

  ::-webkit-scrollbar-thumb:horizontal {
      background: var(--black);
      border-radius: 10px;
  }

  /* Handle on hover */

  ::-webkit-scrollbar-thumb:hover {
      /* background: var(--black); */
  }

  ::selection {
      background: var(--orange);
      color: var(--white);
  }

  ::-moz-selection {
      background: var(--orange);
      color: var(--white);
  }

  * {
      scrollbar-width: thin;
  }

  .dapp-core-component__dappModalStyles__dappModalBody {
    background-color: var(--black);
  }

  .dapp-core-component__dappModalStyles__dappModalCloseButton {
    background-color: var(--black);
  }

  .dapp-core-component__main__icon-state svg path {
    color: var(--cyan);
  }

  .dapp-core-component__main__btn-primary {
    background-color: var(--cyan);
    border: var(--cyan);
    &:hover {
      background-color: var(--cyan);
    }
  }
  .dapp-transaction-toast{
    background-color: var(--neutral500) !important;
  }
`
