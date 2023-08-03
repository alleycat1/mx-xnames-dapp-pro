import { Text } from "app/components/Text"
import { CssVariables } from "styles/glob-styles"
import { Devider } from "./style"
import { Box } from "@material-ui/core"

export const Top = () => {
  return (
    <Box mb={["20px", "50px"]}>
      <Text type="h40r" content="Marketplace" />
      <Text
        type="h40r"
        content="Buy. Trade. Auction"
        color={CssVariables.Neutral600}
        mb={["10px", "50px"]}
      />

      <Devider />
    </Box>
  )
}
