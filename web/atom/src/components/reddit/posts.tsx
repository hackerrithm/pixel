import React, { PureComponent } from "react";
import { IProps, IState } from "./types";

class Posts extends PureComponent<IProps, IState, {}> {
	render() {
		return (
			<div>
				<ul>
					{this.props.posts.map((post: any, i: any) => (
						<li key={i}>{post.title}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Posts;
