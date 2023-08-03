import { FC } from "react"
import styled from "styled-components"
import { color, border } from "styled-system"
import { BadgeType } from "types"
import { badgeColors } from "./config"

interface BadgeProps {
  type: BadgeType
  content: string
}

export const Badge: FC<BadgeProps> = ({ content, type }) => {
  const colorProps = badgeColors[type] as any

  return <Item {...colorProps}>{content}</Item>
}

const Item = styled.button`
  all: unset;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  text-transform: capitalize;

  border: 1px solid gray;
  border-radius: 22px;
  padding: 0 16px;
  height: 24px;

  ${color}
  ${border}
`
