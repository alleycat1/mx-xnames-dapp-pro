import { BlockchainActions, useBlockchainSlice } from "./slice"
import {
  useGetAccount,
  useGetLoginInfo,
  useGetNetworkConfig,
} from "@multiversx/sdk-dapp/hooks"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const Blockchain = () => {
  const dispatch = useDispatch()
  useBlockchainSlice()
  const account = useGetAccount()
  const network = useGetNetworkConfig()
  const loginInfo = useGetLoginInfo()

  useEffect(() => {
    dispatch(BlockchainActions.setUserAccount(account))
    return () => {}
  }, [account?.address])
  useEffect(() => {
    dispatch(BlockchainActions.setNetwork(network))
    return () => {}
  }, [network?.chainID])
  useEffect(() => {
    dispatch(BlockchainActions.setLoginInfo(loginInfo))
  }, [loginInfo])

  return <></>
}
