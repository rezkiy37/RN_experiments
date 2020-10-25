import React from 'react'
import { INavigationProps } from '../types/navigation'
import { NavigationContainer } from '@react-navigation/native'
import Drawer from './Drawer'



export default (() => {

  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  )
}) as React.FC<INavigationProps>