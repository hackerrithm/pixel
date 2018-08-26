import * as React from "react";
import { connect } from "react-redux";

import { compose } from "../../utils";
import { toggleTodo } from "../../app/todo/actions";
import TodoList from "../../components/todo/todoList/todoList";
import { VisibilityFilters } from "../../app/todo/actions";

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

const getVisibleTodos = (todos: any, filter: any) => {
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

export const Counter = compose(
  TodoList,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);
