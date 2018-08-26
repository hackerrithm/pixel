import React, { Component } from "react";
import { IState, StateProps } from "./types";

export default class Todo extends Component<StateProps, IState> {
  constructor(props: StateProps) {
    super(props);
  }

  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? "line-through" : "none"
        }}
      >
        {this.props.text}
      </li>
    );
  }
}
