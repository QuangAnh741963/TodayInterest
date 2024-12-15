import * as React from "react"
import { observer } from "mobx-react-lite"
import { View as RNView, ViewProps as RNViewProps } from "react-native-ui-lib"

export type ViewProps = RNViewProps & {
  // custom type
}

export const View = observer(function View(props: ViewProps) {
  const { ...rest } = props

  const render = () => {
    return <RNView {...rest} />
  }

  return render()
})
