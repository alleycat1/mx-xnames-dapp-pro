import React, { FC } from "react"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

interface Props {
  checked: boolean
  onClick: (val) => void
  id: string
  [key: string]: any
}

export const BCheckbox: FC<Props> = ({ checked, id, onClick, ...others }) => {
  return (
    <CheckboxContainer checked={checked} {...others}>
      <HiddenCheckbox onChange={onClick} value={checked} id={id} />
      <IconBox checked={checked} />
    </CheckboxContainer>
  )
}

interface CheckboxProps {
  checked: boolean
}

export const CheckboxContainer = styled.div<CheckboxProps>`
  width: 33px;
  height: 18px;
  position: relative;
  background: ${({ checked }) => (checked ? CssVariables.Cyan : "#676869")};
  display: flex;
  align-items: center;
  border-radius: 13px;
  padding: 1px 0;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  user-select: none;
`

export const IconBox = styled.div<CheckboxProps>`
  background: ${CssVariables.White};
  border-radius: 50%;
  width: 15.08px;
  height: 15.08px;
  position: absolute;
  transition: all 0.3s ease-in-out;
  left: ${({ checked }) => (checked ? "calc(100% - 18px)" : "2px")};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })<any>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: -1;
`
