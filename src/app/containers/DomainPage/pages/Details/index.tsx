import { Box, Grid, Zoom } from "@material-ui/core"
import { BButton } from "app/components/BButton"
import { Card } from "app/components/Cards"
import { Status } from "app/components/common/Status"
import { BText } from "app/components/common/BText"
import { BTitle } from "app/components/common/BTitle"
import { FC } from "react"
import { CssVariables } from "styles/glob-styles"
import { IconButton } from "../../style"
import PlusSquareIcon from "images/icons/plus-square.svg"
import { useDispatch, useSelector } from "react-redux"
import { Divider } from "app/components/common/Divider"
import { Records } from "./components/Records"
import { DomainPageSelectors } from "../../selectors"
import {
  formatExpirationDate,
  normalizeStatus,
  walletToName,
} from "utils/commonUtils"
import { DomainPageActions } from "../../slice"
import { RedirectToCcdScan } from "app/components/common/RedirectToCcdScan"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { StyledTooltip } from "./style"
import { StatusEnum } from "app/types"

interface Props {}

export const Details: FC<Props> = () => {
  const dispatch = useDispatch()

  const domain = useSelector(DomainPageSelectors.domain)
  const isOwner = false
  const nftId = useSelector(DomainPageSelectors.nftId)

  const isListed = domain?.status === "listed"

  const openTransferModal = () =>
    dispatch(DomainPageActions.setIsOpenTransferModal(true))

  const extendSub = () => dispatch(DomainPageActions.setIsOpenExtendModal(true))

  const handleSell = () => {
    dispatch(globalActions.setIsOpenSellAlert(true))
    if (domain && !nftId) {
      dispatch(DomainPageActions.getNftId(domain.id))
    }
  }

  return (
    <>
      {domain && (
        <>
          <Box display="flex" flexDirection="column">
            <Box display="flex" alignItems="center" mb={4}>
              <BText btnSize="l">Domain Details</BText>
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
                      domainName={domain.name}
                      id={domain.id}
                      status={domain.status}
                      minBid={domain.auction?.start_price}
                      favorite={false}
                      disabled
                    />

                    <Box mt={2} width="100%">
                      <Grid container spacing={2}>
                        {isOwner ? (
                          <>
                            <Grid item xs={6}>
                              <BButton
                                btn="secondary"
                                btnSize="sm"
                                onClick={handleSell}
                              >
                                Marketplace
                              </BButton>
                            </Grid>
                            <Grid item xs={6}>
                              <StyledTooltip
                                disableHoverListener={!isListed}
                                title="This domain cannot be transferred because it is currently listed in a marketplace. "
                                arrow
                                placement="right"
                              >
                                <div>
                                  <BButton
                                    btn="primary"
                                    btnSize="sm"
                                    onClick={openTransferModal}
                                    disabled={isListed}
                                  >
                                    Transfer
                                  </BButton>
                                </div>
                              </StyledTooltip>
                            </Grid>
                          </>
                        ) : (
                          <>
                            {domain?.status === StatusEnum.listed && (
                              <Grid item xs={12}>
                                <BButton
                                  btn="secondary"
                                  btnSize="sm"
                                  onClick={handleSell}
                                >
                                  Buy
                                </BButton>
                              </Grid>
                            )}
                          </>
                        )}
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={8} md={6} sm={6}>
                <BTitle btnSize="h5" weight="reg">
                  {domain.name}
                </BTitle>
                <BText btnSize="m" weight="reg" color={CssVariables.GrayWhite}>
                  This Domain is {` `}
                  <Status status="available">
                    {isOwner ? "Yours" : normalizeStatus(domain.status)}
                  </Status>
                </BText>
                <Box mt={5} mb={2}>
                  <BText btnSize="s" color={CssVariables.Cyan}>
                    Domain information
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
                      <BText btnSize="m">Domain Name:</BText>
                      <BText btnSize="m" color={CssVariables.White}>
                        {domain.name}
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
                        <RedirectToCcdScan address={domain.owner}>
                          {walletToName(domain.owner, 8)}
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
                      <BText btnSize="m" color={CssVariables.White}>
                        CCD
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
                        <RedirectToCcdScan address={domain.registrant}>
                          {walletToName(domain.registrant, 8)}
                        </RedirectToCcdScan>
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
                          {formatExpirationDate(domain.expiration_date)}
                        </BText>

                        {isOwner && (
                          <StyledTooltip
                            disableHoverListener={!isListed}
                            title="You cannot perform this action because this domain is listed for sale."
                            arrow
                            placement="left"
                          >
                            <Box display="flex" alignItems="center" ml={1}>
                              <IconButton
                                disabled={isListed}
                                onClick={extendSub}
                                fill={CssVariables.GrayWhite}
                              >
                                <PlusSquareIcon />
                              </IconButton>
                            </Box>
                          </StyledTooltip>
                        )}
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
          <Records />
        </>
      )}
    </>
  )
}
