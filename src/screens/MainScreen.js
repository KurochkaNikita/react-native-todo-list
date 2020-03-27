import React from 'react';
import {StyleSheet, View, Text, FlatList} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";

export const MainScreen = ({todos, addTodo, removeTodo, onOpen}) => {

  return (
    <View>
      <AddTodo onSubmit={addTodo}/>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        contentContainerStyle={{paddingBottom: 200}} // fixing issue with showing last items
        renderItem={({item: {title, id}}) => (
          <Todo title={title} id={id} removeTodo={removeTodo} onOpen={onOpen}/>
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({

});