import { observer } from "mobx-react-lite" // @mst remove-current-line
import { FC } from "react"
import { ViewStyle } from "react-native"
import { Button, SafeAreaViewTop, Screen, SearchField, Text, View } from "@/components"
import { AppStackScreenProps } from "../navigators"
import { colors } from "@/theme"
import React from "react"
import { translate } from "@/i18n"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
  _props: WelcomeScreenProps,
) {
  const [text, setText] = React.useState("")
  return (
    <Screen style={$root}>
      <SafeAreaViewTop />
      <View backgroundColor={colors.palette.background100} paddingH-hs12>
        <Text fw500 bodySmall color={colors.palette.neutral800} text="Welcome" />
        <Button tx="common.OK" disabled={false} />
        <View marginT-vs12 />
        <Button tx="common.OK" disabled={true} />
        <View marginT-vs12 />
        <SearchField text={text} setText={setText} placeholder={translate("common.search")} />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
