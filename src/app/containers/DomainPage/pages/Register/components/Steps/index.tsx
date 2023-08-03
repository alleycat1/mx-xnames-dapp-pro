import { Box, Grid } from "@material-ui/core"
import { BText } from "app/components/common/BText"
import { BTitle } from "app/components/common/BTitle"
import { StepBox, StepBoxContent } from "./style"

export const Steps = () => {
  return (
    <>
      <Box display="flex" alignItems="center" mt={10} mb={2}>
        <BText btnSize="l">
          How to register your CNS domain name in 3 easy steps
        </BText>
      </Box>
      <Box mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} md={4} sm={6}>
            <StepBox>
              <StepBoxContent>
                <BTitle btnSize="h5" weight="reg">
                  1. Submit Request
                </BTitle>
                <Box mt={3}>
                  <BText btnSize="m">
                    Start the registration process by picking an arbitrary
                    domain name and clicking “Register”.
                  </BText>
                </Box>
              </StepBoxContent>
            </StepBox>
          </Grid>
          <Grid item xs={12} lg={4} md={4} sm={6}>
            <StepBox>
              <StepBoxContent>
                <BTitle btnSize="h5" weight="reg">
                  2. Approve Registration
                </BTitle>
                <Box mt={3}>
                  <BText btnSize="m">
                    Confirm all details and approve the transaction in your
                    CryptoX wallet to buy a domain name.
                  </BText>
                </Box>
              </StepBoxContent>
            </StepBox>
          </Grid>
          <Grid item xs={12} lg={4} md={4} sm={6}>
            <StepBox>
              <StepBoxContent>
                <BTitle btnSize="h5" weight="reg">
                  3. Registration Done
                </BTitle>
                <Box mt={3}>
                  <BText btnSize="m">
                    If successful, your domain name will be registered and
                    ownership provable on Concordium Network.
                  </BText>
                </Box>
              </StepBoxContent>
            </StepBox>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
