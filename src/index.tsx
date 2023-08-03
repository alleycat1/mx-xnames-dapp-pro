/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"

import * as ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import FontFaceObserver from "fontfaceobserver"
import "sanitize.css/sanitize.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { history } from "utils/history"
// Initialize languages
import "./locales/i18n"

import { App } from "app"

import { HelmetProvider } from "react-helmet-async"

import { configureAppStore } from "store/configureStore"

import { ThemeProvider } from "styles/theme/ThemeProvider"
import {
  createMuiTheme,
  ThemeProvider as MaterialThemeProvider,
} from "@material-ui/core"
import { toast } from "react-toastify"
import { ConnectedRouter } from "connected-react-router"
import { MvxAxiosContext, MvxDappContext } from "libs/mvx"
// @ts-ignore
window.global = window

// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver("Open Sans", {})

// When Inter is loaded, add a font-family using Inter to the body
openSansObserver.load().then(() => {
  document.body.classList.add("fontLoaded")
})

const store = configureAppStore({}, history)
const MOUNT_NODE = document.getElementById("Bictory") as HTMLElement

interface Props {
  Component: typeof App
}

const mainTheme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans",
    // fontFamily: language === 'ar' ? 'ar' : 'Open Sans',
  },
  // direction: language === 'ar' ? 'rtl' : 'ltr',
  direction: "ltr",
  palette: {
    secondary: {
      main: "#d20e42",
    },
    primary: {
      main: "#EEB31D",
    },
    action: {
      disabledBackground: "#efefef",
      disabled: "#333333",
    },
  },
})

toast.configure({
  autoClose: 5000,
  draggable: true,
  pauseOnHover: true,
  rtl: false,
  position: "bottom-right",
  hideProgressBar: false,
})

const ConnectedApp = ({ Component }: Props) => (
  <MvxAxiosContext>
    <Provider store={store}>
      <MaterialThemeProvider theme={mainTheme}>
        <ThemeProvider>
          <HelmetProvider>
            <ConnectedRouter history={history}>
              <MvxDappContext>
                <Component />
              </MvxDappContext>
            </ConnectedRouter>
          </HelmetProvider>
        </ThemeProvider>
      </MaterialThemeProvider>
    </Provider>
  </MvxAxiosContext>
)

const render = (Component: typeof App) => {
  const root = ReactDOM.createRoot(MOUNT_NODE)
  root.render(<ConnectedApp Component={Component} />)
}

render(App)
