/**
 *
 * Recaptcha
 *
 */

// import { selectIsLoggedIn, selectSiteKey } from "app/selectors"
import { globalActions } from "app/slice"
import { memo, useCallback, useEffect } from "react"
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3"
import { useDispatch, useSelector } from "react-redux"

interface Props {}

export const ReCaptcha = memo((props: Props) => {
  // const siteKey = useSelector(selectSiteKey)
  // const isLoggedIn = useSelector(selectIsLoggedIn)

  // if (isLoggedIn || !siteKey) return <></>

  return (
    <>
      {/*  <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
        <BictoryReCaptcha />
      </GoogleReCaptchaProvider> */}
    </>
  )
})

const BictoryReCaptcha = () => {
  const dispatch = useDispatch()
  const { executeRecaptcha } = useGoogleReCaptcha()
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.debug("33311")
      return
    }
  }, [])

  useEffect(() => {
    handleReCaptchaVerify()
    if (executeRecaptcha) {
      dispatch(globalActions.setExecuteRecaptcha(executeRecaptcha))
    }
  }, [handleReCaptchaVerify, executeRecaptcha])

  return <></>
}
