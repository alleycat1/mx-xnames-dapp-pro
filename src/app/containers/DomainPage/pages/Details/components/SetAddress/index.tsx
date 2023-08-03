import { Box } from "@material-ui/core"
import { BText } from "app/components/common/BText"

import { IconButton } from "app/containers/DomainPage/style"
import { CssVariables } from "styles/glob-styles"
import { useDispatch, useSelector } from "react-redux"
import { DomainPageActions } from "app/containers/DomainPage/slice"
import { FC } from "react"

import EditIcon from "images/icons/edit.svg"
import ExtraLinkIcon from "images/icons/external-link.svg"
import { DomainPageSelectors } from "app/containers/DomainPage/selectors"
import { GlobalSelectors } from "app/selectors"
import { walletToName } from "utils/commonUtils"
import { RedirectToCcdScan } from "app/components/common/RedirectToCcdScan"

interface Props {}

export const SetAddress: FC<Props> = () => {
  const dispatch = useDispatch()

  const domain = useSelector(DomainPageSelectors.domain)
  const isOwner = false

  const canEdit = domain?.status !== "listed"

  const setNewAddress = () => {
    dispatch(DomainPageActions.setIsOpenSetAddressModal(true))
  }

  if (!domain) {
    return <></>
  }

  return (
    <Box display="flex" alignItems="center">
      <BText btnSize="l" weight="reg" color={CssVariables.White}>
        {walletToName(domain?.resolver, 12)}
      </BText>
      {isOwner && (
        <>
          {domain?.resolver && (
            <RedirectToCcdScan address={domain?.resolver}>
              <Box display="flex" alignItems="center" ml={1}>
                <IconButton stroke={CssVariables.Cyan}>
                  <ExtraLinkIcon />
                </IconButton>
              </Box>
            </RedirectToCcdScan>
          )}
          {canEdit && (
            <Box
              onClick={setNewAddress}
              display="flex"
              alignItems="center"
              ml={1}
            >
              <IconButton stroke={CssVariables.Cyan}>
                <EditIcon />
              </IconButton>
            </Box>
          )}
        </>
      )}
    </Box>
  )
}
