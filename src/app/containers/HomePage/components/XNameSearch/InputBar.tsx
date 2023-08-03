import { BButton } from "app/components/BButton"
import { FormStyles } from "app/components/Form"
import styled from "styled-components"

interface Props {
  query: string
  setQuery: (value: string) => void
}

export const InputBar = ({ query, setQuery }: Props) => {
  return (
    <Wrapper>
      <Input
        placeholder="Think of a domain name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <BButton
        btn="primary"
        btnText="p16m"
        content="Get it"
        height="55px"
        width={{ lg: "max-content", sm: "100%" }}
        mt={{ lg: "auto", sm: "10px" }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`

const Input = styled(FormStyles.Input)`
  width: min(400px, 100%);
  padding: 8px 12px;
`
