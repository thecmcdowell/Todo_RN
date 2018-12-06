import React from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";

class AddTask extends React.Component {
  state = {
    text: ""
  };

  addTask = () => {
    if (this.state.text !== "") {
      this.props.addTodo(this.state.text);
      this.setState({ data: this.state.todos });
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <View style={{ paddingTop: 10, paddingBottom: 50 }}>
        <TextInput
          placeholder="Add ToDo"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          returnKeyType="done"
          onSubmitEditing={this.addTask.bind(this, this.state.text)}
          style={styles.input}
        />
        <Button
          onPress={this.addTask.bind(this, this.state.text)}
          title="Add Task"
          color= "#a1fd9c"
          disabled={this.state.text ? false: true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    backgroundColor: "white",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: 150
  }
});

export default connect(
  null,
  { addTodo }
)(AddTask);
