import { useEffect, useState } from "react"

const useCountdown = (targetDate: number): Array<string> => {
  const countDownDate: number = new Date(targetDate).getTime()

  const [countDown, setCountDown] = useState<number>(
    countDownDate - new Date().getTime()
  )

  useEffect(() => {
    if (countDown > 0) {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime())
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [countDownDate])

  if (countDown < 0) {
    return [`00`, `00`, `00`, `00`]
  }

  return getReturnValues(countDown)
}

const getReturnValues = (countDown: number): Array<string> => {
  // calculate time left
  let days = `0${Math.floor(countDown / (1000 * 60 * 60 * 24))}`.slice(-2)
  let hours = `0${Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )}`.slice(-2)
  let minutes = `0${Math.floor(
    (countDown % (1000 * 60 * 60)) / (1000 * 60)
  )}`.slice(-2)
  let seconds = `0${Math.floor((countDown % (1000 * 60)) / 1000)}`.slice(-2)

  return [days, hours, minutes, seconds]
}

export { useCountdown }
