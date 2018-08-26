import React, { Component } from 'react';
import Todo from '../todo';
import { IState, StateProps } from './types';

export default class TodoList extends Component<StateProps, IState> {
  constructor(props: StateProps) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos === undefined
          ? []
          : this.props.todos!.map((todo: any) => (
              <Todo
                key={todo.id}
                {...todo}
                onClick={() => this.props.toggleTodo!(todo.id)}
              />
            ))}
      </ul>
    );
  }
}
