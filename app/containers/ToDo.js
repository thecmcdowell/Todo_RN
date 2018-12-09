import React from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  StatusBar,
  SafeAreaView
} from "react-native";
import { connect } from "react-redux";
import { VisibilityFilters } from "../actions/types";
import { setVisibilityFilter } from "../actions/todoActions";
import {
  ToDoItem,
  EditItem,
  Counter,
  AddTask,
  Header
} from "../components/index";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

class ToDo extends React.Component {
  state = {
    text: "",
    showEdit: false,
    selectedItem: {},
    todoItem: {},
    todos: []
  };

  renderFlatListItem = item => {
    return (
      <TouchableOpacity onPress={() => this.itemPress(item)}>
        <ToDoItem item={item} />
      </TouchableOpacity>
    );
  };

  itemPress = item => {
    this.setState({ showEdit: true });
    this.setState({ selectedItem: item });
  };

  dismissModal = () => {
    this.setState({ showEdit: false });
  };

  filterList = filterType => {
    switch (filterType) {
      case "pending":
        return this.props.setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE);
      case "completed":
        return this.props.setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED);
      default:
        this.props.setVisibilityFilter(VisibilityFilters.SHOW_ALL);
    }
  };

  render() {
    let todos = this.props.todos;
    return (
      <SafeAreaView style={styles.view}>
        <StatusBar barStyle="light-content" backgroundColor="#4F6D7A" />
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          style={styles.container}
        >
          <Header />
          <Counter todos={todos} />
          <Button
            color="#a1fd9c"
            title="Show pending"
            onPress={() => this.filterList("pending")}
          />
          <Button
            color="#a1fd9c"
            title="Show Completed"
            onPress={() => this.filterList("completed")}
          />
          <Button
            color="#a1fd9c"
            title="Show All"
            onPress={() => this.filterList()}
          />
          <FlatList
            renderItem={this.renderFlatListItem}
            data={todos}
            extraData={this.state}
            keyExtractor={index => `${index.id}`}
            style={styles.list}
          />
          <AddTask />
          <EditItem
            item={this.state.selectedItem}
            visible={this.state.showEdit}
            dismiss={this.dismissModal.bind(this)}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  view: {
    backgroundColor: "#4F6D7A",
    minHeight: "100%"
  },
  list: {
    paddingTop: 5,
    minHeight: "50%",
    maxHeight: "70%"
  }
};
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibility)
});

export default connect(
  mapStateToProps,
  { setVisibilityFilter }
)(ToDo);
