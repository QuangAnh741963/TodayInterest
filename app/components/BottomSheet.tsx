import * as React from "react"
import { observer } from "mobx-react-lite"
import { Screen } from "./Screen"
import { ViewStyle } from "react-native"
import { colors } from "app/theme"
import { TouchableOpacity } from "./TouchableOpacity"
import { AppNavigationProps } from "app/navigators"
import { useNavigation } from "@react-navigation/native"
import { View } from "./View"
import { SafeAreaViewTop } from "./SafeAreaView"

export interface BottomSheetProps {
  children: React.ReactNode
}

export const BottomSheet = observer(function BottomSheet(props: BottomSheetProps) {
  const { children } = props
  const navigation: AppNavigationProps = useNavigation()

  const render = () => {
    return (
      <Screen style={$root} preset="fixed" backgroundColor={colors.palette.overlayScrim}>
        <SafeAreaViewTop />
        <View marginT-vs22 />
        <View flex backgroundColor={colors.transparent}>
          <TouchableOpacity flex onPress={() => navigation.goBack()} activeOpacity={1} />
        </View>
        <View backgroundColor={colors.palette.background50} style={$container}>
          {children}
        </View>
      </Screen>
    )
  }

  return render()
})

const $root: ViewStyle = {
  flex: 1,
}

const $container: ViewStyle = {
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  overflow: "hidden",
}
