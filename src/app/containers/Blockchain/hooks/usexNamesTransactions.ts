import { useGetActiveTransactionsStatus } from "@multiversx/sdk-dapp/hooks/transactions/useGetActiveTransactionsStatus"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BlockchainSelectors } from "../selectors"
import { BlockchainActions } from "../slice"

export const usexNamesTransactions = () => {
  const dispatch = useDispatch()
  const connectedAccountAddress = useSelector(
    BlockchainSelectors.connectedAccount
  )?.address
  const chainId = useSelector(BlockchainSelectors.network)?.chainID
  const { success, fail, pending } = useGetActiveTransactionsStatus()
  useEffect(() => {
    if (success || fail || connectedAccountAddress) {
      dispatch(BlockchainActions.getxNamesTransactions())
      dispatch(
        BlockchainActions.setXNamesTransactionStatus({
          fail,
          pending,
          success,
        })
      )
    }
  }, [success, fail, pending, connectedAccountAddress, chainId])
}
