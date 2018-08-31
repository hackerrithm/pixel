import { RouteComponentProps } from 'react-router';

interface IDefaultProps extends RouteComponentProps<{}> {
    name: any;
    classes: any;
    theme: any;
}

// these are all the required props
export interface IProps extends Partial<IDefaultProps> {
    id: any;
    text: string;
    history?:any
    isLoginPending: boolean;
    isLoginSuccess: boolean;
    loginError: string;
    login(email: string, password: string): void;
    dispatch: Function;
    onClick: () => any;
}

export interface IState {
    username: string;
    usernameError?: string;
    password: string;
    passwordError?: string;
    credentialsError?: string;
}

export interface IContext {
    // this might not be needed if the component doesn't consume the context
}

// Container

export type StateProps = Pick<IProps, "text" | "onClick">;
export type OwnProps = Pick<IProps, "id">;
export type DispatchProps = Pick<IProps, "onClick">;
