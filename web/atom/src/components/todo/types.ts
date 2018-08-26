// these are all the optional props
export interface IDefaultProps {
  completed: Boolean
  text: string;
  }
  
  // these are all the required props
  export interface IProps extends Partial<IDefaultProps> {
    id: any
    completed: Boolean
    text: string;
    onClick: () => any;
  }
  
  export interface IState {
    completed: Boolean
    text: string;
  }
  
  export interface IContext {
    // this might not be needed if the component doesn't consume the context
  }
  
  // Container
  
  export type StateProps = Pick<IProps, 'completed' | 'text' | 'onClick'>;
  export type OwnProps = Pick<IProps, 'id'>;
  export type DispatchProps = Pick<IProps, 'onClick'>;