import React from 'react';
import { StyleSheet, View } from "react-native";

export const AppCard = ({children, style}) => {
  return (
    <View style={{...styles.default, ...style}}>
      {children}
    </View>
  )
};

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,

    // Shadow for IOS
    shadowColor: "#000",
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2
    },

    // shadow for Android
    elevation: 8
  }
})