import React from 'react'
import {Text, StyleSheet} from 'react-native';

export const AppText = ({style, children}) => {

  return (
    <Text style={{...styles.default, ...style}}>
      {children}
    </Text>

  )
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-regular'
  }
});