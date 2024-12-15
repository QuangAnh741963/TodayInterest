import { Platform, TextStyle } from "react-native"
import { BorderRadiuses, Spacings, Typography } from "react-native-ui-lib"

import { horizontalScale, moderateScale, verticalScale } from "./rnuiScaling"
import { Dictionary } from "lodash"
import { typography } from "./typography"

const typo: Dictionary<TextStyle> = {
  fs10: { fontSize: moderateScale(10) },
  fs11: { fontSize: moderateScale(11) },
  fs12: { fontSize: moderateScale(12) },
  fs13: { fontSize: moderateScale(13) },
  fs14: { fontSize: moderateScale(14) },
  fs15: { fontSize: moderateScale(15) },
  fs16: { fontSize: moderateScale(16) },
  fs17: { fontSize: moderateScale(17) },
  fs18: { fontSize: moderateScale(18) },
  fs20: { fontSize: moderateScale(20) },
  fs24: { fontSize: moderateScale(24) },
  fs26: { fontSize: moderateScale(26) },
  fs28: { fontSize: moderateScale(28) },
  fs30: { fontSize: moderateScale(30) },
  fs32: { fontSize: moderateScale(32) },
  fs36: { fontSize: moderateScale(36) },
  fs40: { fontSize: moderateScale(40) },
  fs42: { fontSize: moderateScale(42) },
  fs48: { fontSize: moderateScale(48) },
  fs50: { fontSize: moderateScale(50) },
  fs60: { fontSize: moderateScale(60) },
  fs64: { fontSize: moderateScale(64) },
  fs70: { fontSize: moderateScale(70) },
  fs72: { fontSize: moderateScale(72) },
  fs80: { fontSize: moderateScale(80) },
  fs90: { fontSize: moderateScale(90) },
  fs96: { fontSize: moderateScale(96) },
  rounded0: { borderRadius: moderateScale(0) },
  rounded4: { borderRadius: moderateScale(4) },
  rounded8: { borderRadius: moderateScale(8) },
  rounded12: { borderRadius: moderateScale(12) },
  rounded16: { borderRadius: moderateScale(16) },
  rounded100: { borderRadius: 999 },
  fw900: { fontFamily: typography.primary.bold, fontWeight: "900" },
  fw800: { fontFamily: typography.primary.bold, fontWeight: "800" },
  fw700: {
    fontFamily: typography.primary.bold,
    fontWeight: Platform.select({ ios: "700", android: "bold" }) || "700",
  },
  fw600: {
    fontFamily: typography.primary.semiBold,
    fontWeight: Platform.select({ ios: "600", android: "bold" }) || "600",
  },
  fw500: { fontFamily: typography.primary.medium },
  fw400: { fontFamily: typography.primary.normal },
  fw300: { fontFamily: typography.primary.light },
  txCenter: { textAlign: "center" },
  txRight: { textAlign: "right" },
}

export const baseDS: Dictionary<TextStyle> = {
  bodySmall: { ...typo.fs14, lineHeight: moderateScale(20) },
  body: { ...typo.fs16, lineHeight: moderateScale(24) },
  buttonLabel: { ...typo.fw600, lineHeight: moderateScale(24) },
  h1: { ...typo.fs24, lineHeight: moderateScale(32) },
  h2: { ...typo.fs20, lineHeight: moderateScale(28) },
  h3: { ...typo.fs18, lineHeight: moderateScale(24) },
  h4: { ...typo.fs16, lineHeight: moderateScale(24) },
  h5: { ...typo.fs14, lineHeight: moderateScale(20) },
  h6: { ...typo.fs12, lineHeight: moderateScale(16) },
  h7: { ...typo.fs10, lineHeight: moderateScale(14) },
  displaySmall: { ...typo.fs24, lineHeight: moderateScale(32) },
  display: { ...typo.fs28, lineHeight: moderateScale(36) },
  displayLarge: { ...typo.fs32, lineHeight: moderateScale(40) },
  buttonLable: { ...typo.fw600, lineHeight: moderateScale(24) },
  caption: { ...typo.fs12, lineHeight: moderateScale(16) },
}

export const designSystemTypo: Dictionary<TextStyle> = {
  bodySmallRegular: { ...baseDS.bodySmall, ...typo.fw400 },
  bodySmallMedium: { ...baseDS.bodySmall, ...typo.fw500 },
  bodyRegular: { ...baseDS.body, ...typo.fw400 },
  buttonLabelXSmall: { ...baseDS.buttonLabel, ...typo.fs10, lineHeight: moderateScale(12) },
  buttonLabelSmall: { ...baseDS.buttonLabel, ...typo.fs12, lineHeight: moderateScale(16) },
  buttonLabelMedium: { ...baseDS.buttonLabel, ...typo.fs14 },
  buttonLabelLarge: { ...baseDS.buttonLabel, ...typo.fs16 },
  displaySemibold: { ...baseDS.display, ...typo.fw600 },
  captionMedium: { ...baseDS.caption, ...typo.fw500 },
}

const loadTypographies = { ...typo, ...baseDS, ...designSystemTypo }

const generateSpace = (options: {
  key: string
  max?: number
  size?: number
  scale?: (number: number) => number
}) => {
  const result: Record<string, number> = {}
  const { key, max = 10, size = 1, scale } = options
  for (let index = 1; index <= max; index++) {
    const space = size || 4
    const value = space * index
    result[`${key}${index}`] = scale ? scale(value) : value
  }
  return result
}

const loadSpacings = {
  ...generateSpace({ key: "s", max: 10, size: 4, scale: horizontalScale }),
  ...generateSpace({ key: "sv", max: 10, size: 4, scale: verticalScale }),
  ...generateSpace({ key: "hs", max: 1000, size: 1, scale: horizontalScale }),
  ...generateSpace({ key: "vs", max: 1000, size: 1, scale: verticalScale }),
}

const loadBorders = {
  rounded0: 0,
  rounded2: Platform.select({ ios: 3, android: 2 }) || 2,
  rounded6: 6,
  rounded8: Platform.select({ ios: 9, android: 8 }) || 8,
  rounded12: 12,
  rounded16: Platform.select({ ios: 15, android: 16 }) || 16,
  rounded20: 20,
  rounded100: 999,
}

export const initTheme = () => {
  BorderRadiuses.loadBorders(loadBorders)
  Typography.loadTypographies(loadTypographies)
  Spacings.loadSpacings(loadSpacings)
}
