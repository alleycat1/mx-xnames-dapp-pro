import {
  Description,
  FooterBox,
  FooterItem,
  FooterWrapper,
  ItemTitle,
  SubTitle,
  JoinTitle,
  LinkList,
  ListItem,
  Logo,
  Socials,
} from "./style"
import { FC } from "react"
import { Props } from "./types"
import { Box, Container } from "@material-ui/core"
import { NormalInput } from "../Inputs/NormalInput"
import { BButton } from "../BButton"
import { footerLinks, socialsLink } from "./constants"
import { Link } from "react-router-dom"

const Footer: FC<Props> = () => {
  return (
    <FooterBox>
      <Container>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" justifyContent="center" flexDirection="column">
            <JoinTitle>Join our newsletter</JoinTitle>
            <SubTitle>
              We’ll send you a nice letter occasionally. No spam.
            </SubTitle>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <NormalInput placeholder="Enter your email" type="email" />
            <Box ml={2}>
              <BButton btn="primary" btnSize="md">
                Subscribe
              </BButton>
            </Box>
          </Box>
        </Box>
        <FooterWrapper>
          <FooterItem>
            <Logo>Concordium Name Service</Logo>
            <Description>
              Human-readable wallet addresses and DNS on the Concordium Network.
              <br />
              <br />
              Contact us at{" "}
              <a href="mailto:hellocns@bictory.io">hellocns@bictory.io</a>
            </Description>
          </FooterItem>
          {footerLinks.map((item) => (
            <FooterItem key={item.title}>
              <ItemTitle>{item.title}</ItemTitle>
              <LinkList>
                {item.links.map((link) => (
                  <ListItem key={link.id}>
                    <Link target={link.target} to={link.path}>
                      {link.value}
                    </Link>
                  </ListItem>
                ))}
              </LinkList>
            </FooterItem>
          ))}
        </FooterWrapper>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mt={5}
        >
          <SubTitle>© 2022 Bictory Finance. All rights reserved.</SubTitle>
          <Socials>
            {socialsLink.map(({ id, path, target, Icon }) => (
              <a key={id} href={path} target={target} rel="noopener noreferrer">
                <Icon />
              </a>
            ))}
          </Socials>
        </Box>
      </Container>
    </FooterBox>
  )
}

export default Footer
