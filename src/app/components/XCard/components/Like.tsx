import { FC } from "react"
import styled from "styled-components"
import { FAIcon, FontAwesomeIcon } from "app/components/FontAwesomeIcon"

interface Props {
  liked: boolean
  onClick: () => void
}

export const Like: FC<Props> = ({ liked, onClick }) => {
  const icon: FAIcon = liked ? "fa-solid fa-heart" : "fa-regular fa-heart"

  return <LikeIcon icon={icon} onClick={onClick} />
}

const LikeIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`
