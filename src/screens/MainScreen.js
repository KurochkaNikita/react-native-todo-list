import React from 'react';
import {StyleSheet, View, Text, FlatList, Image} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";

export const MainScreen = ({todos, addTodo, removeTodo, onOpen}) => {

  let context = (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={todos}
      contentContainerStyle={{paddingBottom: 200}} // fixing issue with showing last items
      renderItem={({item: {title, id}}) => (
        <Todo title={title} id={id} removeTodo={removeTodo} onOpen={onOpen}/>
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
      <AddTodo onSubmit={addTodo}/>
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