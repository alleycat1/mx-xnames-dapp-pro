import { useDispatch, useSelector } from "react-redux"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { CookieKeys, cookies } from "services/cookie"
import { MessageNames, Subscriber } from "services/message_service"
import { useEffect } from "react"
import { toast } from "react-toastify"

let timeOut
let canLogout = true

export const useSetup = () => {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   return () => {}
  // }, [dispatch])

  const isLoggedIn = useSelector(GlobalSelectors.loggedIn)

  useEffect(() => {
    if (cookies.get(CookieKeys.ACCESS_TOKEN) !== undefined) {
      dispatch(globalActions.setIsLoggedIn(true))
    }

    const subscription = Subscriber.subscribe((msg: any) => {
      if (msg.name === MessageNames.AUTH_ERROR_EVENT) {
        clearTimeout(timeOut)
        if (canLogout === true) {
          canLogout = false
          dispatch(globalActions.setIsLoggedIn(false))
          toast.error("Authentication failed. Please sign in first!")
        }
        timeOut = setTimeout(() => {
          canLogout = true
        }, 1000)
      }
    })

    return () => subscription.unsubscribe()
  }, [cookies.get(CookieKeys.ACCESS_TOKEN)])
}
