import { CssVariables } from "styles/glob-styles"

export default function FavoriteIcon(props: {
  color?: string
  width?: string
  height?: string
}) {
  const fill = props.color ?? CssVariables.White
  const width = props.height ?? 24
  const height = props.color ?? 24
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.93542 5.35992V21.1893L11.9903 16.3832L19.0451 21.1893C19.0598 16.5889 19.0804 6.98258 19.0451 5.35992C19.0099 3.73726 17.6782 3.30223 17.0169 3.28754C14.2978 3.27285 8.48929 3.25227 7.00777 3.28754C5.52625 3.32282 5.00891 4.68382 4.93542 5.35992Z"
        stroke="#667085"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  )
}
