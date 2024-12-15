// TODO: write documentation for colors and palette in own markdown file and add links from here

export const hexToRgbA = (hex: string, opacity: number) => {
  let c: any
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("")
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = `0x${c.join("")}`
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",")},${opacity})`
  }
  throw new Error("Bad Hex")
}

const palette = {
  neutral50: "#FCFCFD",
  neutral100: "#EFF2F6",
  neutral200: "#DFE5EC",
  neutral300: "#D0D5DD",
  neutral400: "#98A2B3",
  neutral500: "#667085",
  neutral501: "#6B7280",
  neutral600: "#475467",
  neutral700: "#344054",
  neutral800: "#101828",
  neutral900: "#000000",

  purple50: "#FCFAFF",
  purple100: "#F9F5FF",
  purple200: "#F4EBFF",
  purple250: "#BF7CFF",
  purple300: "#9E77ED",
  purple400: "#7F56D9",
  purple410: "#5148A2",
  purple500: "#7F53A2",
  purple550: "#5945FE26",
  purple600: "#602D91",
  purple700: "#422769",
  purple800: "#6941C6",
  purple900: "#9A3CFF",

  orange50: "#FFFAF7",
  orange100: "#FEEDE2",
  orange200: "#FDE0CC",
  orange300: "#F8AB77",
  orange350: "#FE7645",
  orange400: "#F47621",
  orange401: "#D85F0E",
  orange500: "#BD550F",

  yellow300: "#FED645",

  positive100: "#D2F9E2",
  positive200: "#AFD80D",
  positive300: "#C6F01E",
  positive310: "#B0FF42",
  positive350: "#42db60",
  positive400: "#45FE80",
  positive500: "#039855",
  positive700: "#3CA251",

  info100: "#3CE2FF",
  info300: "#2E90FA",
  info400: "#236AE7",
  info500: "#175CD3",
  info600: "#4595FE",

  negative100: "#FFE7E5",
  negative350: "#FE4545",
  negative400: "#F04438",
  nagavite450: "#C52A21",
  negative500: "#D32417",
  warning100: "#FFF1CC",
  warning500: "#CD631B",

  linearBrand100: ["#F8A31D", "#F47621"] as string[],
  linearBrand200: ["#7F53A2", "#422769"] as string[],
  linearDecor100: ["#7F56D9", "#9E77ED"] as string[],
  linearDecor1200: ["#BF7CFF", "#5E01C1"] as string[],
  linearDecor1300: ["#B694FD", "#703FFB"] as string[],
  linearDecor1400: ["#F45A5A", "#CD292A"] as string[],
  linearDecor1500: ["#3CDC7F", "#13A053"] as string[],
  linearDecor1600: ["#F7B060", "#FF6C09"] as string[],
  linearDecor1700: ["#4F73DF", "#0644B6"] as string[],
  linearDecor1800: ["#9FFFB3", "#5945FE"] as string[],

  background50: "#FFFFFF",
  background100: "#FCFCFD",
  background101: "#F6F7F9",
  background200: "#EFF2F6",
  background300: "#5945FE",
  background400: "#76F991",
  background900: "#00000066",

  overlayScrim: hexToRgbA("#000000", 0.6),
  overlay30: hexToRgbA("#FFFFFF", 0.3),
  overlay50: hexToRgbA("#FFFFFF", 0.5),
  overlay70: hexToRgbA("#FFFFFF", 0.7),
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  textWhite: palette.neutral50,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.background50,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  error: palette.negative400,
}
