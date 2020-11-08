import React from 'react'

import {
  DrawerNavigationProp,
  createDrawerNavigator,
} from '@react-navigation/drawer'

import { EDrawerStacks, INavigationProps } from '../types/navigation'
import HomeStack from './HomeStack'
import SettingsStack from './SettingsStack'

console.log('test branch')

//1st after merge (test branch)






//2nd after merge (test branch)

export default (() => {

  const DrawerNavigation = createDrawerNavigator()

  return (
    <DrawerNavigation.Navigator
      drawerType='slide'
      initialRouteName={EDrawerStacks.HomeStack}
    >
      <DrawerNavigation.Screen
        name={EDrawerStacks.HomeStack}
        component={HomeStack}
      />
      <DrawerNavigation.Screen
        name={EDrawerStacks.SettingsStack}
        component={SettingsStack}
      />
    </DrawerNavigation.Navigator>
  )
}) as React.FC<INavigationProps<DrawerNavigationProp<any>>>