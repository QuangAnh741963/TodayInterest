import * as React from "react"
import { observer } from "mobx-react-lite"
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps } from "react-native"
import { colors } from "app/theme"

export type TextInputProps = RNTextInputProps & {
  forwardRef?: React.MutableRefObject<RNTextInput>
  // custom props
}

export const TextInput = observer(function TextInput(props: TextInputProps) {
  const { forwardRef, ...rest } = props

  const render = () => {
    return (
      <RNTextInput
        ref={forwardRef}
        underlineColorAndroid={colors.transparent}
        textAlignVertical="center"
        placeholderTextColor={colors.textDim}
        {...rest}
      />
    )
  }

  return render()
})
