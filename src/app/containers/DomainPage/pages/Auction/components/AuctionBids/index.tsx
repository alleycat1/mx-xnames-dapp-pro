import { Avatar } from "app/components/Avatar"
import { BText } from "app/components/common/BText"
import { BTitle } from "app/components/common/BTitle"
import { FC, useEffect, useState } from "react"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"
import concordiumLogo from "images/icons/concordium-logo.svg"
import FireIcon from "images/icons/fireIcon.svg"
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core"
import { BPagination } from "app/components/BPagination"
import { PageableParams } from "app/constants"
import { DomainPageSelectors } from "app/containers/DomainPage/selectors"
import { useDispatch, useSelector } from "react-redux"
import { DomainPageActions } from "app/containers/DomainPage/slice"
import { MicroCCDToCCD } from "utils/unitConversion"
import { GridLoading } from "app/components/grid_loading/gridLoading"
import { formatExpirationDate } from "utils/commonUtils"

export const AuctionBids: FC = () => {
  const domain = useSelector(DomainPageSelectors.domain)
  const bidsList = useSelector(DomainPageSelectors.bidsList)
  const isLoading = useSelector(DomainPageSelectors.isLoadingBids)
  const total = useSelector(DomainPageSelectors.bidsTotalCount)
  const dispatch = useDispatch()

  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    if (domain && domain.auction) {
      dispatch(
        DomainPageActions.getBids({
          auction_id: domain.auction?.id,
          size: PageableParams.size,
          page,
        })
      )
    }
  }, [page])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <>
      <BTitle color={CssVariables.White} btnSize="h5">
        Auction Bids
      </BTitle>
      <BText mt={1} mb={3}>
        List of all bids for this domain name
      </BText>

      <Wrapper>
        {isLoading ? (
          <GridLoading />
        ) : (
          <>
            {bidsList.length <= 0 ? (
              <Box
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <BText btnSize="l" color={CssVariables.White} mb={1}>
                  No bids yet
                </BText>
              </Box>
            ) : (
              <>
                <BText color={CssVariables.White} mb={1}>
                  Recent Bids
                </BText>

                <StyledTableContainer>
                  <Table>
                    <TableBody>
                      {bidsList.map(({ holder, bid, created_at, id }) => (
                        <TableRow key={id}>
                          <TableCell scope="row">
                            <GridItem>
                              <StyledAvatar name={holder} />
                              <BText color={CssVariables.GrayWhite}>
                                {holder}
                              </BText>
                            </GridItem>
                          </TableCell>
                          <TableCell align="right">
                            <GridItem>
                              <ConcordiumLogo />
                              <BText color={CssVariables.White} btnSize="l">
                                {MicroCCDToCCD(bid)}
                              </BText>
                            </GridItem>
                          </TableCell>
                          <TableCell align="right">
                            <GridItem>
                              <BText color={CssVariables.GrayWhite}>
                                {formatExpirationDate(created_at)}
                              </BText>
                              <Box ml={1}>
                                {domain?.auction?.actual_price === bid && (
                                  <FireIcon />
                                )}
                              </Box>
                            </GridItem>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </StyledTableContainer>

                <BPagination
                  count={Math.ceil(total / PageableParams.size)}
                  onChange={handleChange}
                  page={page}
                />
              </>
            )}
          </>
        )}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  border: 1px solid ${CssVariables.GrayWhite};
  padding: 20px;
  max-height: 400px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
`

const GridItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const StyledAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${media.md`
    width: 30px;
    height: 30px;
  `}
`

const StyledTableContainer = styled(TableContainer)`
  max-height: 250px;
  overflow: scroll;
`

export const ConcordiumLogo = styled("div")`
  width: 22px;
  height: 22px;
  path {
    fill: ${CssVariables.White};
  }
`
