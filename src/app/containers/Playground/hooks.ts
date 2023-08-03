import { useGetActiveTransactionsStatus } from "@multiversx/sdk-dapp/hooks/transactions/useGetActiveTransactionsStatus"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BlockchainSelectors } from "../Blockchain/selectors"
import { PlaygroundActions } from "./slice"

export const usePlaygroundTransactions = () => {
  const dispatch = useDispatch()
  const connectedAccountAddress = useSelector(
    BlockchainSelectors.connectedAccount
  )?.address
  const chainId = useSelector(BlockchainSelectors.network)?.chainID
  const { success, fail, pending } = useGetActiveTransactionsStatus()

  useEffect(() => {
    if (success || fail || connectedAccountAddress) {
      dispatch(PlaygroundActions.getTransactions())
    }
  }, [success, fail, pending, connectedAccountAddress, chainId])
}

export const usePingpongTransactions = () => {
  const dispatch = useDispatch()
  const connectedAccountAddress = useSelector(
    BlockchainSelectors.connectedAccount
  )?.address
  const chainId = useSelector(BlockchainSelectors.network)?.chainID
  const { success, fail, pending } = useGetActiveTransactionsStatus()
  console.log(success, fail, pending, connectedAccountAddress, chainId)
  useEffect(() => {
    if (success || fail || connectedAccountAddress) {
      dispatch(PlaygroundActions.getPingpongTransactions())
    }
  }, [success, fail, pending, connectedAccountAddress, chainId])
}
