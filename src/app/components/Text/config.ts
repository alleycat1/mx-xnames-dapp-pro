import { TextConfig } from "./type"

/**
 * ## Font Weight Map ##
 * --> 700 - bold - b
 * --> 600 - medium - m
 * --> 500 - regular - r
 * --> 400 - small - s
 */

export const textConfig: TextConfig = {
  // Heading type scales.

  // h1
  h77b: { fs: 77, fw: 700, lh: 90, as: "h1" },
  h77m: { fs: 77, fw: 600, lh: 90, as: "h1" },
  h77r: { fs: 77, fw: 500, lh: 90, as: "h1" },
  h77s: { fs: 77, fw: 400, lh: 90, as: "h1" },

  // h2
  h60b: { fs: 60, fw: 700, lh: 72, as: "h2" },
  h60m: { fs: 60, fw: 600, lh: 72, as: "h2" },
  h60r: { fs: 60, fw: 500, lh: 72, as: "h2" },
  h60s: { fs: 60, fw: 400, lh: 72, as: "h2" },

  h56b: { fs: 56, fw: 700, lh: 68, as: "h2" },
  h56m: { fs: 56, fw: 600, lh: 68, as: "h2" },
  h56r: { fs: 56, fw: 500, lh: 68, as: "h2" },
  h56s: { fs: 56, fw: 400, lh: 68, as: "h2" },

  // h3
  h48b: { fs: 48, fw: 700, lh: 60, as: "h3" },
  h48m: { fs: 48, fw: 600, lh: 60, as: "h3" },
  h48r: { fs: 48, fw: 500, lh: 60, as: "h3" },
  h48s: { fs: 48, fw: 400, lh: 60, as: "h3" },

  h40b: { fs: 40, fw: 700, lh: 44, as: "h3" },
  h40m: { fs: 40, fw: 400, lh: 44, as: "h3" },
  h40r: { fs: 40, fw: 500, lh: 44, as: "h3" },
  h40s: { fs: 40, fw: 400, lh: 44, as: "h3" },

  // h4
  h36b: { fs: 36, fw: 700, lh: 44, as: "h4" },
  h36m: { fs: 36, fw: 600, lh: 44, as: "h4" },
  h36r: { fs: 36, fw: 500, lh: 44, as: "h4" },
  h36s: { fs: 36, fw: 400, lh: 44, as: "h4" },

  h32b: { fs: 32, fw: 700, lh: 41, as: "h4" },
  h32m: { fs: 32, fw: 600, lh: 41, as: "h4" },
  h32r: { fs: 32, fw: 500, lh: 41, as: "h4" },
  h32s: { fs: 32, fw: 400, lh: 41, as: "h4" },

  // h5
  h30b: { fs: 30, fw: 700, lh: 38, as: "h5" },
  h30m: { fs: 30, fw: 600, lh: 38, as: "h5" },
  h30r: { fs: 30, fw: 500, lh: 38, as: "h5" },
  h30s: { fs: 30, fw: 400, lh: 38, as: "h5" },

  // h6
  h24b: { fs: 24, fw: 700, lh: 32, as: "h6" },
  h24m: { fs: 24, fw: 600, lh: 32, as: "h6" },
  h24r: { fs: 24, fw: 500, lh: 32, as: "h6" },
  h24s: { fs: 24, fw: 400, lh: 32, as: "h6" },

  // Paragraph type scales.

  p20b: { fs: 20, fw: 700, lh: 30, as: "p" },
  p20m: { fs: 20, fw: 600, lh: 30, as: "p" },
  p20r: { fs: 20, fw: 500, lh: 30, as: "p" },
  p20s: { fs: 20, fw: 400, lh: 30, as: "p" },

  p18b: { fs: 18, fw: 700, lh: 28, as: "p" },
  p18m: { fs: 18, fw: 600, lh: 28, as: "p" },
  p18r: { fs: 18, fw: 500, lh: 28, as: "p" },
  p18s: { fs: 18, fw: 400, lh: 28, as: "p" },

  p16b: { fs: 16, fw: 700, lh: 24, as: "p" },
  p16m: { fs: 16, fw: 600, lh: 24, as: "p" },
  p16r: { fs: 16, fw: 500, lh: 24, as: "p" },
  p16s: { fs: 16, fw: 400, lh: 24, as: "p" },

  p14b: { fs: 14, fw: 700, lh: 20, as: "p" },
  p14m: { fs: 14, fw: 600, lh: 20, as: "p" },
  p14r: { fs: 14, fw: 500, lh: 20, as: "p" },
  p14s: { fs: 14, fw: 400, lh: 20, as: "p" },

  p12b: { fs: 12, fw: 700, lh: 18, as: "p" },
  p12m: { fs: 12, fw: 600, lh: 18, as: "p" },
  p12r: { fs: 12, fw: 500, lh: 18, as: "p" },
  p12s: { fs: 12, fw: 400, lh: 18, as: "p" },
}

export const textAlign = {
  l: "left",
  c: "center",
  r: "right",
}

export const fontFamily = {
  roobertPro: "Roobert PRO, sans-serif",
  inter: "'Inter', sans-serif",
}

/**
 * h1 -> 61 to infinity
 * h2 -> 48 - 60
 * h3 ->
 * h4 ->
 * h5 ->
 * h6 -> 24
 *
 *
 * Element = h | p
 * Size = number
 * Weight = b | m | r | s
 * LineHeight = number
 */
