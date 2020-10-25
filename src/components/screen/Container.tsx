import React from 'react'
import { StyleSheet, View } from 'react-native'


export default (({
  children
}) => {
  return (
    <View
      style={styles.container}
    >
      {children}
    </View>
  )
}) as React.FC

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'lightgreen'
  }
})