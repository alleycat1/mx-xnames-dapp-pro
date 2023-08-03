import { FC } from "react"
import styled from "styled-components"

export const RedirectToSupport: FC = ({ children }) => {
  const url = `https://bictoryhelpcenter.zendesk.com/hc/en-us/requests/new?ticket_form_id=5290427437199`

  return (
    <StyledLink onClick={() => window.open(url, "_blank")}>
      {children}
    </StyledLink>
  )
}

const StyledLink = styled.div`
  cursor: pointer;
`
