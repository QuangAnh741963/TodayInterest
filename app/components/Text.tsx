import i18n from "i18n-js"
import React from "react"
import { StyleProp, TextStyle } from "react-native"
import { translate, TxKeyPath } from "../i18n"
import { RecorderProps, Text as UIText, TextProps as UITextProps } from "react-native-ui-lib"
import { colors } from "../theme"

export type TextProps = UITextProps &
  RecorderProps & {
    tx?: TxKeyPath
    text?: string
    txOptions?: i18n.TranslateOptions
    style?: StyleProp<TextStyle>
    children?: React.ReactNode
  }

export function Text(props: TextProps) {
  const { tx, txOptions, text, children, style: $styleOverride, ...rest } = props
  const { fw300, fw500, fw600, fw700, fw800, fw900 } = props as any

  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children
  const usingDefaultFw = !fw300 && !fw500 && !fw600 && !fw700 && !fw800 && !fw900

  return (
    <UIText color={colors.text} {...rest} fw400={usingDefaultFw} style={$styleOverride}>
      {content}
    </UIText>
  )
}
