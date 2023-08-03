import { FAIcon, FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { Text } from "app/components/Text"
import styled from "styled-components"
import { CssVariables } from "styles/glob-styles"
import { jmedia } from "styles/media"

export const TopLeftInfo = () => {
  const list: InfoItemProps[] = [
    {
      icon: "fa-regular fa-star",
      content: "This item has never been sold before",
    },
    {
      icon: "fa-regular fa-hourglass",
      content: "Free Ownership transfer",
    },
    {
      icon: "fa-regular fa-square-arrow-up-right",
      content: "Last Sold for 0.94 usdt",
      reveal: false,
    },
    {
      icon: "fa-regular fa-chart-line-up",
      content: "Listed 200% above the domain floor price",
      reveal: false,
    },
    {
      icon: "fa-regular fa-shield-exclamation",
      content: "✅ Unique ✅ Cross Chain ✅ Resellable",
    },
  ]

  return (
    <Wrapper>
      {list.map((item) => (
        <InfoItem key={item.content} {...item} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  align-content: space-between;
  min-height: 141px;
  border-radius: 16px;
  padding: 20px;
  background-color: ${CssVariables.Neutral900};

  ${jmedia.sm} {
    padding: 10px 8px;
  }
`

// Heads-up =======> InfoItem Section

type InfoItemProps = { content: string; icon: FAIcon; reveal?: boolean }

const InfoItem = ({ icon, content, reveal = true }: InfoItemProps) => {
  if (!reveal) return <></>

  return (
    <ItemWrapper type="p16s" render="div" color={CssVariables.Neutral50}>
      <FontAwesomeIcon icon={icon} width="23px" />
      <span>{content}</span>
    </ItemWrapper>
  )
}

const ItemWrapper = styled(Text)`
  display: flex;
  gap: 10px;
  align-items: center;
`
