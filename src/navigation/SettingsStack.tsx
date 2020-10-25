import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ESettingsScreens, INavigationProps } from '../types/navigation'
import Settings from '../screens/SettingsStack/Settings'
import Smth from '../screens/SettingsStack/Smth'

export default (() => {

  const SettingsStack = createStackNavigator()

  return (
    <SettingsStack.Navigator
      initialRouteName={ESettingsScreens.SettingsScreen}
    >
      <SettingsStack.Screen
        name={ESettingsScreens.SettingsScreen}
        component={Settings}
        options={{
          headerTitle: ESettingsScreens.SettingsScreen
        }}
      />
      <SettingsStack.Screen
        name={ESettingsScreens.SmthScreen}
        component={Smth}
        options={{
          headerTitle: ESettingsScreens.SmthScreen
        }}
      />
    </SettingsStack.Navigator>
  )
}) as React.FC<INavigationProps>