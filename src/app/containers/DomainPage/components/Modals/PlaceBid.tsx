import { Box } from "@material-ui/core"
import { BModal } from "app/components/BModal"
import { BText } from "app/components/common/BText"
import { BTitle } from "app/components/common/BTitle"
import {
  DomainPageDomains,
  DomainPageSelectors,
} from "app/containers/DomainPage/selectors"
import { DomainPageActions } from "app/containers/DomainPage/slice"
import { useDispatch, useSelector } from "react-redux"
import { CssVariables } from "styles/glob-styles"
import { BButton } from "app/components/BButton"
import { NormalInput } from "app/components/Inputs"
import { Spacer } from "app/components/common/Spacer"
import { globalActions } from "app/slice"
import { MicroCCDToCCD } from "utils/unitConversion"
import { IconBox } from "app/containers/DomainPage/style"
import ConcordiumLogo from "images/icons/concordium-logo.svg"
import { GridLoading } from "app/components/grid_loading/gridLoading"
import { formatCurrencyWithMaxFraction } from "utils/formatters"
import { Divider } from "app/components/common/Divider"
import { useEffect } from "react"
import { GlobalSelectors } from "app/selectors"
import useDevice from "hooks/useDevice"

export const PlaceBidModal = () => {
  const dispatch = useDispatch()

  const domain = useSelector(DomainPageSelectors.domain)
  const bidAmount = useSelector(DomainPageSelectors.bidAmount)

  const isLoadingBidFee = useSelector(DomainPageSelectors.isLoadingBidFee)
  const bidFee = useSelector(DomainPageSelectors.bidFee)

  const { isMobile } = useDevice()

  const totalBidPrice = useSelector(DomainPageSelectors.totalBidPrice)
  const leastAmountToBid = useSelector(DomainPageSelectors.leastAmountToBid)
  const auctionIncrement = useSelector(DomainPageDomains.auctionIncrement)

  const walletInfoData = undefined

  const isOpenPlaceBidModal = useSelector(
    DomainPageSelectors.isOpenPlaceBidModal
  )

  const closePlaceBidModal = () => {
    dispatch(DomainPageActions.setIsOpenPlaceBidModal(false))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(DomainPageActions.setBidAmount(event.target.value))
  }

  const PlaceBid = () => {
    closePlaceBidModal()
    if (walletInfoData && !isMobile) {
      dispatch(DomainPageActions.startPlaceBidProccess())
      return
    }
    dispatch(
      globalActions.setIsWalletConnectModalOpen({
        open: true,
        afterConnection: DomainPageActions.startPlaceBidProccess,
      })
    )
  }

  useEffect(() => {
    if (domain && isOpenPlaceBidModal && bidAmount)
      dispatch(DomainPageActions.getBidFee())
  }, [domain, isOpenPlaceBidModal, bidAmount])

  return (
    <BModal
      modalsize="medium"
      title="Place bid"
      isOpen={isOpenPlaceBidModal}
      onClose={closePlaceBidModal}
    >
      {domain?.auction && (
        <>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            textAlign="center"
          >
            <BTitle btnSize="h5" weight="reg">
              {domain.name}
            </BTitle>
            <BText btnSize="m" color={CssVariables.GrayWhite}>
              To participate in auction you need to provide at least{" "}
              {auctionIncrement}% more value than top bid. Current top bid is{" "}
              {MicroCCDToCCD(domain.auction.actual_price)} CCD.
            </BText>

            <Spacer vSpace={CssVariables.Space24} />

            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <BText ml={3} mb={1} btnSize="xs" color={CssVariables.GrayWhite}>
                Asset
              </BText>
            </Box>

            <NormalInput value={"CCD"} disabled />

            <Spacer vSpace={CssVariables.Space24} />

            {domain.auction && (
              <Box
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                <BText
                  ml={3}
                  mb={1}
                  btnSize="xs"
                  color={CssVariables.GrayWhite}
                >
                  Amount (value should be equal or higher than{" "}
                  {formatCurrencyWithMaxFraction(
                    MicroCCDToCCD(leastAmountToBid).toString(),
                    4
                  )}{" "}
                  CCD)
                </BText>
              </Box>
            )}

            <NormalInput value={bidAmount} onChange={handleChange} />
          </Box>

          {bidAmount ? (
            <Box>
              {isLoadingBidFee ? (
                <GridLoading />
              ) : (
                <Box
                  width="100%"
                  mt={3}
                  display="flex"
                  flexDirection="column"
                  color={CssVariables.GrayWhite}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <BText btnSize="m">Max Gas Limit : </BText>
                    <BText btnSize="m" color={CssVariables.White}>
                      <Box display="flex" alignItems="center">
                        <IconBox mr={1}>
                          {/* <ConcordiumLogo fill={CssVariables.White} /> */}
                        </IconBox>
                        {formatCurrencyWithMaxFraction(
                          Number(bidFee).toString(),
                          4
                        )}
                      </Box>
                    </BText>
                  </Box>
                  <Divider />
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    mt={1}
                  >
                    <BText btnSize="m" color={CssVariables.Cyan}>
                      Total:
                    </BText>
                    <BText btnSize="m" color={CssVariables.White}>
                      <Box display="flex" alignItems="center">
                        <IconBox mr={1}>
                          {/* <ConcordiumLogo fill={CssVariables.White} /> */}
                        </IconBox>
                        {formatCurrencyWithMaxFraction(
                          Number(totalBidPrice).toString(),
                          4
                        )}
                      </Box>
                    </BText>
                  </Box>
                </Box>
              )}
            </Box>
          ) : (
            <></>
          )}

          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            pt={3}
            mt={2}
          >
            <Box width>
              <BButton
                onClick={PlaceBid}
                loadingContent="Transfer..."
                btn="secondary"
                btnSize="md"
                disabled={Number(bidAmount) < MicroCCDToCCD(leastAmountToBid)}
              >
                Place Bid
              </BButton>
            </Box>
          </Box>
        </>
      )}
    </BModal>
  )
}
