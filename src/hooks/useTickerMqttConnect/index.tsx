// import { selectIsLoggedIn } from "app/selectors"
import { globalActions } from "app/slice"
// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { MqttTopics } from "services/constants"
// import {
//   MarketWatchSubscriber,
//   TickerMessage,
//   TickerMqttPayload,
// } from "services/message_service"
// import { mqttService } from "services/Mqtt"

// let initialized = false
// export const useTickerMqttConnect = () => {
//   const loggedIn = useSelector(selectIsLoggedIn)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     const tickerSubscription = MarketWatchSubscriber.subscribe(
//       (message: TickerMessage) => {
//         dispatch(globalActions.updatePairsData(message.payload))
//       }
//     )
//     return () => {
//       tickerSubscription.unsubscribe()
//     }
//   }, [])

//   useEffect(() => {
//     if (!initialized && loggedIn) {
//       mqttService.ConnectToSubject({
//         subject: MqttTopics.MarketWatch,
//       })
//       initialized = true
//     } else if (initialized && !loggedIn) {
//       mqttService.DisconnectFromSubject({
//         subject: MqttTopics.MarketWatch,
//       })
//     }
//     return () => {
//       initialized = false
//     }
//   }, [loggedIn])
// }
