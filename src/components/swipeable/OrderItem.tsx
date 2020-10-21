import React from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { Alert, Animated, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { transform } from '@babel/core'



const leftComponents = (
  progressAnimatedValue: Animated.AnimatedInterpolation,
  dragAnimatedValue: Animated.AnimatedInterpolation
): React.ReactNode => {


  const scale = dragAnimatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  })

  return (
    <RectButton
      onPress={() => console.log('press')}
      style={[
        styles.containerStyle,
        {
          flex: 1,
          backgroundColor: '#ffcccb'
        }]
      }
    >
      <Animated.Text
        style={[
          styles.text,
          {
            transform: [{ scale }]
          }
        ]}
      >
        Remove
      </Animated.Text>
    </RectButton>
  )
}

const rightComponents = (
  progressAnimatedValue: Animated.AnimatedInterpolation,
  dragAnimatedValue: Animated.AnimatedInterpolation
): React.ReactNode => {


  const scale = dragAnimatedValue.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  })

  return (
    <RectButton
      onPress={() => console.log('press')}
      style={[
        styles.containerStyle,
        {
          // flex: 1,
          alignItems: 'flex-end',
          backgroundColor: 'lightgreen'
        }]
      }
    >
      <Animated.Text
        style={[
          styles.text,
          {
            transform: [{ scale }]
          }
        ]}
      >
        Archive
      </Animated.Text>
    </RectButton>
  )
}

export default (() => {

  const { width } = useWindowDimensions()

  const leftSwipeHandler = () => {
    Alert.alert('SWIPE!', 'Left swipe :)')
  }

  const rightSwipeHandler = () => {
    Alert.alert('SWIPE!', 'Right swipe :)')
  }

  return (
    <Swipeable
      renderLeftActions={leftComponents}
      renderRightActions={rightComponents}
      onSwipeableLeftOpen={leftSwipeHandler}
      onSwipeableRightOpen={rightSwipeHandler}
    >
      <View
        style={[
          styles.containerStyle,
          { width }
        ]}
      >
        <Text
          style={styles.text}
        >
          Item #1
        </Text>
      </View>
    </Swipeable>
  )
}) as React.FC


const styles = StyleSheet.create({
  rectButton: {
    backgroundColor: 'yellow'
  },
  containerStyle: {
    height: 50,
    padding: 5,
    marginVertical: 10,
    backgroundColor: '#cecece'
  },
  text: {
    fontSize: 28
  }
})
