import React, { PureComponent } from "react";
import { IProps, IState } from "./types";

class Picker extends PureComponent<IProps, IState, {}> {
	constructor(props: IProps) {
		super(props);
	}

	
	render() {
		const { classes } = this.props as IProps;
		return (
			<div className={classes.root}>
				     <span>
        <h1>{this.props.value}</h1>
        <select onChange={(e:any) => {this.props.onChange(e.target.value)}} value={this.props.value}>
          {this.props.options.map((option:any) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </span>
			</div>
		);
	}
}

export default Picker as any;
