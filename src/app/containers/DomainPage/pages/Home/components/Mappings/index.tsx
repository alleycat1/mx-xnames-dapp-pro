import styled from "styled-components"
import { Text } from "app/components/Text"
import { PageLayer } from "app/components/common/PageLayer"
import { CssVariables } from "styles/glob-styles"
import { MappingContent } from "./TabsAndContent"

export const Mappings = () => {
  const content = {
    title: "Mappings",
    text: "Attach records such as wallet addresses, URLs and texts to your domain name.",
  }

  return (
    <Layer>
      <Title
        type="p20r"
        content={content.title}
        color={CssVariables.Neutral300}
        mb="10px"
      />

      <Text
        type="p12r"
        content={content.text}
        color={CssVariables.Neutral600}
        mb="15px"
      />

      <MappingContent />
    </Layer>
  )
}

const Layer = styled(PageLayer)``

const Title = styled(Text)``
