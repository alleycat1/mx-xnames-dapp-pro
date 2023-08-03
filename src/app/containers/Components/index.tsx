/**
 *
 * Components
 *
 */

import { Box, Grid } from "@material-ui/core"
import { BButton } from "app/components/BButton"
import { BText } from "app/components/common/BText"
import { BTitle } from "app/components/common/BTitle"
import { BToolTip } from "app/components/common/BToolTip"
import { Spacer } from "app/components/common/Spacer"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { NormalInput } from "app/components/Inputs"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import { NormalFormikInput } from "app/components/Formik"
import { Card } from "app/components/Cards"
import { globalActions, useGlobalSlice } from "app/slice"
import { useDispatch } from "react-redux"

interface Props {}

export function Components(props: Props) {
  useGlobalSlice()
  const dispatch = useDispatch()

  const formik = {
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(8).required(),
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  }
  return (
    <>
      <Wrapper>
        <Box m={5} display="flex" alignItems="center" flexWrap="wrap">
          <BButton btn="secondary" btnSize="md">
            secondary Button
          </BButton>
          <BButton btn="secondary" btnSize="sm">
            secondary Button
          </BButton>
          <BButton btn="primary" btnSize="md">
            Primary Button
          </BButton>
          <BButton btn="primary" btnSize="sm">
            Primary Button
          </BButton>
          <BButton btn="danger" btnSize="md">
            Danger Button
          </BButton>
          <BButton btn="danger" btnSize="sm">
            Danger Button
          </BButton>
        </Box>
        <Box m={5} display="flex" alignItems="center" flexWrap="wrap">
          <NormalInput placeholder="Placeholder" />
        </Box>
        <Box m={5}>
          <Formik
            initialValues={formik.initialValues}
            validationSchema={formik.validationSchema}
            onSubmit={formik.onSubmit}
          >
            {({ values, errors }) => (
              <Form>
                <Field
                  component={NormalFormikInput}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <Field
                  component={NormalFormikInput}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <BButton btn="secondary" btnSize="sm" type="submit">
                  Submit
                </BButton>
              </Form>
            )}
          </Formik>
        </Box>

        <Box display="flex" flexDirection="column">
          <BTitle btnSize="h1" color={CssVariables.Cyan}>
            h1
          </BTitle>
          <BTitle btnSize="h2">h2</BTitle>
          <BTitle btnSize="h3" weight="bold">
            h3
          </BTitle>
          <BTitle btnSize="h4" weight="med">
            h4
          </BTitle>
          <BTitle btnSize="h5" weight="reg">
            h5
          </BTitle>
        </Box>

        <Spacer vSpace={CssVariables.Space16} />

        <Box display="flex" flexDirection="column">
          <BText btnSize="l" color={CssVariables.Neutral400}>
            Large text
          </BText>
          <BText btnSize="m" weight="reg">
            Medium text
          </BText>
          <BText btnSize="s" weight="bold">
            Small text
          </BText>
          <BText btnSize="xs" weight="med">
            Extra Small text
          </BText>
        </Box>

        <Box>
          <BToolTip
            title={
              <Box display="flex" flexDirection="column">
                <span>
                  Tooltips are for sharing more useful information with users
                </span>
                <BButton btn="primary" btnSize="sm">
                  Learn More
                </BButton>
              </Box>
            }
            interactive
          >
            <span>Large tooltip</span>
          </BToolTip>
          <BToolTip title="Tooltip">
            <span>Small tooltip</span>
          </BToolTip>
        </Box>
        <Box m={5}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Card
                domainName="Antimonoponoeograhicationalism.ccd"
                time={"12:07:35"}
                id="antimonoponoeograhicationalism"
                status="registered"
              />
            </Grid>
            <Grid item xs={3}>
              <Card
                domainName="shaha.ccd"
                time={"12:07:35"}
                id="shaha"
                status="registered"
              />
            </Grid>
            <Grid item xs={3}>
              <Card
                domainName="sulton.ccd"
                time={"12:07:35"}
                id="sulton"
                status="registered"
              />
            </Grid>
          </Grid>
        </Box>

        <Spacer vSpace={CssVariables.Space32} />

        <BButton
          onClick={() =>
            dispatch(globalActions.setIsWalletConnectModalOpen({ open: true }))
          }
        >
          ConnectWalletInfo modal
        </BButton>

        <BButton
          onClick={() => dispatch(globalActions.setIsOpenConnectWalletQR(true))}
        >
          ConnectWallet QR code
        </BButton>

        <BButton
          onClick={() => dispatch(globalActions.setIsOpenUserWallet(true))}
        >
          User wallet
        </BButton>

        <BButton
          onClick={() =>
            dispatch(globalActions.setIsOpenDisconnectWallet(true))
          }
        >
          Disconnect wallet
        </BButton>

        <BButton onClick={() => dispatch(globalActions.setIsOpenAlert(true))}>
          Alert
        </BButton>
        <BButton
          onClick={() =>
            dispatch(globalActions.setIsOpenSubmittedAlert({ open: true }))
          }
        >
          Submitted Alert
        </BButton>
        <BButton
          onClick={() =>
            dispatch(globalActions.setIsOpenFailedAlert({ open: true }))
          }
        >
          Failed Alert
        </BButton>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div``
