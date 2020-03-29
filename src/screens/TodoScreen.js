import React, {useState} from 'react';
import {StyleSheet, View, Dimensions }from "react-native";
import { FontAwesome, AntDesign} from "@expo/vector-icons"

import {THEME} from "../theme";
import {AppCard} from "../ui/AppCard";
import {EditModal} from "../components/EditModal";
import {AppTextBold} from "../ui/AppTextBold";
import {AppButton} from "../ui/AppButton";

export const TodoScreen = ({todo: {id, title}, goBack, onRemove, onSave}) => {
  const [isModal, setIsModel] = useState(false);

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
        <AppButton onPress={() => setIsModel(true)}>
          <FontAwesome name='edit' size={20}/>
        </AppButton>
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton onPress={goBack} color={THEME.GRAY_COLOR}>
            <AntDesign name='back' size={20} color='white'/>
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton color={THEME.DANGER_COLOR} onPress={() => onRemove(id, title)}>
            <FontAwesome name='remove' size={20} />
          </AppButton>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    marginBottom: 20,
    padding: 15,
    alignItems: 'center',
  },
  button: {
    width: Dimensions.get('window').width / 3,
  },
  title: {
    fontSize: 20,
    width: "80%",
  }
});