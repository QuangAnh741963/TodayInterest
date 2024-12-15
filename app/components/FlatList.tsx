import * as React from "react"
import { observer } from "mobx-react-lite"
import { FlatList as RNFlatList, FlatListProps as RNFlatListProps } from "react-native"

export type FlatListProps<T> = RNFlatListProps<T> & {
  // custom type
}

export const FlatList = observer(function FlatList<T>(props: FlatListProps<T>) {
  const render = () => {
    return (
      <RNFlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        {...props}
      />
    )
  }

  return render()
})
