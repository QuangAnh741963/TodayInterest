import * as React from "react"
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from "react-native-ui-lib"
import { observer } from "mobx-react-lite"
import { throttle } from "lodash"

export type TouchableOpacityProps = RNTouchableOpacityProps & {
  // custom type
}

export const TouchableOpacity = observer(function TouchableOpacity(props: TouchableOpacityProps) {
  const { onPress, ...rest } = props
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const callback: () => void = onPress || (() => {})

  const onPressThrottle = React.useCallback(throttle(callback, 1000, { trailing: false }), [
    callback,
  ])

  // Cleanup function khi component unmount
  React.useEffect(() => {
    return () => {
      onPressThrottle.cancel() // Hủy bỏ throttle để tránh memory leaks
    }
  }, [onPressThrottle])

  return <RNTouchableOpacity onPress={onPressThrottle} {...rest} />
})
