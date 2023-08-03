/**
 *
 * MarketPlacePage
 *
 */

import { PageLayer } from "app/components/common/PageLayer"
import { Helmet } from "react-helmet-async"
import { Top } from "./components/Top"
import { Content } from "./components/Content"

export const MarketPlacePage = () => {
  return (
    <>
      <Helmet>
        <title>MarketPlacePage</title>
        <meta name="description" content="Description of MarketPlacePage" />
      </Helmet>
      <PageLayer>
        <Top />
        <Content />
      </PageLayer>
    </>
  )
}
