import React from 'react'
import { PressableProps, TouchableOpacity } from 'react-native'


export default (() => {

  const Events: Pick<PressableProps, 'onPress' | 'onLongPress'> = {
    onPress: () => {

    },
    onLongPress: () => {

    }
  }

  return (
    <TouchableOpacity
      {...Events}
    />
  )
}) as React.FC