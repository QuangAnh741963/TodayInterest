import * as React from "react"
import { observer } from "mobx-react-lite"
import { ScrollView as RNScrollView, ScrollViewProps as RNScrollViewProps } from "react-native"
import { forwardRef } from "react"

export type ScrollViewProps = RNScrollViewProps & {
  // custom type
}

export const ScrollView = observer(
  forwardRef<RNScrollView, ScrollViewProps>(function ScrollView(props, ref) {
    return (
      <RNScrollView
        ref={ref}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        {...props}
      />
    )
  }),
)
