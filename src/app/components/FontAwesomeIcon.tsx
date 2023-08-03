import {
  IconName,
  IconFamily,
  CssStyleClass,
} from "@fortawesome/fontawesome-common-types"
import {
  FontAwesomeIcon as FAIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome"
import { FC } from "react"

export type FAIcon = `${CssStyleClass} fa-${IconName}`

interface Props extends Omit<FontAwesomeIconProps, "icon"> {
  icon: FAIcon
  family?: IconFamily
  className?: string
}

export const FontAwesomeIcon: FC<Props> = (props) => {
  let { icon, family = "classic", ...rest } = props

  icon = `fa-${family} ${icon}` as any

  return <FAIcon icon={icon as any} {...rest} />
}
