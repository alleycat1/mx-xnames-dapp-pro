import { Box, Grid } from "@material-ui/core"
import { BText } from "app/components/common/BText"
import { BTitle } from "app/components/common/BTitle"
import { CssVariables } from "styles/glob-styles"
import { RecordBox } from "./style"
import EditIcon from "images/icons/edit.svg"
import ExtraLinkIcon from "images/icons/external-link.svg"
import TrashIcon from "images/icons/trash.svg"
import PlusSquareIcon from "images/icons/plus-square.svg"
import { IconButton } from "app/containers/DomainPage/style"

export const Records = () => {
  return (
    <Box pt={1}>
      <BTitle btnSize="h5" weight="med" color={CssVariables.GrayWhite}>
        Records
      </BTitle>
      <BText btnSize="m" weight="med">
        Attach records such as wallet addresses, URLs and texts to your domain
        name.
      </BText>
      <RecordBox mt={2} mb={3}>
        <BText btnSize="l" weight="med" color={CssVariables.White}>
          Wallets
        </BText>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <BText btnSize="l" weight="med">
                Concordium
              </BText>
            </Grid>
            <Grid item xs={9}>
              <Box display="flex" alignItems="center">
                <BText btnSize="l" weight="reg" color={CssVariables.White}>
                  4c7goyyukBh2wFuc94SWvCo8XXkmTt761ty9t9v
                </BText>
                <Box display="flex" alignItems="center" ml={1}>
                  <IconButton stroke={CssVariables.Cyan}>
                    <ExtraLinkIcon />
                  </IconButton>
                </Box>
                <Box display="flex" alignItems="center" ml={1}>
                  <IconButton stroke={CssVariables.Cyan}>
                    <EditIcon />
                  </IconButton>
                </Box>
                <Box display="flex" alignItems="center" ml={1}>
                  <IconButton stroke={CssVariables.Red400}>
                    <TrashIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <BText btnSize="l" weight="med">
                Ethereum
              </BText>
            </Grid>
            <Grid item xs={9}>
              <Box display="flex" alignItems="center">
                <BText btnSize="l" weight="reg">
                  Not set
                </BText>
                <Box display="flex" alignItems="center" ml={1}>
                  <IconButton fill={CssVariables.Cyan}>
                    <PlusSquareIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <BText btnSize="l" weight="med">
                Near wallet
              </BText>
            </Grid>
            <Grid item xs={9}>
              <Box display="flex" alignItems="center">
                <BText btnSize="l" weight="reg">
                  Not set
                </BText>
                <Box display="flex" alignItems="center" ml={1}>
                  <IconButton fill={CssVariables.Cyan}>
                    <PlusSquareIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </RecordBox>
      <RecordBox mt={2} mb={3}>
        <BText btnSize="l" weight="med" color={CssVariables.White}>
          Texts and Links
        </BText>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <BText btnSize="l" weight="med">
                Twitter
              </BText>
            </Grid>
            <Grid item xs={9}>
              <Box display="flex" alignItems="center">
                <BText btnSize="l" weight="reg" color={CssVariables.White}>
                  https://twitter.com/kudabank
                </BText>
                <Box display="flex" alignItems="center" ml={1}>
                  <IconButton stroke={CssVariables.Cyan}>
                    <ExtraLinkIcon />
                  </IconButton>
                </Box>
                <Box display="flex" alignItems="center" ml={1}>
                  <IconButton stroke={CssVariables.Cyan}>
                    <EditIcon />
                  </IconButton>
                </Box>
                <Box display="flex" alignItems="center" ml={1}>
                  <IconButton stroke={CssVariables.Red400}>
                    <TrashIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <BText btnSize="l" weight="med">
                Facebook
              </BText>
            </Grid>
            <Grid item xs={9}>
              <Box display="flex" alignItems="center">
                <BText btnSize="l" weight="reg">
                  Not set
                </BText>
                <Box display="flex" alignItems="center" ml={1}>
                  <IconButton fill={CssVariables.Cyan}>
                    <PlusSquareIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <BText btnSize="l" weight="med">
                Github
              </BText>
            </Grid>
            <Grid item xs={9}>
              <Box display="flex" alignItems="center">
                <BText btnSize="l" weight="reg" color={CssVariables.White}>
                  github.com/bictory_finance
                </BText>
                <Box display="flex" alignItems="center" ml={1}>
                  <IconButton stroke={CssVariables.Cyan}>
                    <ExtraLinkIcon />
                  </IconButton>
                </Box>
                <Box display="flex" alignItems="center" ml={1}>
                  <IconButton stroke={CssVariables.Cyan}>
                    <EditIcon />
                  </IconButton>
                </Box>
                <Box display="flex" alignItems="center" ml={1}>
                  <IconButton stroke={CssVariables.Red400}>
                    <TrashIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <BText btnSize="l" weight="med">
                Description
              </BText>
            </Grid>
            <Grid item xs={9}>
              <Box display="flex" alignItems="center">
                <BText btnSize="l" weight="reg">
                  Not set
                </BText>
                <Box display="flex" alignItems="center" ml={1}>
                  <IconButton fill={CssVariables.Cyan}>
                    <PlusSquareIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <BText btnSize="l" weight="med">
                Email
              </BText>
            </Grid>
            <Grid item xs={9}>
              <Box display="flex" alignItems="center">
                <BText btnSize="l" weight="reg">
                  Not set
                </BText>
                <Box display="flex" alignItems="center" ml={1}>
                  <IconButton fill={CssVariables.Cyan}>
                    <PlusSquareIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <BText btnSize="l" weight="med">
                Avatar
              </BText>
            </Grid>
            <Grid item xs={9}>
              <Box display="flex" alignItems="center">
                <BText btnSize="l" weight="reg">
                  Not set
                </BText>
                <Box display="flex" alignItems="center" ml={1}>
                  <IconButton fill={CssVariables.Cyan}>
                    <PlusSquareIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <BText btnSize="l" weight="med">
                Url
              </BText>
            </Grid>
            <Grid item xs={9}>
              <Box display="flex" alignItems="center">
                <BText btnSize="l" weight="reg">
                  Not set
                </BText>
                <Box display="flex" alignItems="center" ml={1}>
                  <IconButton fill={CssVariables.Cyan}>
                    <PlusSquareIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </RecordBox>
    </Box>
  )
}
