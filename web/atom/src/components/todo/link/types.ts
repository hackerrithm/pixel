// these are all the optional props
export interface IDefaultProps {
  active?: boolean;
}

// these are all the required props
export interface IProps extends Partial<IDefaultProps> {
  children?: any;
  onClick?: () => any;
}

export interface IState {}

export interface IContext {
  // this might not be needed if the component doesn't consume the context
}

// Container

export type StateProps = Pick<IProps, "active" | "children" | "onClick">;
export type OwnProps = Pick<IProps, "children">;
export type DispatchProps = Pick<IProps, "onClick">;
