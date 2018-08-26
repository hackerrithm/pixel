import Todo from "./todoList";

// these are all the optional props
export interface IDefaultProps {
  todos?: Array<Todo>;
}

// these are all the required props
export interface IProps extends Partial<IDefaultProps> {
  toggleTodo?: (value: any) => any;
}

export interface IState {
  todos: Array<Todo>;
}

export interface IContext {
  // this might not be needed if the component doesn't consume the context
}

// Container

export type StateProps = Pick<IProps, "todos" | "toggleTodo">;
export type OwnProps = Pick<IProps, "todos">;
export type DispatchProps = Pick<IProps, "toggleTodo">;
