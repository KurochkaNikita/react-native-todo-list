import React from 'react';
import {StyleSheet, View, Text, Button} from "react-native";
import {THEME} from "../theme";

export const TodoScreen = ({todo, goBack}) => {

  return (
    <View>
      <Text>{todo.title}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title={'Back'}
            onPress={goBack}
            color={THEME.GRAY_COLOR}
          />
        </View>
        <View style={styles.button}>
          <Button
            title={'Delete'}
            color={THEME.DANGER_COLOR}
            onPress={() => console.log('remove')}
          />
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    width: '40%'
  }
});