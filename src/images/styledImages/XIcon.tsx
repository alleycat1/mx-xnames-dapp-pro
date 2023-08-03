export type XIconProps = {
  width?: string
  height?: string
}

export const XIcon = ({ width = "38", height = "33" }: XIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.0705 16.8049L37.3836 6.79599L34.6411 0.742188L19.7033 7.68078C19.3187 7.85965 18.8924 7.85965 18.5076 7.68078L3.5658 0.742188L0.823242 6.79599L17.1364 16.8049L0.823242 26.8091L3.5658 32.8628L18.5035 25.9243C18.8882 25.7452 19.3145 25.7452 19.6991 25.9243L34.6369 32.8628L37.3794 26.8091L21.0662 16.8L21.0705 16.8049Z"
        fill="url(#paint0_linear_948_61571)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_948_61571"
          x1="34.5851"
          y1="5.35744"
          x2="11.5126"
          y2="35.1444"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#23FF7B" />
          <stop stopColor="#23FF7B" />
          <stop offset="0.272439" stopColor="#23FF7B" />
          <stop offset="0.479167" stopColor="#34B1CD" />
          <stop offset="0.648821" stopColor="#A855FF" />
          <stop offset="1" stopColor="#DA45FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
