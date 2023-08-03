import { Switch, Route } from "react-router-dom"
import { MyAccountPage } from "app/containers/MyAccountPage/Loadable"
import { SettingsPage } from "app/containers/SettingsPage/Loadable"
import { SubDomainPage } from "app/containers/SubDomainPage/Loadable"
import { HomePage } from "app/containers/HomePage/Loadable"
import { NotFoundPage } from "app/containers/NotFoundPage/Loadable"
import { AppPages } from "app/constants"
import PrivateRoute from "app/PrivateRoute"
import { Components } from "app/containers/Components/Loadable"
import { DomainPage } from "app/containers/DomainPage/Loadable"
import { LinkedInCallback } from "react-linkedin-login-oauth2"
import { UnlockPage } from "../containers/UnlockPage"
import { MarketPlacePage } from "app/containers/MarketPlacePage/Loadable"
import { ManageDomainPage } from "app/containers/ManageDomainPage/Loadable"
import { IS_DEV } from "services/constants"
import { Playground } from "app/containers/Playground/Loadable"

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={AppPages.RootPage} component={HomePage} />
        <Route exact path={AppPages.HomePage} component={HomePage} />
        <Route path={AppPages.Components} component={Components} />
        <Route exact path="/settings/linkedin" component={LinkedInCallback} />
        <PrivateRoute
          exact
          path={`${AppPages.MyAccountPage}`}
          component={MyAccountPage}
        />
        <PrivateRoute
          exact
          path={`${AppPages.SettingsPage}`}
          component={SettingsPage}
        />
        <PrivateRoute
          exact
          path={`${AppPages.SettingsPage}/linkedin`}
          component={SettingsPage}
        />
        <Route path={`${AppPages.DomainPage}`} component={DomainPage} />
        <Route
          path={`${AppPages.SubDomainPage}/:id`}
          component={SubDomainPage}
        />
        <Route path={`${AppPages.UnlockPage}`} component={UnlockPage} />
        <Route
          path={`${AppPages.MarketPlacePage}`}
          component={MarketPlacePage}
        />
        <Route
          path={`${AppPages.ManageDomainPage}`}
          component={ManageDomainPage}
        />
        {!IS_DEV && (
          <Route path={`${AppPages.Playground}`} component={Playground} />
        )}
        <Route component={NotFoundPage} />
      </Switch>
    </>
  )
}
