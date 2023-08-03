import { divide, multiply } from "precise-math"

export const CCDToMicroCCD = (n: number): number => multiply(Number(n), 1000000)
export const MicroCCDToCCD = (n: number): number => divide(Number(n), 1000000)
