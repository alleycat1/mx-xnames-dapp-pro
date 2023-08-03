export * from "./image-refs"

/* eslint-disable */
export enum AppPages {
  RootPage = "/",
  Components = "/Components",
  HomePage = "/home",
  LoginPage = "/login",
  DomainPage = "/domains",
  MyAccountPage = "/me",
  SettingsPage = "/settings",
  SubDomainPage = "/subdomain",
  UnlockPage = "/unlock",
  MarketPlacePage = "/market",
  Playground = "/playground",
  ManageDomainPage = "/manage",
  // [INSERT NEW PAGE PATH ABOVE] < Needed for generating containers seamlessly
}

export enum DomainTabs {
  Register = "register",
  Details = "details",
  Subdomains = "subdomains",
  Auction = "auction",
}

export const DomainPages = {
  Home: `${AppPages.DomainPage}`,
  Register: `${AppPages.DomainPage}/:id/${DomainTabs.Register}`,
  Details: `${AppPages.DomainPage}/:id/${DomainTabs.Details}`,
  Subdomains: `${AppPages.DomainPage}/:id/${DomainTabs.Subdomains}`,
  Auction: `${AppPages.DomainPage}/:id/${DomainTabs.Auction}`,
}

export const SubdomainPages = {
  Details: `${AppPages.SubDomainPage}/:id`,
}
export const SidebarWidth = 280

export const PageableParams = {
  page: 1,
  size: 12,
  maxSize: 20,
  minSize: 1,
}

export const notSupportedCharacters = ["#", `\\`, "/", "?", ".", " "]
