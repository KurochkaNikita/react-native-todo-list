import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { AppButton } from "./AppButton";
import {THEME} from "../theme";

export const AppError = ({refresh, message}) => (
  <View style={styles.center}>
    <Text style={styles.error}>{message}</Text>
    <AppButton onPress={refresh}>
      Try again
    </AppButton>
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 20,
    color: THEME.DANGER_COLOR
  }
});

