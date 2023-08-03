import { Box } from "@material-ui/core"
import { DomainPageActions } from "app/containers/DomainPage/slice"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { useDispatch, useSelector } from "react-redux"
import { CssVariables } from "styles/glob-styles"
import { BButton } from "app/components/BButton"
import { BModal } from "app/components/BModal"
import { BText } from "app/components/common/BText"
import { Spacer } from "app/components/common/Spacer"
import { NormalInput } from "app/components/Inputs"
import { CustomLink, StyledText } from "app/components/Modals/style"
import { DomainPageSelectors } from "../../selectors"
import { useState } from "react"
import { byteSize } from "utils/commonUtils"
import { notSupportedCharacters } from "app/constants"

const url =
  "https://bictoryhelpcenter.zendesk.com/hc/en-us/articles/5532983142799-How-do-CNS-Subdomains-work-"

export const CreateSubdomain = () => {
  const dispatch = useDispatch()
  const isOpen = false
  const domain = useSelector(DomainPageSelectors.domain)
  const subdomainName = useSelector(DomainPageSelectors.subdomainName)
  const [helperText, setHelperText] = useState<string>("")
  const [isError, setIsError] = useState<boolean>(false)

  const onClose = () => {
    dispatch(globalActions.setIsOpenCreateSubdomain(false))
  }

  const openConfirmSubdomainModal = () => {
    onClose()
    dispatch(globalActions.setIsOpenConfirmSubdomain(true))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let domainName = event.target.value
    domainName = domainName.toLowerCase()
    const domainByteSize = byteSize(domainName)

    const isRightDomainName = notSupportedCharacters.some((char) =>
      domainName.includes(char)
    )

    if (isRightDomainName) {
      setHelperText(
        `Special characters such as (${notSupportedCharacters.join(
          ", "
        )}) and spaces are not supported.`
      )
      setIsError(true)
      return
    }
    if (domainByteSize > 64) {
      setHelperText(
        "Subdomain name too long. Subdomain characters exceed max size of 64bytes."
      )
      setIsError(true)
    } else {
      setHelperText("")
      setIsError(false)
    }
    dispatch(DomainPageActions.setSubdomainName(domainName))
  }

  return (
    <BModal
      isOpen={isOpen}
      onClose={onClose}
      modalsize="medium"
      title="Create Subdomain"
    >
      <StyledText>Enter Subdomain name to continue </StyledText>

      <Spacer vSpace={CssVariables.Space40} />

      <BText btnSize="s" pl={3} color={CssVariables.GrayWhite}>
        Enter Subdomain name
      </BText>

      <Spacer vSpace={CssVariables.Space8} />

      <Box display="flex" alignItems="center" mb={2}>
        <NormalInput
          value={subdomainName}
          onChange={handleChange}
          error={isError}
        />
        <Spacer hSpace={CssVariables.Space8} />
        <BText>.{domain?.name}</BText>
      </Box>

      {helperText && (
        <BText
          btnSize="s"
          pl={3}
          color={CssVariables.Red400}
          textAlign="center"
        >
          {helperText}
        </BText>
      )}

      <BButton
        onClick={openConfirmSubdomainModal}
        btn="secondary"
        content="Continue"
        disabled={subdomainName === "" || isError}
        mt={4}
      />

      <Spacer vSpace={CssVariables.Space24} />

      <Box display="flex" justifyContent="center">
        <CustomLink onClick={() => window.open(url, "_blank")}>
          <BText>How do Subdomains work?</BText>
        </CustomLink>
      </Box>
      <Spacer vSpace={CssVariables.Space32} />
    </BModal>
  )
}
