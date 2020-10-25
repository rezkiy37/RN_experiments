import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { EHomeScreens, INavigationProps } from '../types/navigation'
import Home from '../screens/HomeStack.tsx/Home'

export default (() => {

  const HomeStack = createStackNavigator()

  return (
    <HomeStack.Navigator
      initialRouteName={EHomeScreens.HomeScreen}
    >
      <HomeStack.Screen
        name={EHomeScreens.HomeScreen}
        component={Home}
        options={{
          headerTitle: EHomeScreens.HomeScreen
        }}
      />
    </HomeStack.Navigator>
  )
}) as React.FC<INavigationProps>