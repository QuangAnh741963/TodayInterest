import * as React from "react"
import { observer } from "mobx-react-lite"
import { View as RNView, ViewProps as RNViewProps } from "react-native-ui-lib"
import { DimensionValue, ViewStyle } from "react-native"

export type ViewProps = RNViewProps & {
  // custom type
}

export const View = observer(function View(props: ViewProps) {
  const { width, height, style, ...rest } = props

  const $viewStyle: ViewStyle = { width: width as DimensionValue, height: height as DimensionValue }

  const render = () => {
    return <RNView style={[$viewStyle, style]} {...rest} />
  }

  return render()
})
