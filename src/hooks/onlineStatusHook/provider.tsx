import React, {
  useState,
  useEffect,
  useContext,
  FC,
  createContext,
} from "react"
import { BaseUrl } from "services/constants"

const PING_RESOURCE = `${BaseUrl}/check`
const TIMEOUT_TIME_MS = 4000
const onlinePollingInterval = 60 * 1000

const timeout = (time: number, promise: Promise<any>) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject(new Error("Request timed out."))
    }, time)
    promise.then(resolve, reject)
  })
}

const checkOnlineStatus: () => Promise<boolean> = async () => {
  const controller = new AbortController()
  const { signal } = controller

  // If the browser has no network connection return offline
  if (!navigator.onLine) return navigator.onLine

  //
  try {
    await timeout(
      TIMEOUT_TIME_MS,
      fetch(PING_RESOURCE, {
        method: "GET",
        signal,
      })
    )
    return true
  } catch (error) {
    // Error Log
    console.error(error)

    // This can be because of request timed out
    // so we abort the request for any case
    controller.abort()
  }
  return false
}

const OnlineStatusContext = createContext(true)

export const OnlineStatusProvider: FC = ({ children }) => {
  const [onlineStatus, setOnlineStatus] = useState<boolean>(true)
  if (process.env.NODE_ENV !== "production") {
    console.log(
      `%cconnection Status: ${onlineStatus} ${new Date().toISOString()}`,
      "color:orange;font-size:16px;"
    )
  }
  const checkStatus = async () => {
    const online = await checkOnlineStatus()
    setOnlineStatus(online)
  }

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false)
    })

    // Add polling incase of slow connection
    const id = setInterval(() => {
      checkStatus()
    }, onlinePollingInterval)

    return () => {
      window.removeEventListener("offline", () => {
        setOnlineStatus(false)
      })

      clearInterval(id)
    }
  }, [])

  return (
    <OnlineStatusContext.Provider value={onlineStatus}>
      {children}
    </OnlineStatusContext.Provider>
  )
}

export const useOnlineStatus = () => {
  const isConnected = useContext(OnlineStatusContext)
  return isConnected
}

export default useOnlineStatus
