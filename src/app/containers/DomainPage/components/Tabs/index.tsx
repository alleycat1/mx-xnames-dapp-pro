import { DomainTabs } from "app/constants"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { DomainPageSelectors } from "../../selectors"
import { ParamsModule } from "../../types"
import { TabButton } from "../TabButton"

export const DomainTabsCmp = () => {
  const domain = useSelector(DomainPageSelectors.domain)

  const params = useParams<ParamsModule>()

  return (
    <>
      {domain?.status ? (
        <>
          <TabButton currentTab={params.tab} tab={DomainTabs.Details}>
            Details
          </TabButton>
          <TabButton currentTab={params.tab} tab={DomainTabs.Subdomains}>
            Subdomains
          </TabButton>
          {!!domain?.auction && (
            <TabButton currentTab={params.tab} tab={DomainTabs.Auction}>
              Auction
            </TabButton>
          )}
        </>
      ) : (
        <TabButton currentTab={params.tab} tab={DomainTabs.Register}>
          Register
        </TabButton>
      )}
    </>
  )
}
