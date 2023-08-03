import { AppEnvironment } from "environment"
import { getContractFromAbi } from "libs/mvx/contract/contract.builder"
import xNamesABI from "./abi.json"

export const xNamesContract = getContractFromAbi(
  AppEnvironment.contracts.xNames,
  xNamesABI
)
