import React from 'react';
import { View, StyleSheet, ActivityIndicator} from 'react-native';
import {THEME} from "./../theme";

export const AppLoading = () => {

  return (
    <View style={styles.center}>
      <ActivityIndicator
        size='large' color={THEME.MAIN_COLOR}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});