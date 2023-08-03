import { AppEnvironment } from "environment"
import { getContractFromAbi } from "libs/mvx/contract/contract.builder"
import playgroundABI from "./playgroundABI.json"
import pingpongABI from "./pingpongABI.json"

export const playgroundContract = getContractFromAbi(
  AppEnvironment.contracts.xNames,
  playgroundABI
)
export const pingpongContract = getContractFromAbi(
  AppEnvironment.contracts.pingPong,
  pingpongABI
)
