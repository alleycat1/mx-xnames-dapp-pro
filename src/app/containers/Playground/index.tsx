/**
 *
 * Playground
 *
 */

import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { PlaygroundActions, usePlaygroundSlice } from "./slice"
import { selectPlayground } from "./selectors"
import { BButton } from "app/components/BButton"
import useGetTransactions from "libs/mvx/hooks/useGetTransactions"
import { usePingpongTransactions, usePlaygroundTransactions } from "./hooks"

interface Props {}

export function Playground(props: Props) {
  usePlaygroundSlice()
  usePingpongTransactions()
  usePlaygroundTransactions()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const playground = useSelector(selectPlayground)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch()

  const fetchPingAmount = () => {
    dispatch(PlaygroundActions.fetchPingAmount())
  }
  const ping = () => {
    dispatch(PlaygroundActions.ping())
  }

  return (
    <>
      <div>
        <BButton onClick={fetchPingAmount}>fetchPingAmount</BButton>
        <BButton onClick={ping}>ping</BButton>
      </div>
    </>
  )
}
