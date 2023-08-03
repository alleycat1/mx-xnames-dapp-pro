import { Box } from "@material-ui/core"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"

export const OptionsContainer = styled(Box)`
  display: flex;
  gap: 15px;
`

export const Option = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0.5rem;
  background-color: ${CssVariables.Neutral800};
  border-radius: 8px;
  width: 100%;
  transition: 0.5s;
  cursor: pointer;

  svg {
    width: 14px;
    height: 14px;
    path {
      fill: ${CssVariables.Cyan};
    }
  }

  &:hover {
    background-color: ${CssVariables.Neutral700};
    color: ${CssVariables.Cyan};
  }
`

export const QuestionWrapper = styled(Box)`
  display: flex;
  gap: 25px;
`

export const Question = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-radius: 16px;
  padding: 1rem 0;
  background-color: ${CssVariables.Neutral800};
  &:hover {
    background-color: ${CssVariables.Neutral700};
  }
`
