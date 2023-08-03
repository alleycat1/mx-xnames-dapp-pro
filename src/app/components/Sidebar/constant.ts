import { AppPages } from "app/constants"

export const Links = [
  {
    title: null,
    links: [
      { text: "Explore", path: AppPages.RootPage, icon: "fa-house" },
      { text: "Marketplace", path: AppPages.MarketPlacePage, icon: "fa-store" },
      { text: "Domains", path: AppPages.DomainPage, icon: "fa-layer-group" },
      {
        text: "Manage Domain",
        path: AppPages.ManageDomainPage,
        icon: "fa-list-ul",
      },
      { text: "Account", path: AppPages.MyAccountPage, icon: "fa-user" },
    ],
  },
  {
    title: "Help",
    links: [
      { text: "Help & FAQ", path: AppPages.SettingsPage, icon: "fa-question" },
    ],
  },
]
