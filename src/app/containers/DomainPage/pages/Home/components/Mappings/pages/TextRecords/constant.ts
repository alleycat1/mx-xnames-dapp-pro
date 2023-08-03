import { TabsProps } from "app/components/Tabs"
import { CssVariables } from "styles/glob-styles"
import { TRSocialLink } from "./pages/SocialLink"
import { TRWallets } from "./pages/Wallets"

export const TextRecordTabs: TabsProps = {
  selectedTab: { value: "", label: "" },
  list: [
    { value: 0, label: "Wallets" },
    { value: 1, label: "Social Link" },
    { value: 2, label: "Avatars" },
    { value: 3, label: "Website" },
  ],
  tabStyle: {
    default: {
      color: CssVariables.Neutral500,
      type: "p14m",
      minWidth: "105px",
    },
    selected: {
      bg: CssVariables.Cyan,
      color: CssVariables.Neutral900,
    },
  },
}

export const TextRecordPages = [TRWallets, TRSocialLink]
