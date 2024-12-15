import * as React from "react"
import { observer } from "mobx-react-lite"
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextInput,
  TextStyle,
  ViewStyle,
} from "react-native"
import { colors } from "app/theme"
import { View } from "./View"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useRef } from "react"
import { moderateScale } from "@/theme/rnuiScaling"
import { Icon } from "./Icon"

const searchIcon = require("../../assets/app/common/search-icon.png")

export interface SearchFieldProps {
  text?: string
  setText?: (text: string) => void
  placeholder?: string
}

export const SearchField = observer(function SearchField(props: SearchFieldProps) {
  const inputRef = useRef<TextInput>(null)

  function focusInput() {
    inputRef.current?.focus()
  }

  const render = () => {
    return (
      <TouchableOpacity activeOpacity={1} onPress={focusInput}>
        <View style={$searchField} row centerV>
          <Icon source={searchIcon} size={moderateScale(20)} containerSize={moderateScale(20)} />
          <View marginR-hs8 />
          <RNTextInput
            ref={inputRef}
            underlineColorAndroid={colors.transparent}
            textAlignVertical="center"
            placeholder={props.placeholder}
            style={$textStyle}
            value={props.text}
            onChangeText={props.setText}
          />
        </View>
      </TouchableOpacity>
    )
  }

  return render()
})

const $searchField: ViewStyle = {
  backgroundColor: colors.palette.background50,
  borderRadius: moderateScale(8),
  paddingVertical: moderateScale(10),
  paddingHorizontal: moderateScale(8),
  shadowColor: colors.palette.purple410,
  shadowOffset: {
    width: 4,
    height: 4,
  },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 8,
}

const $textStyle: TextStyle = {
  fontFamily: "Poppins_400Regular",
  fontSize: moderateScale(14),
  fontWeight: "400",
  lineHeight: moderateScale(16),
  color: colors.palette.neutral400,
}
