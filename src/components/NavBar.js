import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { THEME } from "./../theme";

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
    backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 10
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
});