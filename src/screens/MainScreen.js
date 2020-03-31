import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, FlatList, Image, Dimensions} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {THEME} from "../theme";
import {TodoContext} from './../context/todo/todoContext'
import {ScreenContext} from './../context/screens/screenContext'

export const MainScreen = ({onOpen}) => {
  const {todos} = useContext(TodoContext);

  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2);

  useEffect(() => {
    const update = () => {
      setDeviceWidth(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)
    };
    Dimensions.addEventListener('change', update);

    return () => {
      Dimensions.removeEventListener('change', update);
    }
  });

  let context = (
    <FlatList
      style={{width: deviceWidth}}
      keyExtractor={(item) => item.id.toString()}
      data={todos}
      contentContainerStyle={{paddingBottom: 200}} // fixing issue with showing last items
      renderItem={({item: {title, id}}) => (
        <Todo title={title} id={id}/>
      )}
    />
  );

  if (!todos.length) {
    context = (
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require('./../../assets/no-items.png')}
        />
      </View>
    )
  }

  return (
    <View>
      <AddTodo/>
      {context}
    </View>
  )
};

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain'
  }
});