import { css } from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const TabsStyles = (color?: string, tabWidth?: number) => {
  return css`
    --tabWidth: ${tabWidth ?? 100}px;
    .MuiTabs-indicator {
      min-width: var(--tabWidth) !important;
      background-color: ${color} !important;
      height: 2px;
    }
    .typeTab {
      max-width: var(--tabWidth);
      min-width: var(--tabWidth);
      .MuiTab-wrapper {
        max-width: var(--tabWidth);
      }
      span {
        color: ${CssVariables.White};
        font-weight: 600;
        font-size: 16px;
      }
    }
    .Mui-selected {
      span {
        color: ${color} !important;
      }
    }
    .MuiTabs-root,
    .typeTab {
      min-height: 37px;
      max-height: 37px;
      padding: 0;
    }
    .MuiTabs-indicator {
      transition: all 60ms linear 0ms;
    }
  `
}
