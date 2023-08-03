import { configureStore } from "@reduxjs/toolkit"
import { createInjectorsEnhancer, forceReducerReload } from "redux-injectors"
import createSagaMiddleware from "redux-saga"

import { createReducer } from "./reducers"
import { routerMiddleware } from "connected-react-router"
import { History } from "history"

export function configureAppStore(
  initialState: any | {} = {},
  history: History
) {
  const reduxSagaMonitorOptions = {}
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
  const { run: runSaga } = sagaMiddleware
  const routerMiddleWare = routerMiddleware(history)
  // Create the store with saga middleware
  const middlewares = [sagaMiddleware, routerMiddleWare]
  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ]

  const store = configureStore({
    reducer: createReducer(),
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      ...middlewares,
    ],
    devTools:
      /* istanbul ignore next line */
      import.meta.env.NODE_ENV !== "production" ||
      import.meta.env.PUBLIC_URL.length > 0,
    enhancers,
  })

  return store
}
