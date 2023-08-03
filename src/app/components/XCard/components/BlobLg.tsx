export const BlobLg = ({ color }: { color: string }) => {
  return (
    <svg
      width="100%"
      height="346"
      viewBox="0 0 474 346"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_948_61572)">
        <path
          d="M-6.81623 100.821C-54.8722 112.992 -108.354 216.575 -129.088 266.846C-108.309 386.731 114.795 171.907 108.376 122.497C101.979 73.2657 53.606 85.5176 -6.16392 100.656L-6.81623 100.821Z"
          fill={color}
        />
        <path
          d="M60.7315 369.181C263.793 295.468 239.268 149.222 429.335 271.453C609.926 387.59 -95.714 513.062 60.7315 369.181Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_f_948_61572"
          x="-215.908"
          y="0.480865"
          width="761.864"
          height="520.032"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="43.41"
            result="effect1_foregroundBlur_948_61572"
          />
        </filter>
      </defs>
    </svg>
  )
}
