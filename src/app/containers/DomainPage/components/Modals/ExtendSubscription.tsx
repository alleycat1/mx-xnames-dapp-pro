import { Box } from "@material-ui/core"
import { BModal } from "app/components/BModal"
import { BText } from "app/components/common/BText"
import { BTitle } from "app/components/common/BTitle"
import { Divider } from "app/components/common/Divider"
import { DomainPageSelectors } from "app/containers/DomainPage/selectors"
import { DomainPageActions } from "app/containers/DomainPage/slice"
import ConcordiumLogo from "images/icons/concordium-logo.svg"
import { useDispatch, useSelector } from "react-redux"
import { CssVariables } from "styles/glob-styles"
import { BButton } from "app/components/BButton"
import { Spacer } from "app/components/common/Spacer"
import styled from "styled-components"
import { IconBox } from "app/containers/DomainPage/style"
import { globalActions } from "app/slice"
import { useEffect } from "react"
import { formatCurrencyWithMaxFraction } from "utils/formatters"
import { GridLoading } from "app/components/grid_loading/gridLoading"
import { ExtendCounter } from "../ExtendCounter"
import { maxYear } from "../../constants"
import useDevice from "hooks/useDevice"

export const ExtendSubscription = () => {
  const dispatch = useDispatch()

  const extendYear = useSelector(DomainPageSelectors.extendYear)
  const domain = useSelector(DomainPageSelectors.domain)

  const isOpenExtendModal = useSelector(DomainPageSelectors.isOpenExtendModal)
  const { isMobile } = useDevice()

  const isLoadingExtendFee = useSelector(DomainPageSelectors.isLoadingExtendFee)
  const extendPriceByYear = useSelector(DomainPageSelectors.extendPriceByYear)
  const extendFee = useSelector(DomainPageSelectors.extendFee)

  const totalExtendPrice = useSelector(DomainPageSelectors.totalExtendPrice)
  const allowedYearToExtend = useSelector(
    DomainPageSelectors.allowedYearToExtend
  )
  const walletInfoData = undefined

  const closeExtendSubModal = () => {
    dispatch(DomainPageActions.setIsOpenExtendModal(false))
  }

  const extendDomain = () => {
    closeExtendSubModal()
    if (walletInfoData && !isMobile) {
      dispatch(DomainPageActions.startExtendDomainProccess())
      return
    }
    dispatch(
      globalActions.setIsWalletConnectModalOpen({
        open: true,
        afterConnection: DomainPageActions.startExtendDomainProccess,
      })
    )
  }

  useEffect(() => {
    if (domain && isOpenExtendModal) dispatch(DomainPageActions.getExtendFee())
  }, [domain, isOpenExtendModal])

  return (
    <BModal
      modalsize="medium"
      title="Renew Subscription"
      isOpen={isOpenExtendModal}
      onClose={closeExtendSubModal}
    >
      {domain && (
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
              Increase the subscription period of this domain to keep it active.
              Maximum allowed period for domain subscription is {maxYear} years.
            </BText>

            <Spacer vSpace={CssVariables.Space24} />
            {allowedYearToExtend === 0 ? (
              <>
                You have reached maximum period allowed to be subscribed for
                domain
              </>
            ) : (
              <>
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
                    Duration
                  </BText>

                  <DurationWrapper>
                    <Box>{extendYear} Year</Box>

                    <ExtendCounter />
                  </DurationWrapper>
                </Box>

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
                    <BText btnSize="m">Active Period:</BText>
                    <BText btnSize="m" color={CssVariables.White}>
                      <Box display="flex" alignItems="center">
                        {extendYear} Year
                      </Box>
                    </BText>
                  </Box>

                  {isLoadingExtendFee ? (
                    <GridLoading />
                  ) : (
                    <>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        mt={1}
                      >
                        <BText btnSize="m">Domain Price:</BText>
                        <BText btnSize="m" color={CssVariables.White}>
                          <Box display="flex" alignItems="center">
                            <IconBox mr={1}>
                              {/* <ConcordiumLogo fill={CssVariables.White} /> */}
                            </IconBox>
                            {formatCurrencyWithMaxFraction(
                              Number(extendPriceByYear).toString(),
                              4
                            )}
                          </Box>
                        </BText>
                      </Box>

                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        mt={1}
                      >
                        <BText btnSize="m">Max Gas Limit : </BText>

                        <BText btnSize="m" color={CssVariables.White}>
                          <Box display="flex" alignItems="center">
                            <IconBox mr={1}>
                              {/* <ConcordiumLogo fill={CssVariables.White} /> */}
                            </IconBox>
                            {formatCurrencyWithMaxFraction(
                              Number(extendFee).toString(),
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
                              Number(totalExtendPrice).toString(),
                              4
                            )}
                          </Box>
                        </BText>
                      </Box>
                    </>
                  )}
                </Box>
              </>
            )}
          </Box>

          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            pt={3}
            mt={1}
          >
            {allowedYearToExtend !== 0 && (
              <Box mb={3} width>
                <BButton
                  onClick={extendDomain}
                  loadingContent="Registering..."
                  btn="secondary"
                  btnSize="md"
                >
                  Renew Subscription
                </BButton>
              </Box>
            )}

            <BButton onClick={closeExtendSubModal} btn="danger" btnSize="md">
              Cancel
            </BButton>
          </Box>
        </>
      )}
    </BModal>
  )
}

const DurationWrapper = styled.div`
  border: 1px solid ${CssVariables.GrayWhite};
  width: 100%;
  border-radius: 4px;
  padding: 6px 12px;
  display: flex;
  justify-content: space-between;
`
