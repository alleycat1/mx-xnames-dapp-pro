import { Grid } from "@material-ui/core"
import { BPagination } from "app/components/BPagination"
import { Card } from "app/components/Cards"
import { GridLoading } from "app/components/grid_loading/gridLoading"
import { PageableParams } from "app/constants"
import { StatusEnum } from "app/types"
import { useQuery } from "hooks/queryHook"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { media } from "styles/media"
import { HomePageSelectors } from "../selectors"
import { HomePageActions } from "../slice"

export const Pagination = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const query = useQuery()

  const page = useSelector(HomePageSelectors.selectedPage)
  const isLoadingDomains = useSelector(HomePageSelectors.isLoadingDomains)
  const domains = useSelector(HomePageSelectors.domains)
  const totalCount = useSelector(HomePageSelectors.total)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(HomePageActions.setSelectedPage(value))
    history.push({
      search: `?page=${value}`,
    })
  }

  useEffect(() => {
    dispatch(HomePageActions.setSelectedPage(Number(query.get("page"))))
  }, [])

  if (isLoadingDomains) {
    return <GridLoading />
  }

  return (
    <>
      {domains && (
        <>
          <ResponsiveGrid container spacing={5}>
            {domains.map(
              ({
                id,
                name,
                expiration_date,
                status,
                favorite,
                auction,
                price,
              }) => {
                const isReserved = price?.primary.value === 0

                return (
                  <Grid key={id} lg={4} md={5} sm={6} xs={12} item>
                    <Card
                      domainName={name}
                      time={expiration_date}
                      id={id}
                      status={isReserved ? StatusEnum.reserved : status}
                      minBid={auction?.start_price}
                      favorite={favorite}
                    />
                  </Grid>
                )
              }
            )}
          </ResponsiveGrid>

          {!!totalCount && (
            <>
              <Devider />

              <BPagination
                count={Math.ceil(totalCount / PageableParams.size)}
                onChange={handleChange}
                page={page}
              />
            </>
          )}
        </>
      )}
    </>
  )
}

const Devider = styled.div`
  height: 1px;
  background: ${CssVariables.GrayWhite};
  margin: ${CssVariables.Space16} 0;
`

const ResponsiveGrid = styled(Grid)`
  ${media.md`
    justify-content: center;
  `}
`
