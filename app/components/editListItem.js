import React from "react";
import {
  Modal,
  View,
  TextInput,
  Button,
  Text,
  SafeAreaView
} from "react-native";
import { connect } from "react-redux";
import { deleteTodo, editTodo, toggleComplete } from "../actions/todoActions";

class EditItem extends React.Component {
  state = {
    text: "",
    visible: false
  };
  editTask = () => {
    let item = this.props.item.item;
    let updatedItem = {
      name: this.state.text,
      id: item.id,
      completed: item.completed
    };
    this.props.editTodo(item, updatedItem);
    this.setState({ text: "" });
    this.props.dismiss();
  };
  toggleComplete = () => {
    let item = this.state.selectedItem;
    this.props.toggleComplete(this.props.item);
    this.props.dismiss();
  };

  deleteTask = () => {
    let item = this.props.item.item;
    this.props.deleteTodo(item.id);
    this.props.dismiss();
  };
  render() {
    let item = this.props.item.item;
    if (!item) {
      return null;
    } else {
      let completed = this.props.item.item.completed;
      return (
        <SafeAreaView>
          <Modal
            transparent={false}
            animationType="slide"
            visible={this.props.visible}
            style={{ minHeight: "100%", backgroundColor: "#4F6D7A" }}
          >
            <View style={{ minHeight: "100%", backgroundColor: "#4F6D7A" }}>
              <View style={{ paddingTop: 100, alignSelf: "center" }}>
                <Text
                  style={{
                    alignSelf: "center",
                    color: "#F5FCFF",
                    fontSize: 25
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={[
                    styles.status,
                    {fontSize: 15}
                  ]}
                >
                  {completed ? (
                    <Text>Completed!</Text>
                  ) : (
                    <Text>Still Needs doing.</Text>
                  )}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    placeholder={item.name}
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                    returnKeyType="done"
                    style={styles.input}
                  />
                  <Button
                    disabled={this.state.text === ""}
                    title="Edit Task"
                    onPress={() => this.editTask()}
                    color="#a1fd9c"
                  />
                </View>
                <Button
                  color="#a1fd9c"
                  title={completed ? `Didn't finish?` : "Completed?"}
                  onPress={() => this.toggleComplete()}
                />
              </View>
              <View>
                <Button
                  color="#a1fd9c"
                  title="Delete"
                  onPress={() => this.deleteTask()}
                />
                <Button
                  color="#a1fd9c"
                  title="Cancel"
                  onPress={() => this.props.dismiss()}
                />
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      );
    }
  }
}

const styles = {
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: 150,
    backgroundColor: "white",
  },
  main: {
    backgroundColor: "#88d6f2"
  },
  status: {
    alignSelf: "center",
    color: "#F5FCFF",
    fontSize: 15
  }
};

export default connect(
  null,
  { deleteTodo, editTodo, toggleComplete }
)(EditItem);
