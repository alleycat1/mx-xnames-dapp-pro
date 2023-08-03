/* --- STATE --- */
export interface PlaygroundState {
  isGettingTransactions: boolean
  transactions: any[]
  transactionsFetchingError?: string
  // pingpong
  isGettingPingpongTransactions: boolean
  pingpongTransactions: any[]
  pingpongTransactionsFetchingError?: string
}

export type ContainerState = PlaygroundState
