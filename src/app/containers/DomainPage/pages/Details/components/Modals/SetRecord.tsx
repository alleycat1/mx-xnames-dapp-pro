import { Box } from "@material-ui/core"
import { DomainPageActions } from "app/containers/DomainPage/slice"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { useDispatch, useSelector } from "react-redux"
import { CssVariables } from "styles/glob-styles"
import { BButton } from "app/components/BButton"
import { BModal } from "app/components/BModal"
import { Spacer } from "app/components/common/Spacer"
import { NormalInput } from "app/components/Inputs"
import { StyledText } from "app/components/Modals/style"
import { DomainPageSelectors } from "app/containers/DomainPage/selectors"
import { BText } from "app/components/common/BText"
import { GridLoading } from "app/components/grid_loading/gridLoading"
import { formatCurrencyWithMaxFraction } from "utils/formatters"
import { Divider } from "app/components/common/Divider"
import { IconBox } from "app/containers/DomainPage/style"
import ConcordiumLogo from "images/icons/concordium-logo.svg"
import { DataValue } from "app/types"
import { recortTypeToText } from "utils/commonUtils"
import useDevice from "hooks/useDevice"

export const SetRecord = () => {
  const dispatch = useDispatch()
  const isOpen = false
  const recordTitle = useSelector(DomainPageSelectors.recordTitle)
  const recordValue = useSelector(DomainPageSelectors.recordValue)
  const recordType = useSelector(DomainPageSelectors.recordType)
  const walletInfoData = undefined
  const { isMobile } = useDevice()

  const isLoadingSetDataFee = useSelector(
    DomainPageSelectors.isLoadingSetDataFee
  )
  const setDataFee = useSelector(DomainPageSelectors.setDataFee)

  const onClose = () => {
    dispatch(globalActions.setIsOpenSetRecord(false))
  }

  const setRecord = () => {
    onClose()

    if (walletInfoData && !isMobile) {
      dispatch(DomainPageActions.startSetRecordProccess())
      return
    }
    dispatch(
      globalActions.setIsWalletConnectModalOpen({
        open: true,
        afterConnection: DomainPageActions.startSetRecordProccess,
      })
    )
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(DomainPageActions.setRecordValue(event.target.value))
  }

  return (
    <BModal isOpen={isOpen} onClose={onClose} modalsize="medium" title="Record">
      <StyledText>{recordTitle}</StyledText>

      <Spacer vSpace={CssVariables.Space16} />

      {recordType === DataValue.EMPTY ? (
        <Box display="flex" alignItems="center" justifyContent="center" mb={3}>
          <BText>
            Do you want to remove {recordTitle} {recortTypeToText(recordType)}?
          </BText>
        </Box>
      ) : (
        <Box display="flex" alignItems="center" mb={3}>
          <NormalInput onChange={handleChange} />
        </Box>
      )}

      {isLoadingSetDataFee ? (
        <GridLoading />
      ) : (
        <>
          {setDataFee ? (
            <Box>
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
                        Number(setDataFee).toString(),
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
                        Number(setDataFee).toString(),
                        4
                      )}
                    </Box>
                  </BText>
                </Box>
              </Box>
            </Box>
          ) : (
            <></>
          )}
        </>
      )}

      <BButton
        onClick={setRecord}
        btn="secondary"
        content="Approve"
        mt={4}
        disabled={recordValue === "" && recordType !== DataValue.EMPTY}
      />

      <Spacer vSpace={CssVariables.Space32} />
    </BModal>
  )
}
