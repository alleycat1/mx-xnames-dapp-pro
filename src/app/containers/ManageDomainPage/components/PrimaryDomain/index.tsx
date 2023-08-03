import { Text } from "app/components/Text"
import { CssVariables } from "styles/glob-styles"
import {
  Bottom,
  ButtonsWrapper,
  SelectWrapper,
  StyledBSelect,
  Wrapper,
} from "./style"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { Spacer } from "app/components/common/Spacer"
import { BButton } from "app/components/BButton"
import { OptionItem } from "app/components/BSelect"

export const PrimaryDomain = () => {
  return (
    <Wrapper>
      <Text type="h24r" content="Set Primary Domain" mb={40} />

      <SelectWrapper>
        <Text
          type="p14r"
          content="Select on your XName Domain (0)"
          color={CssVariables.Neutral400}
          mb={8}
        />
        <StyledBSelect
          options={[
            <OptionItem>No data</OptionItem>,
            <OptionItem>JamesOX</OptionItem>,
            <OptionItem>GrootOX</OptionItem>,
          ]}
        />
      </SelectWrapper>

      <Spacer vSpace={CssVariables.Space24} />

      <Bottom>
        <FontAwesomeIcon
          fontSize="20px"
          icon="fa-light fa-trash"
          color={CssVariables.Neutral500}
        />

        <ButtonsWrapper>
          <BButton
            btn="secondary"
            content="Cancel"
            width="128px"
            borderColor={CssVariables.White}
          />
          <BButton btn="primary" content="Save" width="128px" />
        </ButtonsWrapper>
      </Bottom>
    </Wrapper>
  )
}
