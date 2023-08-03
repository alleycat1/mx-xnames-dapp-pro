import { Box } from "@material-ui/core"
import { BText } from "app/components/common/BText"

import PlusSquareIcon from "images/icons/plus-square.svg"
import { IconButton } from "app/containers/DomainPage/style"
import { CssVariables } from "styles/glob-styles"
import { useDispatch, useSelector } from "react-redux"
import { DomainPageActions } from "app/containers/DomainPage/slice"
import { globalActions } from "app/slice"
import { FC } from "react"

import EditIcon from "images/icons/edit.svg"
import ExtraLinkIcon from "images/icons/external-link.svg"
import TrashIcon from "images/icons/trash.svg"
import { DomainPageSelectors } from "app/containers/DomainPage/selectors"
import { GlobalSelectors } from "app/selectors"
import { FieldType } from "app/containers/DomainPage/types"
import { walletToName } from "utils/commonUtils"
import { DataValue } from "app/types"
import { RedirectToRecordValue } from "app/components/common/RedirectToRecordValue"

interface Props {
  name: string
  type: string
  canCud?: boolean
}

export const RecordValue: FC<Props> = ({ name, type, canCud }) => {
  const dispatch = useDispatch()

  const domain = useSelector(DomainPageSelectors.domain)
  const isOwner = false

  const setRecord = () => {
    dispatch(DomainPageActions.setRecordKey(name.toLowerCase()))
    dispatch(DomainPageActions.setRecordTitle(name))
    dispatch(DomainPageActions.setRecordType(type))
    dispatch(globalActions.setIsOpenSetRecord(true))
  }

  const emptyRecord = () => {
    dispatch(DomainPageActions.setRecordKey(name.toLowerCase()))
    dispatch(DomainPageActions.setRecordTitle(name))
    dispatch(DomainPageActions.setRecordType(DataValue.EMPTY))
    dispatch(globalActions.setIsOpenSetRecord(true))
  }

  const fieldObj: FieldType | undefined = domain?.fields?.find(
    (obj) => obj.key === name.toLowerCase()
  )

  return (
    <>
      {fieldObj ? (
        <Box display="flex" alignItems="center">
          <BText btnSize="l" weight="reg" color={CssVariables.White}>
            {fieldObj.value_type === DataValue.ADDRESS
              ? walletToName(fieldObj.value, 12)
              : fieldObj.value}
          </BText>
          {isOwner && (
            <>
              {fieldObj.value && (
                <RedirectToRecordValue
                  address={fieldObj.value}
                  type={fieldObj.value_type}
                  name={fieldObj.key}
                >
                  <Box display="flex" alignItems="center" ml={1}>
                    <IconButton stroke={CssVariables.Cyan}>
                      <ExtraLinkIcon />
                    </IconButton>
                  </Box>
                </RedirectToRecordValue>
              )}

              {canCud && (
                <Box
                  onClick={setRecord}
                  display="flex"
                  alignItems="center"
                  ml={1}
                >
                  <IconButton stroke={CssVariables.Cyan}>
                    <EditIcon />
                  </IconButton>
                </Box>
              )}

              {fieldObj.key !== "concordium" && canCud && (
                <Box
                  onClick={emptyRecord}
                  display="flex"
                  alignItems="center"
                  ml={1}
                >
                  <IconButton stroke={CssVariables.Red400}>
                    <TrashIcon />
                  </IconButton>
                </Box>
              )}
            </>
          )}
        </Box>
      ) : (
        <Box display="flex" alignItems="center">
          <BText btnSize="l" weight="reg">
            Not set
          </BText>
          {isOwner && canCud && (
            <Box onClick={setRecord} display="flex" alignItems="center" ml={1}>
              <IconButton fill={CssVariables.Cyan}>
                <PlusSquareIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      )}
    </>
  )
}
