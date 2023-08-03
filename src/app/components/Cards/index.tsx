import { Box } from "@material-ui/core"
import { FC } from "react"
import {
  normalizeStatus,
  removeTrailingDomainName,
  statusToTab,
} from "utils/commonUtils"
import {
  domainMinimizer,
  formatCurrencyWithMaxFraction,
} from "utils/formatters"
import {
  CardBottom,
  CardBarCode,
  CardLogo,
  CCDLicense,
  DomainName,
  ImageBox,
  ImageOver,
  Title,
  Text,
  VectorCard,
  Wrapper,
  SubTitle,
  ConcordiumLogo,
  StyledStatus,
  StyledLink,
  CardImgBottom,
} from "./style"
import { CardProps } from "./types"
import { MicroCCDToCCD } from "utils/unitConversion"
import { BookMark } from "../BookMark"
import { StatusEnum } from "app/types"

export const Card: FC<CardProps> = ({
  domainName,
  path = "domain",
  id,
  disabled = false,
  status = StatusEnum.available,
  favorite,
  minBid,
}) => {
  if (id === 0) id = domainName

  const cardPath = `/${path}/${id}/${statusToTab(status)}`

  return (
    <Wrapper>
      <ImageBox>
        <StyledLink to={cardPath} disabled={disabled}>
          <DomainName>{removeTrailingDomainName(domainName)}</DomainName>
          <CardLogo />
          <ImageOver />
          <CardImgBottom>
            <CCDLicense>
              .CCD
              <br />
              <span>CNS License</span>
            </CCDLicense>
          </CardImgBottom>
          <CardBarCode />

          <VectorCard name={domainName} />
        </StyledLink>
      </ImageBox>
      <CardBottom>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Title>
            <StyledLink to={cardPath} disabled={disabled}>
              {domainMinimizer(domainName)}
            </StyledLink>
          </Title>
          {status === StatusEnum.onAuction && <SubTitle>Min bid</SubTitle>}
          {status !== StatusEnum.onAuction && (
            <BookMark favorite={favorite} domainName={domainName} />
          )}
        </Box>
        <Box
          mt={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Time for auction in case Groot complains, but first BE should add it */}
          {/* <Text>
            <Box display="flex" alignItems="center">
              <ClockIcon />
              <Box ml={0.5}>{formatExpirationDate(time)}</Box>
            </Box>
          </Text> */}
          {status && (
            <StyledStatus status={status}>
              {normalizeStatus(status)}
            </StyledStatus>
          )}
          {status === StatusEnum.onAuction && minBid && (
            <Text>
              <ConcordiumLogo />
              <Box ml={0.5}>
                {formatCurrencyWithMaxFraction(
                  MicroCCDToCCD(minBid)?.toString(),
                  1
                )}
              </Box>
            </Text>
          )}
        </Box>
      </CardBottom>
    </Wrapper>
  )
}
