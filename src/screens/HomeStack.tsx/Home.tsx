import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View, Button } from 'react-native'
import Container from '../../components/screen/Container'
import { EDrawerStacks, EHomeScreens, ESettingsScreens, INavigationProps } from '../../types/navigation'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default (({
  navigation
}) => {

  const settingsHandler = (): void => {
    navigation.navigate(EDrawerStacks.SettingsStack, {
      screen: ESettingsScreens.SettingsScreen,
      params: {
        from: EHomeScreens.HomeScreen
      }
    })
  }

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'pink',
        padding: 16,
        height: 700,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );


  const sheetRef = React.useRef(null);

  return (
    <Container>
      <TouchableOpacity
        onPress={settingsHandler}
      >
        <Text>
          To {ESettingsScreens.SettingsScreen}
        </Text>
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: 'papayawhip',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          title="Open Bottom Sheet"
          onPress={() => (sheetRef?.current as any).snapTo(0)}
        />
      </View>


      <BottomSheet
        ref={sheetRef}
        snapPoints={[700, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </Container>
  )
}) as React.FC<INavigationProps>