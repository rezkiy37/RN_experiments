import { DrawerNavigationProp, } from '@react-navigation/drawer'
import React, { useEffect } from 'react'
import Container from '../../components/screen/Container'
import { ESettingsScreens, INavigationProps } from '../../types/navigation'

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import { Alert, Text } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


export default (({
  navigation,
  route

}) => {

  const params = route.params
  // navigation.openDrawer()
  useEffect(() => {

    console.log('params', { ...params })
  }, [params])

  const { alert } = Alert


  const goBack = () => navigation.navigate(ESettingsScreens.SettingsScreen)

  return (
    <Container>
      <MenuProvider>

        <Menu>
          <MenuTrigger text='Select action' />
          <MenuOptions optionsContainerStyle={{}}>

            <MenuOption onSelect={goBack} text='Back' />
            <MenuOption onSelect={() => alert(`Delete`)} >
              <Text style={{ color: 'red' }}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
          </MenuOptions>
        </Menu>
      </MenuProvider>
    </Container>
  )
}) as React.FC<INavigationProps>