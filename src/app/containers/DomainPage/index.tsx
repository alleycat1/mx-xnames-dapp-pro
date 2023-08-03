import { Helmet } from "react-helmet-async"
import { Route, Switch, useParams } from "react-router-dom"
import { DomainPages, DomainTabs } from "app/constants"
import { Register } from "./pages/Register/Loadable"
import { ParamsModule } from "./types"
import { FC, useEffect } from "react"
import { DomainPageActions, useDomainPageSlice } from "./slice"
import { Details } from "./pages/Details/Loadable"
import { RegisterConfirmModal } from "./components/Modals/RegisterConfirmModal"
import { Subdomains } from "./pages/Subdomains/Loadable"
import { Auction } from "./pages/Auction/Loadable"
import { useDispatch, useSelector } from "react-redux"
import { DomainTabsCmp } from "./components/Tabs"
import { DomainPageSelectors } from "./selectors"
import { GridLoading } from "app/components/grid_loading/gridLoading"
import { CreateSubdomain } from "./components/Modals/CreateSubdomain"
import { ConfirmSubdomain } from "./components/Modals/ConfirmSubdomain"
import { TransferDomainModal } from "./components/Modals/TransferDomain"
import { ExtendSubscription } from "./components/Modals/ExtendSubscription"
import { PlaceBidModal } from "./components/Modals/PlaceBid"
import { SetRecord } from "./pages/Details/components/Modals/SetRecord"
import { SetAddress } from "./pages/Details/components/Modals/SetAddress"
import { SellModal } from "./pages/Details/components/Modals/SellModal"
import { Home } from "./pages/Home/Loadable"

interface Props {}

export const DomainPage: FC<Props> = (props) => {
  useDomainPageSlice()
  return (
    <>
      <Helmet>
        <title>Domains</title>
        <meta name="description" content="Domains" />
      </Helmet>

      <Switch>
        <Route path={DomainPages.Home} exact component={Home} />
        <Route path={`${DomainPages.Home}/:name`} component={Home} />
      </Switch>
    </>
  )
}
