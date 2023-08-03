import { CssVariables } from "styles/glob-styles"

export default function TelegramIcon({
  fill = CssVariables.Green,
  width = "20px",
  height = "20px",
}: {
  fill?: string
  width?: string
  height?: string
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10.4931" cy="9.64549" r="9.60643" fill="#02002B" />
      <g clipPath="url(#clip0_611_2528)">
        <path
          d="M15.3394 5.02922L5.39808 8.88262C4.99803 9.06207 4.86272 9.42143 5.30139 9.61646L7.85176 10.4311L14.0182 6.60044C14.3549 6.35996 14.6996 6.42409 14.403 6.68863L9.10684 11.5087L8.94048 13.5486C9.09457 13.8635 9.37672 13.865 9.55669 13.7085L11.022 12.3148L13.5314 14.2037C14.1143 14.5506 14.4314 14.3267 14.5568 13.691L16.2029 5.8567C16.3738 5.07419 16.0823 4.72941 15.3394 5.02922Z"
          fill={fill}
        />
      </g>
    </svg>
  )
}
