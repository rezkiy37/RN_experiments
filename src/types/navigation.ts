import { NavigationProp, RouteProp } from "@react-navigation/native"
import { DrawerNavigationProp } from "@react-navigation/drawer"
import { StackNavigationProp } from "@react-navigation/stack"



export interface INavigationProps<T = any> {
  navigation: T extends DrawerNavigationProp<any>
  ? DrawerNavigationProp<any>
  : StackNavigationProp<any>
  route: RouteProp<any, any>
}


export enum EDrawerStacks {
  HomeStack = 'HomeStack',
  SettingsStack = 'SettingsStack',
}

export enum EHomeScreens {
  HomeScreen = 'HomeScreen'
}

export enum ESettingsScreens {
  SettingsScreen = 'SettingsScreen',
  SmthScreen = 'SmthScreen'
}

