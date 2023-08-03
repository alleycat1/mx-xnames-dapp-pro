import { Box, Grid } from "@material-ui/core"
import { BButton } from "app/components/BButton"
import { Card } from "app/components/Cards"
import { BText } from "app/components/common/BText"
import { FC } from "react"
import { CssVariables } from "styles/glob-styles"
import { TimerBox } from "../TimerBox"
import { useCountdown } from "hooks/useCountDown"
import ConcordiumLogo from "images/icons/concordium-logo.svg"
import { IconBox } from "app/containers/DomainPage/style"
import { useDispatch, useSelector } from "react-redux"
import { DomainPageActions } from "app/containers/DomainPage/slice"
import { GlobalSelectors } from "app/selectors"
import { DomainPageSelectors } from "app/containers/DomainPage/selectors"
import { MicroCCDToCCD } from "utils/unitConversion"

import moment from "moment"
import { BookMark } from "app/components/BookMark"
import { AuthorizationRequiredButton } from "app/components/AuthorizationRequiredButton"

export const AuctionContent: FC = () => {
  const dispatch = useDispatch()

  const domain = useSelector(DomainPageSelectors.domain)
  const isOwner = false

  const favoriteDomains = []

  const [days, hours, minutes, seconds] = useCountdown(
    moment.utc(domain?.auction?.end_time).valueOf()
  )
  const isEndAuction: boolean = +days + +hours + +minutes + +seconds <= 0

  const openPlaceBidModal = () =>
    dispatch(DomainPageActions.setIsOpenPlaceBidModal(true))

  if (!domain || !domain.auction) return <></>

  const isFavDns = favoriteDomains?.some(
    (favDomain) => favDomain === domain?.name
  )

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" alignItems="center" mb={4}>
        <BText btnSize="l">Auction for {domain.name}</BText>
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
                minBid={domain.auction.start_price}
                time={domain.auction.end_time.toString()}
                status={domain.status}
                disabled
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={8} md={6} sm={6}>
          <Grid container>
            <Grid item xs={12} lg={10} md={11} sm={12}>
              <TimerBox
                isEndAuction={isEndAuction}
                time={{ days, hours, minutes, seconds }}
              />
              <Box
                mt={5}
                mb={2}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <BText btnSize="s" color={CssVariables.Cyan}>
                  Auction information
                </BText>
                <BText btnSize="s" weight="med">
                  Min Bid: {MicroCCDToCCD(domain.auction.start_price)} CCD
                </BText>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
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
              >
                <BText btnSize="m">Top Bid:</BText>
                <Box display="flex" alignItems="center">
                  <IconBox mr={1}>
                    {/* <ConcordiumLogo fill={CssVariables.White} /> */}
                  </IconBox>
                  <BText btnSize="m" color={CssVariables.White}>
                    {MicroCCDToCCD(domain.auction.actual_price)}
                  </BText>
                </Box>
              </Box>
              {/* Top bidder wallet_address should be added once BE provides it */}
              {/*  <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
              >
                <BText size="m">Top Bidder:</BText>
                <Box display="flex" alignItems="center">
                  <BText size="m" color={CssVariables.White}>
                    ???
                  </BText>
                </Box>
              </Box> */}

              <Box
                mt={2}
                width="100%"
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                {!isOwner && (
                  <Box mr={2} width="100%">
                    <AuthorizationRequiredButton
                      text="Connect Wallet to Place Bid"
                      btnSize="sm"
                    >
                      <BButton
                        btn="secondary"
                        btnSize="sm"
                        disabled={isEndAuction}
                        onClick={openPlaceBidModal}
                      >
                        Place Bid
                      </BButton>
                    </AuthorizationRequiredButton>
                  </Box>
                )}

                <BookMark favorite={isFavDns} domainName={domain.name} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
