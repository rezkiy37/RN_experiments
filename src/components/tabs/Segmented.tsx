import React, {
  useState
} from 'react'

import SegmentedControl, {
  NativeSegmentedControlIOSChangeEvent
} from '@react-native-community/segmented-control'

import {
  View,
  NativeSyntheticEvent,
  StyleSheet,
} from 'react-native'



export default (() => {

  const Values = ['First', 'Second', 'Three']

  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const selectHandler = (e: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>): void => {
    console.log('Event', e)
    setSelectedIndex(e.nativeEvent.selectedSegmentIndex)
  }

  return (
    <View
      style={styles.container}
    >
      <SegmentedControl
        // enabled={false}
        // momentary={true}
        appearance='light'
        values={Values}
        selectedIndex={selectedIndex}
        onChange={selectHandler}
      />
    </View>
  )
}) as React.FC


const styles = StyleSheet.create({
  container: {
    width: '100%',
  }
})