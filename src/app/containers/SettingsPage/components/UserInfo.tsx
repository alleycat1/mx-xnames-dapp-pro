import { Box } from "@material-ui/core"
import { Avatar } from "app/components/Avatar"
import { BButton } from "app/components/BButton"
import { BCheckbox } from "app/components/common/BCheckbox"
import { BText } from "app/components/common/BText"
import { Spacer } from "app/components/common/Spacer"
import { NormalInput } from "app/components/Inputs"
import styled, { css } from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"
import linkedinIcon from "images/icons/linkedinIcon.svg"
import { useDispatch, useSelector } from "react-redux"
import { GlobalSelectors } from "app/selectors"
import { walletToName } from "utils/commonUtils"
import { SettingsPageActions } from "../slice"
import { SettingsPageSelectors } from "../selectors"
import { Field, Form, Formik } from "formik"
import { NormalFormikInput } from "app/components/Formik"
import { FormikBChekbox } from "app/components/Formik/CheckBox"
import * as Yup from "yup"
import { validationSchema } from "utils/validationSchema"
import { useLinkedIn } from "react-linkedin-login-oauth2"
import { useHistory, useLocation } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"

interface FormValues {
  id?: number
  username?: string
  // email?: string
  // is_hide_dmns_for_other?: boolean
}

export const UserInfo = () => {
  const dispatch = useDispatch()
  const isSaving = useSelector(SettingsPageSelectors.isSaving)
  const isSavingLinkedIn = useSelector(SettingsPageSelectors.isSavingLinkedIn)
  const isLoadingLinkedIn = useSelector(SettingsPageSelectors.isLoadingLinkedIn)

  const { linkedInLogin } = useLinkedIn({
    clientId: process.env.VITE_APP_LINKEDIN_CLIENT_ID || "",
    redirectUri: `${window.location.origin}/settings/linkedin`,
    onSuccess: (code) => {
      dispatch(SettingsPageActions.saveLinkedInToken(code))
    },
    scope: "r_liteprofile r_emailaddress w_member_social",
    onError: (error) => {
      console.log(error)
    },
  })

  const hanldeLinkedInLogin = () => {
    try {
      dispatch(SettingsPageActions.setIsLoadingLinkedIn(true))
      linkedInLogin()
    } catch (error) {
      toast.error("Failed login to LinkedIn")
    } finally {
      dispatch(SettingsPageActions.setIsLoadingLinkedIn(false))
    }
  }

  const userData = {}

  const formik = {
    initialValues: {
      id: 0,
      username: "userData?.username ?? walletToName(userData?.wallet_address)",
      // email: userData?.email,
      // is_hide_dmns_for_other: userData?.is_hide_dmns_for_other,
    },
    validationSchema: Yup.object({
      username: validationSchema.username,
    }),
    onSubmit: (values: FormValues, { setSubmitting }) => {
      setSubmitting(true)

      dispatch(
        SettingsPageActions.saveChanges({
          ...values,
        })
      )
    },
  }

  return (
    <>
      {userData && (
        <Formik
          initialValues={formik.initialValues}
          validationSchema={formik.validationSchema}
          onSubmit={formik.onSubmit}
        >
          {() => (
            <Form>
              <Credentials>
                <Box display="flex">
                  <Box display="flex" flexDirection="column">
                    <InputLabel>
                      Username:{" "}
                      <span style={{ color: "white" }}>
                        {formik.initialValues.username}
                      </span>
                    </InputLabel>
                    {/* <StyledInput value={formik.initialValues.username} disabled /> */}
                    {/* <Field name="username" component={NormalFormikInput} /> */}

                    <Spacer vSpace={CssVariables.Space40} />

                    <InputLabel>Wallet Address</InputLabel>
                    <StyledInput
                      style={{ minWidth: "470px" }}
                      value={"userData.wallet_address"}
                      disabled
                    />

                    {/* <Spacer vSpace={CssVariables.Space40} />
                    <InputLabel>Email</InputLabel>
                    <Field
                      value={userData.email}
                      placeholder="email"
                      name="email"
                      component={NormalFormikInput}
                    /> */}
                  </Box>
                </Box>
              </Credentials>

              <Spacer vSpace={CssVariables.Space72} />
              <Spacer vSpace={CssVariables.Space40} />
            </Form>
          )}
        </Formik>
      )}
    </>
  )
}

const Credentials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 700px;
  ${media.sm`
    width: 64px;
  `}
`

const InputLabel = styled.div`
  color: ${CssVariables.GrayWhite};
  margin-bottom: 6px;
  font-size: 14px;
`

const InputBaseCss = css`
  width: 335px;

  ${media.sm`
  width: 80vw;
  `}
`

const StyledInput = styled(NormalInput)`
  .MuiInputBase-input {
    color: ${CssVariables.GrayWhite};
  }
  .MuiFormLabel-root,
  .MuiFormLabel-root.Mui-disabled {
    color: ${CssVariables.GrayWhite};
  }

  ${InputBaseCss}
`

const HideDomainsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 700px;
`

const HideDomains = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
`

const SocialConnection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 700px;
`

const LinkedinIcon = styled("div")`
  width: 25px;
  height: 25px;
  margin-right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`
