import * as React from "react"
import { ComponentType } from "react"
import { Image, ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from "react-native"
import { TouchableOpacity, TouchableOpacityProps } from "./TouchableOpacity"
import { moderateScale } from "app/theme/rnuiScaling"
import { View, ViewProps } from "./View"

export type IconTypes = keyof typeof iconRegistry

interface IconProps extends TouchableOpacityProps {
  source?: ImageSourcePropType
  icon?: IconTypes
  color?: string
  size?: number
  containerSize?: number
  style?: StyleProp<ImageStyle>
  containerStyle?: StyleProp<ViewStyle>
  onPress?: TouchableOpacityProps["onPress"]
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Icon/}
 * @param {IconProps} props - The props for the `Icon` component.
 * @returns {JSX.Element} The rendered `Icon` component.
 */
export function Icon(props: IconProps) {
  const {
    source,
    icon,
    color,
    size = moderateScale(24),
    containerSize = moderateScale(48),
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props

  const isPressable = !!WrapperProps.onPress
  const Wrapper = (WrapperProps?.onPress ? TouchableOpacity : View) as ComponentType<
    TouchableOpacityProps | ViewProps
  >

  const $imageStyle: StyleProp<ImageStyle> = [
    $imageStyleBase,
    color !== undefined && { tintColor: color },
    size !== undefined && { width: size, height: size },
    $imageStyleOverride,
  ]
  const imageSource = icon ? iconRegistry[icon] : source
  const expandSize = moderateScale(10)

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
      hitSlop={
        isPressable
          ? { top: expandSize, bottom: expandSize, left: expandSize, right: expandSize }
          : undefined
      }
    >
      <View width={containerSize} height={containerSize} center>
        <Image style={$imageStyle} source={imageSource} />
      </View>
    </Wrapper>
  )
}

export const iconRegistry = {
  back: require("../../assets/icons/back.png"),
  bell: require("../../assets/icons/bell.png"),
  caretLeft: require("../../assets/icons/caretLeft.png"),
  caretRight: require("../../assets/icons/caretRight.png"),
  check: require("../../assets/icons/check.png"),
  hidden: require("../../assets/icons/hidden.png"),
  ladybug: require("../../assets/icons/ladybug.png"),
  lock: require("../../assets/icons/lock.png"),
  menu: require("../../assets/icons/menu.png"),
  more: require("../../assets/icons/more.png"),
  settings: require("../../assets/icons/settings.png"),
  view: require("../../assets/icons/view.png"),
  x: require("../../assets/icons/x.png"),
}

const $imageStyleBase: ImageStyle = {
  resizeMode: "contain",
}
