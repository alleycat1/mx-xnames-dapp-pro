/**
 *
 * SettingsPage
 *
 */

import { BTitle } from "app/components/common/BTitle"
import { Spacer } from "app/components/common/Spacer"
import { GridLoading } from "app/components/grid_loading/gridLoading"
import { UserSection } from "app/components/UserSection"
import { GlobalSelectors } from "app/selectors"
import { Helmet } from "react-helmet-async"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { UserInfo } from "./components/UserInfo"
import { useSettingsPageSlice } from "./slice"

interface Props {}

export function SettingsPage(props: Props) {
  useSettingsPageSlice()
  const isLoadingUserData = false

  return (
    <>
      <Helmet>
        <title>SettingsPage</title>
        <meta name="description" content="Description of SettingsPage" />
      </Helmet>

      {isLoadingUserData ? (
        <GridLoading />
      ) : (
        <Wrapper>
          <UserSection />
          <Spacer vSpace={CssVariables.Space72} />
          <BTitle btnSize="h5" weight="med">
            Settings
          </BTitle>
          <Spacer vSpace={CssVariables.Space32} />
          <UserInfo />
        </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled.div``
