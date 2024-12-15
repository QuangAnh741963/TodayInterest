import React from "react"
import { observer } from "mobx-react-lite"
import { moderateScale } from "app/theme/rnuiScaling"
import { colors } from "app/theme"
import { ViewStyle } from "react-native"
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated"

export interface SwitchProps {
  value?: boolean
  onColor?: string
  offColor?: string
  onValueChange?: (isEnabled: boolean) => void
}

export const Switch = observer((props: SwitchProps) => {
  const value = props.value ? props.value : false
  const onColor = props.onColor ? props.onColor : colors.palette.background400
  const offColor = props.offColor ? props.offColor : colors.palette.neutral501
  const onBackground = colors.palette.neutral100
  const offBackground = colors.palette.neutral300

  const $animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(value ? onColor : offColor, { duration: 300 }),
  }))

  const $transformStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(value ? 12 : 0, { duration: 300 }),
      },
    ],
    backgroundColor: withTiming(value ? onBackground : offBackground, { duration: 300 }),
  }))

  const render = () => {
    return (
      <Animated.View style={[$backgroundStyle, $animatedStyle]}>
        <Animated.View style={[$circleStyle, $transformStyle]} />
      </Animated.View>
    )
  }

  return render()
})

const $backgroundStyle: ViewStyle = {
  width: moderateScale(28),
  height: moderateScale(14),
  justifyContent: "center",
  borderRadius: 999,
}

const $circleStyle: ViewStyle = {
  width: moderateScale(18),
  height: moderateScale(18),
  justifyContent: "center",
  borderRadius: 999,
}
