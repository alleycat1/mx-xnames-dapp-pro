export const BlobSm = ({ color }: { color: string }) => {
  return (
    <svg
      width="100%"
      height="128"
      viewBox="0 0 216 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_964_2397)">
        <path
          d="M-3.43189 46.3837C-25.4252 51.9538 -49.9019 99.3599 -59.391 122.367C-49.8813 177.233 52.2248 78.917 49.2869 56.3038C46.3596 33.7726 24.221 39.3798 -3.13334 46.308L-3.43189 46.3837Z"
          fill={color}
        />
        <path
          d="M27.4821 169.201C120.415 135.466 109.191 68.5347 196.178 124.475C278.827 177.627 -44.117 235.05 27.4821 169.201Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_f_964_2397"
          x="-99.1247"
          y="0.462189"
          width="348.675"
          height="237.998"
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
            stdDeviation="19.8671"
            result="effect1_foregroundBlur_964_2397"
          />
        </filter>
      </defs>
    </svg>
  )
}
