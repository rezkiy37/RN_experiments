import React, { useEffect } from 'react'
import Container from '../../components/screen/Container'
import { INavigationProps } from '../../types/navigation'
//@ts-ignore
import OptionsMenu from "react-native-options-menu"
import { Alert, Image, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';



export default (({
  route
}) => {

  const params = route.params

  useEffect(() => {
    console.log('params', { ...params })
  }, [params])

  const MenuButton: React.FC = () => {
    return (
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          backgroundColor: 'red'
        }}
      >
        <Text>
          Menu Button
        </Text>
      </TouchableOpacity>
    )
  }

  const { alert } = Alert


  const myIcon = <Icon name="rocket" size={30} color="#900" />;

  return (
    <Container>


      <OptionsMenu
        customButton={myIcon}
        buttonStyle={{ width: 32, height: 8, margin: 7.5, resizeMode: "contain" }}
        destructiveIndex={1}
        options={["Edit", "Delete", "Delete", "Cancel"]}
        actions={[() => alert('edit'), () => alert('delete'), () => alert('smth'), () => { }]} />
    </Container>
  )
}) as React.FC<INavigationProps>