import React, { Fragment, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  TouchableOpacity
} from "react-native";


interface IData extends IItem {
  data: IItem[]
}

interface IItem {
  title: string
  desc: string
  pressHandler?: () => void
}

const DATA: IData[] = [
  {
    title: "Main dishes",
    desc: 'main desc',
    data: [
      { title: 'first', desc: 'first desc' },
      { title: 'second', desc: 'second desc' },
      { title: 'third', desc: 'third desc' },
    ]
  },
  {
    title: "Sides",
    desc: 'Sides desc',
    data: [
      { title: 'first', desc: 'first desc' },
      { title: 'second', desc: 'second desc' },
      { title: 'third', desc: 'third desc' },
    ]
  },
  {
    title: "Drinks",
    desc: 'Drinks desc',
    data: [
      { title: 'first', desc: 'first desc' },
      { title: 'second', desc: 'second desc' },
      { title: 'third', desc: 'third desc' },
    ]
  },
  {
    title: "Desserts",
    desc: 'main desc',
    data: [
      { title: 'first', desc: 'first desc' },
      { title: 'second', desc: 'second desc' },
      { title: 'third', desc: 'third desc' },
    ]
  },
  {
    title: "Drinks",
    desc: 'main desc',
    data: [
      { title: 'first', desc: 'first desc' },
      { title: 'second', desc: 'second desc' },
      { title: 'third', desc: 'third desc' },
    ]
  },
];

const Item = ({ title, desc, pressHandler }: IItem) => (
  <TouchableOpacity onPress={pressHandler} style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>{desc}</Text>
  </TouchableOpacity>
)

export default (() => {

  const listRef = useRef<any>()

  const itemPressHandler = () => {
    console.log('pressed')
    listRef.current.scrollToLocation({
      animated: true,
      sectionIndex: 0,
      itemIndex: 2
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        ref={listRef}
        sections={DATA}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item }) => (
          <Item
            desc={item.desc}
            title={item.title}
            pressHandler={itemPressHandler}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  )
}) as React.FC

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
})