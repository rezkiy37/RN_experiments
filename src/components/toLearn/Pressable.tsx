import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'



export default (() => {

  return (
    <Pressable
      onPress={() => console.log('press')}
      style={({ pressed }) => [
        styles.common,
        (pressed ? styles.pressed : styles.unpressed)
      ]}
    >
      {({ pressed }) => (
        <Text>
          {pressed ? 'Pressed!' : 'Press me :)'}
        </Text>
      )}
    </Pressable>
  )
}) as React.FC


const styles = StyleSheet.create({
  common: {
    width: 100,
    height: 50,
    borderRadius: 5
  },
  pressed: {
    backgroundColor: 'red'
  },
  unpressed: {
    backgroundColor: 'blue'
  }
})