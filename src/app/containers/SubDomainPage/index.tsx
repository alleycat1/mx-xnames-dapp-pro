/**
 *
 * SubDomainPage
 *
 */

import { SubdomainPages } from "app/constants"
import { Helmet } from "react-helmet-async"
import { Route, Switch } from "react-router-dom"
import { Details } from "./pages/Details"
import { useSubDomainPageSlice } from "./slice"

interface Props {}

export function SubDomainPage(props: Props) {
  useSubDomainPageSlice()

  return (
    <>
      <Helmet>
        <title>SubDomainPage</title>
        <meta name="description" content="Description of SubDomainPage" />
      </Helmet>
      <Switch>
        <Route path={SubdomainPages.Details} component={Details} />
      </Switch>
    </>
  )
}
