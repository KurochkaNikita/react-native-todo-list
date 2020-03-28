import React, { useState } from 'react';
import {StyleSheet, View, Button} from "react-native";
import {THEME} from "../theme";
import {AppCard} from "../ui/AppCard";
import {EditModal} from "../components/EditModal";
import {AppTextBold} from "../ui/AppTextBold";

export const TodoScreen = ({todo: {id, title}, goBack, onRemove, onSave}) => {
  const [ isModal, setIsModel ] = useState(false);

  const saveHandler = (title) => {
    onSave(id, title);
    setIsModel(false);
  }

  return (
    <View>
      <EditModal
        isVisible={isModal}
        onVisible={setIsModel}
        value={title}
        onSave={saveHandler}
      />

      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{title}</AppTextBold>
        <Button
          title={'Edit'}
          onPress={() => setIsModel(true)}
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