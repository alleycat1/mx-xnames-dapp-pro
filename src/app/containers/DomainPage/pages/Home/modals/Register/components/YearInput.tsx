import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { Text } from "app/components/Text"
import { useState } from "react"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

interface YearInputProps {
  onDecrease: () => void
  onIncrease: () => void
  yearCount: number
}

export const YearInput = (props: YearInputProps) => {
  const { onDecrease, onIncrease, yearCount } = props

  const yearText = "Year" + (yearCount > 1 ? "s" : "")
  const shouldDisable = yearCount <= 1

  return (
    <Wrapper>
      <Icon disable={shouldDisable} onClick={onDecrease} />
      <Text type="p14m" render="div" color={CssVariables.Neutral200}>
        <span>{yearCount}</span> <YearText>{yearText}</YearText>
      </Text>
      <Icon isMinus={false} onClick={onIncrease} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const YearText = styled.span`
  color: ${CssVariables.Neutral500};
`

// =========== Icon Below ============

type IconProps = {
  onClick: () => void
  isMinus?: boolean
  disable?: boolean
}

const Icon = ({ onClick, isMinus = true, disable }: IconProps) => {
  const icon = isMinus ? "fa-solid fa-minus" : "fa-solid fa-plus"

  const color = disable ? CssVariables.Neutral700 : CssVariables.Cyan

  const className = disable ? "disable" : ""

  return (
    <IconWrapper className={className} onClick={onClick}>
      <FontAwesomeIcon icon={icon} color={color as string} />
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  cursor: pointer;
  padding: 0 4px;

  &.disable {
    cursor: not-allowed;
  }
`
