import { Box } from "@material-ui/core"
import { BModal } from "app/components/BModal"
import { BText } from "app/components/common/BText"
import { BTitle } from "app/components/common/BTitle"
import { Divider } from "app/components/common/Divider"
import { DomainPageSelectors } from "app/containers/DomainPage/selectors"
import { DomainPageActions } from "app/containers/DomainPage/slice"
import { IconBox } from "app/containers/DomainPage/style"
import ConcordiumLogo from "images/icons/concordium-logo.svg"
import { useDispatch, useSelector } from "react-redux"
import { CssVariables } from "styles/glob-styles"
import { BButton } from "app/components/BButton"
import { Counter } from "../Counter"
import { globalActions } from "app/slice"
import { formatCurrencyWithMaxFraction } from "utils/formatters"
import { GlobalSelectors } from "app/selectors"
import { FeeMismatchWarning } from "app/components/feeMismatchWarning"
import useDevice from "hooks/useDevice"

export const RegisterConfirmModal = () => {
  const dispatch = useDispatch()

  const year = useSelector(DomainPageSelectors.year)
  const domain = useSelector(DomainPageSelectors.domain)
  const isCreatingDomain = useSelector(DomainPageSelectors.isCreatingDomain)
  const { isMobile } = useDevice()
  const domainRegisterPriceInCCD = useSelector(
    DomainPageSelectors.domainRegisterPriceInCCD
  )
  const registerFee = useSelector(DomainPageSelectors.registerFee)

  const domainRegPriceSlippageInCCD = useSelector(
    DomainPageSelectors.domainRegPriceSlippageInCCD
  )
  const totalRegPriceInCCD = useSelector(DomainPageSelectors.totalRegPriceInCCD)
  const slippagePercent = useSelector(DomainPageSelectors.slippage)

  const isOpenConfirmModal = useSelector(
    DomainPageSelectors.isOpenConfirmModalDomain
  )

  const walletInfoData = undefined

  const closeConfirmModal = () => {
    dispatch(DomainPageActions.setIsOpenConfirmModal(false))
  }

  const registerDomain = () => {
    // if (walletInfoData && !isMobile) {
    //   dispatch(DomainPageActions.startRegisterProcess())
    //   return
    // }
    // dispatch(
    //   globalActions.setIsWalletConnectModalOpen({
    //     open: true,
    //     afterConnection: DomainPageActions.startRegisterProcess,
    //   })
    // )
    closeConfirmModal()
  }

  return (
    <BModal
      modalsize="medium"
      title="Confirm Details"
      isOpen={isOpenConfirmModal}
      onClose={closeConfirmModal}
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
              Please review name and confirm price.
            </BText>
            <Box
              width="100%"
              mt={6}
              display="flex"
              flexDirection="column"
              color={CssVariables.GrayWhite}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
              >
                <BText btnSize="m">Active Period:</BText>
                <Box display="flex" alignItems="center">
                  <BText btnSize="m" color={CssVariables.White}>
                    {year} Year
                  </BText>

                  <Counter />
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
              >
                <BText btnSize="m">Domain Price:</BText>
                <BText btnSize="m" color={CssVariables.White}>
                  <Box display="flex" alignItems="center">
                    <IconBox mr={1}>
                      {/* <ConcordiumLogo fill={CssVariables.White} /> */}
                    </IconBox>
                    {formatCurrencyWithMaxFraction(
                      Number(domainRegisterPriceInCCD).toString(),
                      4
                    )}
                  </Box>
                </BText>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
              >
                <BText btnSize="m">Slippage ({slippagePercent}%):</BText>
                <BText btnSize="m" color={CssVariables.White}>
                  <Box display="flex" alignItems="center">
                    <IconBox mr={1}>
                      {/* <ConcordiumLogo fill={CssVariables.White} /> */}
                    </IconBox>
                    {formatCurrencyWithMaxFraction(
                      domainRegPriceSlippageInCCD.toString(),
                      4
                    )}
                  </Box>
                </BText>
              </Box>
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
                    {formatCurrencyWithMaxFraction(registerFee?.toString(), 4)}
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
                      totalRegPriceInCCD.toString(),
                      4
                    )}
                  </Box>
                </BText>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            pt={3}
            mt={3}
          >
            <Box mb={3} width>
              <BButton
                onClick={registerDomain}
                loading={isCreatingDomain}
                btn="secondary"
                btnSize="md"
              >
                Approve
              </BButton>
            </Box>
            <BButton onClick={closeConfirmModal} btn="danger" btnSize="md">
              Cancel
            </BButton>
            <FeeMismatchWarning />
          </Box>
        </>
      )}
    </BModal>
  )
}
