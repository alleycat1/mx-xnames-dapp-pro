/**
 *
 * ManageDomainPage
 *
 */

import { Text } from "app/components/Text"
import { PageLayer } from "app/components/common/PageLayer"
import { Helmet } from "react-helmet-async"
import { DomainListings } from "./components/DomainListings"
import { PrimaryDomain } from "./components/PrimaryDomain"
import { Spacer } from "app/components/common/Spacer"
import { CssVariables } from "styles/glob-styles"
import { Tutorial } from "app/components/Tutorial"
import { Main } from "./style"
import { useSelector } from "react-redux"
import { ManageDomainsPageSelectors } from "./selectors"
import { useManageDomainPageSlice } from "./slice"

export function ManageDomainPage() {
  useManageDomainPageSlice()
  const domains = useSelector(ManageDomainsPageSelectors.domains)

  return (
    <>
      <Helmet>
        <title>Manage Domain</title>
        <meta name="description" content="Manage Domain" />
      </Helmet>

      <Main>
        <PageLayer>
          <Text type="h40r" content="Manage Domain" mb={32} />
          <PrimaryDomain />
          <Spacer vSpace={CssVariables.Space32} />
          <DomainListings />
        </PageLayer>

        {domains && <Tutorial />}
      </Main>
    </>
  )
}
