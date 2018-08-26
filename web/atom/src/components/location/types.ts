// these are all the optional props
export interface IDefaultProps {
    location?: string;
    type?: string;
  }
  
  // these are all the required props
  export interface IProps extends Partial<IDefaultProps> {
    id: string;
    title: string;
    onClick: () => any;
  }
  
  export interface IState {
    location: string;
    type: string;
    text: string;
  }
  
  export interface IContext {
    // this might not be needed if the component doesn't consume the context
  }
  
  // Container
  
  export type StateProps = Pick<IProps, 'title' | 'location' | 'type'>;
  export type OwnProps = Pick<IProps, 'id'>;
  export type DispatchProps = Pick<IProps, 'onClick'>;