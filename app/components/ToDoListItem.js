import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ToDoItem = item => {
  let task = item.item.item;
  if (task.completed) {
    return (
      <View style={[styles.item, { backgroundColor: "#a2d246" }]}>
        <Text style={styles.text}>{task.name}</Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.item, { backgroundColor: "#007acc" }]}>
        <Text style={styles.text}>{task.name}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    height: 30,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius:10,
    minWidth: "90%",
    marginBottom: 10
  },
  text: {
    alignSelf: 'center',
    color: '#F5FCFF'
  }
});

export default ToDoItem;
