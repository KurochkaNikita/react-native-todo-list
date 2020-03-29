import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { THEME } from "./../theme";
import {AppTextBold} from "../ui/AppTextBold";

export const NavBar = ({title}) => {

  const styleNavBar = {
    ...styles.navBar,
    ...Platform.select({
      ios: styles.navBarIos,
      android: styles.navBarAndroid
    })
  };

  return (
    <View style={styleNavBar}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  )
};

const styles = StyleSheet.create({
  navBar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10
  },
  navBarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  navBarIos: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,

  },
  text: {
    fontSize: 20,
    color: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR
  }
});