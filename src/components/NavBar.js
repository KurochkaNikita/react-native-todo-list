import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const NavBar = ({title}) => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  navBar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3949ab',
    paddingBottom: 10
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
});