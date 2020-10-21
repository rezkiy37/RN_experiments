import React, {
  useRef,
  useState,
  Fragment,
  useEffect,
} from 'react'

import {
  Easing,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'



export default (() => {

  const opacity = useRef(new Animated.Value(1)).current

  const [animation] = useState<Animated.Value>(new Animated.Value(0))

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ["red", "blue", 'pink']
  })

  const width = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [100, 200, 300]
  })

  const height = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [100, 200, 300]
  })

  const [isVisible, toggleVisible] = useState<boolean>(true)

  const pressHandler = (): void => {
    toggleVisible(prev => !prev)
  }

  useEffect(() => {
    Animated.parallel([
      Animated.timing(
        animation, {
        toValue: isVisible ? 3 : 1,
        useNativeDriver: false,
        easing: Easing.linear,
        duration: 500
      }),
    ]).start()

    setTimeout(() => {
      Animated.timing(
        opacity, {
        toValue: isVisible ? 0 : 1,
        useNativeDriver: false,
        easing: Easing.back(1),
        duration: 300
      }).start()
    }, 500)
  }, [isVisible])

  return (
    <Fragment>
      <TouchableWithoutFeedback
        onPress={pressHandler}
      >
        <Animated.View
          style={{
            ...styles.square,
            backgroundColor,
            opacity,
            height,
            width
          }}
        />
      </TouchableWithoutFeedback>
    </Fragment>
  )
}) as React.FC


const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderRadius: 5,
    backgroundColor: 'lightgreen'
  }
})