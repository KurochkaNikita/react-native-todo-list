import React from 'react';
import {StyleSheet, View, Text, Button} from "react-native";
import {THEME} from "../theme";
import {AppCard} from "../ui/AppCard";

export const TodoScreen = ({todo: {id, title}, goBack, onRemove}) => {

  return (
    <View>

      <AppCard style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Button
          title={'Edit'}
          // onPress={goBack}
          // color={THEME.GRAY_COLOR}
        />
      </AppCard>

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
            onPress={() => onRemove(id, title)}
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
  card: {
    marginBottom: 20
  },
  button: {
    width: '40%'
  },
  title: {
    fontSize: 20
  }
});