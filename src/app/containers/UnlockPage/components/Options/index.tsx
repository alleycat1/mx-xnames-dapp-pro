import { Spacer } from "app/components/common/Spacer"
import { Option, OptionsContainer, Question, QuestionWrapper } from "./style"
import { Text } from "app/components/Text"
import { CssVariables } from "styles/glob-styles"

export const Options = () => {
  return (
    <>
      <Text ta="c">Other options</Text>

      <Spacer vSpace={CssVariables.Space16} />

      <OptionsContainer>
        <Option>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="key"
            className="svg-inline--fa fa-key "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"
            ></path>
          </svg>
          <Text color={CssVariables.White}>Connect with Keystore</Text>
        </Option>

        <Option>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="file-lines"
            className="svg-inline--fa fa-file-lines "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
            ></path>
          </svg>
          <Text color={CssVariables.White}>Connect with PEM</Text>
        </Option>
      </OptionsContainer>

      <Spacer vSpace={CssVariables.Space56} />

      <QuestionWrapper>
        <Question>
          <Text>Don't have a wallet?</Text>
          <Text color={CssVariables.Cyan}>Create new one</Text>
        </Question>
        <Question>
          <Text>Got a seed phrase</Text>
          <Text color={CssVariables.Cyan}>Restore your wallet</Text>
        </Question>
      </QuestionWrapper>
    </>
  )
}
