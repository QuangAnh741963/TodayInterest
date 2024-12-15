import React, { ReactElement } from "react"
import {
  ActivityIndicator,
  ImageSourcePropType,
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native"
import { TouchableOpacity, TouchableOpacityProps } from "./TouchableOpacity"
import { moderateScale, verticalScale } from "app/theme/rnuiScaling"
import { Icon } from "./Icon"
import { View } from "./View"
import { TextProps, Text } from "./Text"
import { colors } from "@/theme"

type ButtonState = "default" | "press"

export interface ButtonAccessoryProps {
  style: StyleProp<any>
  pressableState: PressableStateCallbackType
  disabled?: boolean
}

export interface ButtonProps extends TouchableOpacityProps {
  tx?: TextProps["tx"]
  textPreset?: TextProps
  style?: StyleProp<ViewStyle>
  disabled?: boolean
  icon?: ImageSourcePropType
  iconSize?: number
  isLoading?: boolean
}

export function Button(props: ButtonProps) {
  const {
    tx,
    textPreset,
    style: $viewStyleOverride,
    disabled,
    icon,
    iconSize,
    isLoading,
    ...rest
  } = props
  const [state, setState] = React.useState<ButtonState>("default")
  const $disableStyle = disabled && { backgroundColor: colors.palette.neutral800 }
  const $disableTextStyle = disabled && { color: colors.palette.neutral100 }
  const $type: ViewStyle = {
    ...(state === "press" && { backgroundColor: colors.palette.positive200 }),
    ...(state === "default" && { backgroundColor: colors.palette.positive310 }),
  }
  const $viewStyle = [$viewStyleOverride, $type, $disableStyle]
  const $textStyle = [$disableTextStyle, textPreset && { ...textPreset }].filter(
    Boolean,
  ) as TextStyle[]

  const render = () => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={() => setState("press")}
        onPressOut={() => setState("default")}
        disabled={isLoading || disabled}
        {...rest}
      >
        <View br100 row center height={verticalScale(48)} style={$viewStyle}>
          {icon && (
            <Icon
              source={icon}
              size={iconSize}
              containerSize={iconSize ? iconSize : moderateScale(32)}
            />
          )}
          <View marginL-hs4 />
          <Text fw500 bodySmall color={colors.palette.neutral700} tx={tx} style={$textStyle} />
          {isLoading && renderLoading()}
        </View>
      </TouchableOpacity>
    )
  }

  const renderLoading = () => {
    return (
      <View marginL-vs8>
        <ActivityIndicator />
      </View>
    )
  }

  return render()
}
