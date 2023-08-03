import { StatusType } from "app/types"

export interface CardProps {
  domainName: string
  time?: string | null
  showBookmark?: boolean
  status?: StatusType
  id: string | number
  path?: string
  disabled?: boolean
  available?: boolean
  registrant?: string
  favorite?: boolean
  minBid?: number
}
