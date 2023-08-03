import { CssVariables } from "styles/glob-styles"

export default function EyeIcon(props: { color?: CssVariables }) {
  const fill = (props.color ?? CssVariables.White) as string
  return (
    <svg
      width="21"
      height="17"
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4912 2.71746C18.2457 4.03379 19.7395 5.96227 20.8122 8.37409C20.8924 8.55715 20.8924 8.77122 20.8122 8.94556C18.6667 13.7692 14.8471 16.6556 10.5963 16.6556H10.5863C6.34556 16.6556 2.52589 13.7692 0.380465 8.94556C0.300262 8.77122 0.300262 8.55715 0.380465 8.37409C2.52589 3.54948 6.34556 0.673706 10.5863 0.673706H10.5963C12.7217 0.673706 14.7368 1.39047 16.4912 2.71746ZM6.58617 8.66467C6.58617 10.7956 8.38071 12.5294 10.5963 12.5294C12.8019 12.5294 14.5964 10.7956 14.5964 8.66467C14.5964 6.52406 12.8019 4.79026 10.5963 4.79026C8.38071 4.79026 6.58617 6.52406 6.58617 8.66467Z"
        fill={fill}
      />
      <path
        d="M13.0945 8.66156C13.0945 9.98854 11.9716 11.0734 10.5981 11.0734C9.21464 11.0734 8.0918 9.98854 8.0918 8.66156C8.0918 8.49689 8.11185 8.34289 8.14192 8.18791H8.19205C9.30487 8.18791 10.2071 7.33554 10.2473 6.26911C10.3575 6.25071 10.4778 6.24005 10.5981 6.24005C11.9716 6.24005 13.0945 7.32489 13.0945 8.66156Z"
        fill={fill}
      />
    </svg>
  )
}