import { RouteComponentProps } from "react-router";

interface IDefaultProps extends RouteComponentProps<{}> {
	classes?: any;
	options?: any;
	selectedSubreddit?: any;
	posts?: any;
	isFetching?: any;
	lastUpdated: any;
	dispatch?: any;
}

// these are all the required props
export interface IProps extends Partial<IDefaultProps> {
	id?: any;
	value?: string;
	posts?: any;
	onChange: (vale: any) => any;
}

export interface IState { }

export interface IContext {
	// this might not be needed if the component doesn't consume the context
}

// Container

export type StateProps = Pick<IProps, "posts" | "value" | "onChange">;
export type OwnProps = Pick<IProps, "id">;
export type DispatchProps = Pick<IProps, "onChange">;
