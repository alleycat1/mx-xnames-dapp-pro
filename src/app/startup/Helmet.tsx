import { Helmet as Helmett } from "react-helmet-async"
import { translations } from "locales/i18n"
import { useTranslation } from "react-i18next"

export const Helmet = () => {
  const { t } = useTranslation()

  return (
    <Helmett
      titleTemplate="%s - XNames"
      defaultTitle={t(translations.HomePage.home())}
    >
      <meta name="description" content="XNames" />
    </Helmett>
  )
}
