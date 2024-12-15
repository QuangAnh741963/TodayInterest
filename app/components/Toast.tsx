import * as React from "react"
import { ActivityIndicator, TextStyle, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors } from "../theme"
import RNToast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
  InfoToast,
  SuccessToast,
  ToastConfig,
} from "react-native-toast-message"
import { designSystemTypo } from "app/theme/rnuiTheme"
import { horizontalScale, verticalScale } from "app/theme/rnuiScaling"

export interface ToastProps {}

export const Toast = observer(function Toast() {
  const renderSuccess = (props: BaseToastProps) => {
    return (
      <SuccessToast
        {...props}
        style={[$toastContainer, $toastSuccess]}
        text2Style={$text2Style}
        text2Props={{ numberOfLines: 0 }}
      />
    )
  }

  const renderError = (props: BaseToastProps) => {
    return (
      <ErrorToast
        {...props}
        style={[$toastContainer, $toastError]}
        text2Style={$text2Style}
        text2Props={{ numberOfLines: 0 }}
      />
    )
  }

  const renderInfo = (props: BaseToastProps) => {
    return (
      <InfoToast
        {...props}
        style={[$toastContainer, $toastInfo]}
        text2Style={$text2Style}
        text2Props={{ numberOfLines: 0 }}
      />
    )
  }

  const renderLoading = (props: BaseToastProps) => {
    return (
      <BaseToast
        {...props}
        style={[$toastContainer, $toastLoading]}
        text2Style={$text2Style}
        text2Props={{ numberOfLines: 0 }}
        renderLeadingIcon={renderLoadingIcon}
      />
    )
  }

  const renderLoadingIcon = () => {
    return <ActivityIndicator style={$loadingIcon} size="small" color={colors.palette.neutral100} />
  }

  const config: ToastConfig = {
    success: renderSuccess,
    error: renderError,
    info: renderInfo,
    loading: renderLoading,
  }

  return <RNToast config={config} />
})

const $toastContainer: ViewStyle = {
  borderLeftWidth: 0,
  borderLeftColor: colors.transparent,
  height: null,
  marginTop: verticalScale(20),
  paddingHorizontal: verticalScale(12),
}

const $toastSuccess: ViewStyle = {
  backgroundColor: colors.palette.positive350,
}
const $toastError: ViewStyle = {
  backgroundColor: colors.palette.negative350,
}
const $toastInfo: ViewStyle = {
  backgroundColor: colors.palette.warning100,
}
const $toastLoading: ViewStyle = {
  backgroundColor: colors.palette.warning100,
}

const $text2Style: TextStyle = {
  ...designSystemTypo.bodySmallMedium,
  color: colors.textWhite,
  marginVertical: verticalScale(12),
}

const $loadingIcon: ViewStyle = {
  paddingLeft: horizontalScale(16),
}
