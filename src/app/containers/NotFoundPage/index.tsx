import {
  Wrapper,
  Title,
  Content,
  SubTitle,
  Buttons,
  Warning,
  Img,
} from "./style"

import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import { Box, Container } from "@material-ui/core"
import notFoundImg from "images/404.svg"
import { BButton } from "app/components/BButton"
import { useTranslation } from "react-i18next"
import { translations } from "locales/i18n"
import { goBack } from "connected-react-router"
import { useDispatch } from "react-redux"

export function NotFoundPage() {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const hanldeGoBack = () => dispatch(goBack())

  return (
    <>
      <Helmet>
        <title>{t(translations.NotFoundPage.HeadTitle())}</title>
        <meta
          name="description"
          content={t(translations.NotFoundPage.HeadDescription())}
        />
      </Helmet>
      <Container>
        <Wrapper>
          <Content>
            <Warning>{t(translations.NotFoundPage.Warning())}</Warning>
            <Title>{t(translations.NotFoundPage.Title())}</Title>
            <SubTitle>{t(translations.NotFoundPage.SubTitle())}</SubTitle>
            <Buttons>
              <BButton
                onClick={hanldeGoBack}
                btn="primary"
                btnSize="md"
                width="max-content"
              >
                <ArrowBackIcon fontSize="small" />
                <Box ml={1}>{t(translations.NotFoundPage.GoBackLabel())}</Box>
              </BButton>
              <Link to="/">
                <BButton
                  content={t(translations.NotFoundPage.GoHomeLabel())}
                  btn="secondary"
                  btnSize="md"
                  width="max-content"
                />
              </Link>
            </Buttons>
          </Content>
          <Img src={notFoundImg} alt={t(translations.NotFoundPage.Warning())} />
        </Wrapper>
      </Container>
    </>
  )
}
