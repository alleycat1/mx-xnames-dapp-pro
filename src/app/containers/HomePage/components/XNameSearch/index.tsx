import styled from "styled-components"
import { InputBar } from "./InputBar"
import { SuggestionOption, Suggestions } from "./Suggestions"
import { useState } from "react"
import { CssVariables } from "styles/glob-styles"

export const XNameSearch = () => {
  const [query, setQuery] = useState("")

  // Will be gotten from db (and mapped to FE)
  let options: SuggestionOption[] = [
    { name: "james.x", status: "available" },
    { name: "justice.x", status: "registered" },
  ]

  options = query ? options.filter((op) => op.name.includes(query)) : [] // Will be gotten from db

  return (
    <Wrapper>
      <InputBar query={query} setQuery={setQuery} />
      <Suggestions options={options} query={query} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  z-index: calc(${CssVariables.ZIndexModal} + 2);
  display: flex;
  align-items: center;
  gap: 10px;
  width: min(100%, 500px);
`
