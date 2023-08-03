import SearchImg from "images/search.svg"
import { ButtonsWrapper, StyledImg, Wrapper } from "./style"
import { Text } from "app/components/Text"
import { CssVariables } from "styles/glob-styles"
import { BButton } from "app/components/BButton"

export const EmptyState = () => {
  return (
    <Wrapper>
      <StyledImg src={SearchImg} alt="search-img" />
      <Text
        type="p18r"
        fontWeight={600}
        content="You don’t have any domains yet"
        mb="32px"
      />
      <Text
        type="p14r"
        fontWeight={500}
        content="No domain yet. Did you just buy a domain? It might take a few hours for it to show up."
        color={CssVariables.Neutral400}
        ta="c"
        style={{ maxWidth: "400px" }}
        mb="32px"
      />

      <ButtonsWrapper>
        <BButton btn="primary" content="Add Domain" />
        <BButton
          btn="secondary"
          content="Learn More about Domains"
          borderColor={CssVariables.White}
        />
      </ButtonsWrapper>
    </Wrapper>
  )
}
