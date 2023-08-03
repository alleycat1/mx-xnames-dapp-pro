/**
 *
 * MyAccount
 *
 */

import { Spacer } from "app/components/common/Spacer"
import { UserSection } from "app/components/UserSection"

import { Helmet } from "react-helmet-async"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"
import { Filter } from "./components/Filter"
import { Pagination } from "./components/Pagination"
import { TotalDomain } from "./components/TotalDomain"
import { useMyAccountSlice } from "./slice"

interface Props {}

export function MyAccountPage(props: Props) {
  useMyAccountSlice()

  return (
    <>
      <Helmet>
        <title>MyAccount</title>
        <meta name="description" content="Description of MyAccount" />
      </Helmet>
      <>
        <UserSection />

        <Spacer vSpace={CssVariables.Space72} />

        <Wrapper>
          <TotalDomain />

          <Filter />
        </Wrapper>

        <Spacer vSpace={CssVariables.Space32} />

        <Pagination />
      </>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  ${media.sm`
    flex-direction: column;
    align-items: center;
    text-align: center;
  `}
`
