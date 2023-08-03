import { Box } from "@material-ui/core"
import { Avatar } from "app/components/Avatar"
import { BButton } from "app/components/BButton"
import { BText } from "app/components/common/BText"
import { BTitle } from "app/components/common/BTitle"
import { Spacer } from "app/components/common/Spacer"
import { EmptyState } from "app/components/EmptyState"
import { GridLoading } from "app/components/grid_loading/gridLoading"
import { AppPages } from "app/constants"
import { GlobalSelectors } from "app/selectors"
import { globalActions } from "app/slice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"
import { formatExpirationDate } from "utils/commonUtils"
import { DomainPageSelectors } from "../../selectors"
import { DomainPageActions } from "../../slice"

export const Subdomains = () => {
  const dispatch = useDispatch()
  const isLoadingSubdomains = useSelector(
    DomainPageSelectors.isLoadingSubdomains
  )
  const subdomains = useSelector(DomainPageSelectors.subdomains)
  const domain = useSelector(DomainPageSelectors.domain)
  const isOwner = false
  const openCreateSubdomainModal = () =>
    dispatch(globalActions.setIsOpenCreateSubdomain(true))

  useEffect(() => {
    if (domain) {
      dispatch(DomainPageActions.getSubdomainsByDomainName(domain.name))
    }
  }, [domain?.name])

  if (isLoadingSubdomains) {
    return <GridLoading />
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {isOwner && (
        <BButton
          mt={1}
          onClick={openCreateSubdomainModal}
          btn="secondary"
          content="+ Create Subdomain"
        />
      )}

      {subdomains?.length ? (
        <SubDomainsWrapper>
          {subdomains.map((subdomain) => (
            <SubDomain
              key={subdomain.id}
              to={`${AppPages.SubDomainPage}/${subdomain.id}`}
            >
              <Box display="flex" alignItems="center">
                {domain?.owner && <StyledAvatar name={domain?.owner} />}
                <BTitle btnSize="h5" color={CssVariables.White} ml={3}>
                  {subdomain.name}
                </BTitle>
              </Box>

              <BText color={CssVariables.GrayWhite}>
                {formatExpirationDate(subdomain.expiration_date)}
              </BText>
            </SubDomain>
          ))}
          <Spacer vSpace={CssVariables.Space40} />
        </SubDomainsWrapper>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center">
          <EmptyState title="No subdomains have been added" />
        </Box>
      )}
    </Box>
  )
}

const SubDomainsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const SubDomain = styled(Link)`
  width: 100%;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${CssVariables.GrayWhite};
`

const StyledAvatar = styled(Avatar)`
  width: 40px;
  ${media.md`
    width: 30px;
  `}
`
