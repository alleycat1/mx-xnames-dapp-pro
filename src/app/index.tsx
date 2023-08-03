/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { GlobalStyle } from "../styles/glob-styles"
import { GlobalModals } from "./components/Modals/GlobalModals"
import { useGlobalSlice } from "./slice"
import { useSetup } from "./startup/useSetup"
import { AppContent } from "./startup/AppContent"
import { Blockchain } from "./containers/Blockchain"
import { Auth } from "./containers/Auth"
import { initializeFAIcons } from "./startup/fontAwesomeInit"
import { Helmet } from "./startup/Helmet"
import "react-toastify/dist/ReactToastify.css"
import "styles/index.css"
import { PortalAnchor } from "./startup/PortalAnchor"

initializeFAIcons()

export function App() {
  useGlobalSlice()

  useSetup()

  return (
    <>
      <Blockchain />
      <Auth />
      <GlobalModals />
      <Helmet />
      <GlobalStyle />
      <AppContent />
      <PortalAnchor />
    </>
  )
}
