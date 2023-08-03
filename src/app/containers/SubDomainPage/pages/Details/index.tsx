import { Box, Grid } from "@material-ui/core"
import { Card } from "app/components/Cards"
import { Status } from "app/components/common/Status"
import { BText } from "app/components/common/BText"
import { BTitle } from "app/components/common/BTitle"
import { FC, useEffect } from "react"
import { CssVariables } from "styles/glob-styles"

import { useDispatch, useSelector } from "react-redux"
import { Divider } from "app/components/common/Divider"
import { SubdomainPageSelectors } from "../../selectors"
import { useParams } from "react-router-dom"
import { ParamsModule } from "app/containers/DomainPage/types"
import { SubDomainPageActions } from "../../slice"
import { GridLoading } from "app/components/grid_loading/gridLoading"
import { formatExpirationDate, walletToName } from "utils/commonUtils"
import { RedirectToCcdScan } from "app/components/common/RedirectToCcdScan"

interface Props {}

export const Details: FC<Props> = () => {
  const dispatch = useDispatch()
  const params = useParams<ParamsModule>()

  const subdomain = useSelector(SubdomainPageSelectors.subdomain)
  const isLoadingSubdomain = useSelector(
    SubdomainPageSelectors.isLoadingSubdomain
  )
  const isOwner = false

  useEffect(() => {
    dispatch(SubDomainPageActions.getSubdomain(Number(params.id)))
  }, [params.id])

  if (isLoadingSubdomain) {
    return <GridLoading />
  }

  return (
    <>
      {subdomain && (
        <>
          <Box display="flex" flexDirection="column">
            <Box display="flex" alignItems="center" mb={4}>
              <BText btnSize="l">Subdomain Details</BText>
            </Box>
            <Grid container spacing={4}>
              <Grid item xs={12} lg={4} md={5} sm={6}>
                <Box
                  alignItems="center"
                  width="100%"
                  display="flex"
                  justifyContent="center"
                  mb={3}
                >
                  <Box
                    display="flex"
                    maxWidth="340px"
                    width="100%"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Card
                      domainName={subdomain.name}
                      id={subdomain.id}
                      // time={subdomain.expiration_date}
                      disabled
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={8} md={6} sm={6}>
                <BTitle btnSize="h5" weight="reg">
                  {subdomain.name}
                </BTitle>
                <BText btnSize="m" weight="reg" color={CssVariables.GrayWhite}>
                  This subdomain belongs to{" "}
                  <Status status="available">
                    {isOwner ? "You" : walletToName(subdomain.owner, 8)}
                  </Status>
                </BText>
                <Box mt={5} mb={2}>
                  <BText btnSize="s" color={CssVariables.Cyan}>
                    Subdomain information
                  </BText>
                </Box>
                <Grid container>
                  <Grid item xs={12} lg={10} md={11} sm={12}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      mb={2}
                      flexWrap="wrap"
                    >
                      <BText btnSize="m">Subomain Name:</BText>
                      <BText btnSize="m" color={CssVariables.White}>
                        {subdomain.name}
                      </BText>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      mb={2}
                      flexWrap="wrap"
                    >
                      <BText btnSize="m">Owner:</BText>
                      <BText btnSize="m" color={CssVariables.White}>
                        <RedirectToCcdScan address={subdomain.owner}>
                          {walletToName(subdomain.owner, 8)}
                        </RedirectToCcdScan>
                      </BText>
                    </Box>
                    <Divider />
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      mb={2}
                      flexWrap="wrap"
                    >
                      <BText btnSize="m">Parent:</BText>
                      <BText btnSize="m" color={CssVariables.Cyan}>
                        {subdomain.parent}
                      </BText>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      mb={2}
                      flexWrap="wrap"
                    >
                      <BText btnSize="m">Registrant:</BText>
                      <BText btnSize="m" color={CssVariables.White}>
                        {walletToName(subdomain.registrant, 8)}
                      </BText>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      mb={2}
                      flexWrap="wrap"
                    >
                      <BText btnSize="m">Expiration date:</BText>
                      <Box display="flex" alignItems="center">
                        <BText btnSize="m" color={CssVariables.White}>
                          {formatExpirationDate(subdomain.expiration_date)}
                        </BText>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box mt={5}>
            <Divider />
          </Box>
          {/* <Records /> */}
        </>
      )}
    </>
  )
}
