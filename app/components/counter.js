import React from "react";
import { Text } from "react-native";

const Counter = todos => {
  let completed = todos.todos.filter(todo => todo.completed === false);
  if (completed == 0) {
    return (
      <Text style={{ fontWeight: "bold", fontSize: 25, color:"#F5FCFF"}}>
        You have nothing to do! You did all of it! ⭐️
      </Text>
    );
  } else {
    return (
      <Text style={{ fontSize: 25,  color:"#F5FCFF"}}>
        You Have {completed.length} task(s) remaining!
      </Text>
    );
  }
};

export default Counter