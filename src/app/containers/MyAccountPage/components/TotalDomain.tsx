import { Box } from "@material-ui/core"
import { BText } from "app/components/common/BText"
import { BTitle } from "app/components/common/BTitle"
import { Spacer } from "app/components/common/Spacer"
import { useSelector } from "react-redux"
import { CssVariables } from "styles/glob-styles"
import { MyAccountSelectors } from "../selectors"

export const TotalDomain = () => {
  const totalCount = useSelector(MyAccountSelectors.total)
  const filterStatus = useSelector(MyAccountSelectors.filterValue)

  if (!filterStatus) {
    return <Spacer vSpace={CssVariables.Space32} />
  }

  return (
    <Box>
      <BTitle btnSize="h5" weight="med">
        {filterStatus} ({totalCount})
      </BTitle>
      <Spacer vSpace={CssVariables.Space16} />
      <BText btnSize="m" color={CssVariables.GrayWhite}>
        See all domain names in your wallet
      </BText>
    </Box>
  )
}
