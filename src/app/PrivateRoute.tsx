import { Redirect, Route } from "react-router-dom"
import { CookieKeys, cookies } from "services/cookie"
import { AppPages } from "./constants"
//reverse private is for the situation where
//  we don't want to show a page if user is already logged in like signup page
//  feel free to change the prop name
function PrivateRoute({
  component: Component,
  reversePrivate = false,
  ...rest
}) {
  let canOpen = !!cookies.get(CookieKeys.ACCESS_TOKEN)
  if (reversePrivate) {
    canOpen = !cookies.get(CookieKeys.ACCESS_TOKEN)
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        canOpen ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: reversePrivate ? AppPages.RootPage : AppPages.RootPage,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
