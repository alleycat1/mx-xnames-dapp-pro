import { useSelector } from "react-redux"
import { BlockchainSelectors } from "../Blockchain/selectors"
import { useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { useQuery } from "hooks/queryHook"
import { AppPages } from "app/constants"

export const Auth = () => {
  const history = useHistory()
  const location = useLocation()
  const query = useQuery()
  const connectedAccount = useSelector(BlockchainSelectors.connectedAccount)
  const isUnlockPage = location.pathname === AppPages.UnlockPage
  const callBackRoute = query.get("cbr")

  useEffect(() => {
    if (connectedAccount?.address && isUnlockPage && !callBackRoute) {
      history.push(AppPages.RootPage)
    } else if (connectedAccount?.address && callBackRoute) {
      callBackRoute && history.push(callBackRoute)
    }
  }, [connectedAccount?.address])

  return <></>
}
