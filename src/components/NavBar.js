import React from 'react'
import { View, StyleSheet } from 'react-native'
import { THEME } from "./../theme";
import {AppTextBold} from "../ui/AppTextBold";

export const NavBar = ({title}) => {
  return (
    <View style={styles.navBar}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
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