import React, { PureComponent } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// import { authenticationService } from "../../app/user/authentication";
import { Button, Icon, TextField } from "@material-ui/core";
import { IProps, IState } from "./types";
import login from '../../app/user/login/actions';

import { connect } from 'react-redux';
const styles: any = (theme: any) => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200
	},
	menu: {
		width: 200
	},
	rightIcon: {
		marginLeft: theme.spacing.unit
	}
});

class Login extends PureComponent<IProps, IState> {
	constructor(props: any) {
		super(props);

		this.state = {
			username: '',//undefined,
			usernameError: undefined,
			password: '',//undefined,
			passwordError: undefined,
			credentialsError: undefined
		};
		this.login = this.login.bind(this);

		// if (authenticationService.isAuthenticated()) {
		//   this.props.history.push("/");
		// }
	}

	login = (e: any) => {
		e.preventDefault();
		let { username, password } = this.state;
		console.log("username: ", username, " password: ", password);
		
		this.props.dispatch(login.login(username, password));
		this.props.history.push("/profile");
		// if (this.state.username && this.state.password) {
		// 	authenticationService.login(this.state)
		// 	.then((item: any) => {
		// 		localStorage.setItem("token", item);
		// 		console.log("token: " + item);
		// 		console.log(item);

		// 	//   this.props.history.push("/profile");
		// 	// //   window.location.reload();
		// 	})
		// 	// .catch(error => {
		// 	//   this.setState({
		// 	//     credentialsError: "Username or password is not correct"
		// 	//   });
		// 	// });
		// 	this.props.history.push("/profile");
		// }
	};

	private onChange = (event: React.FormEvent<HTMLInputElement>) => {
		this.validate();
		console.log(event);
		
		this.setState({
			[event.currentTarget.name]: event.currentTarget.value
		} as any);
	};

	private validate() {
		if (!this.state.username || this.state.username.length < 3) {
			this.setState({
				usernameError: "Username is too short"
			});
		} else {
			this.setState({
				usernameError: undefined
			});
		}

		if (!this.state.password || this.state.password.length < 3) {
			this.setState({
				passwordError: "Password is too short"
			});
		} else {
			this.setState({
				passwordError: undefined
			});
		}
	}

	render() {
		let { classes } = this.props;
		return (
			<div className={classes.root}>
				{/* <form > */}
					<div className="form-group">
						<TextField
							id="username"
							label="Username"
							className={classes.textField}
							margin="normal"
							error={this.state.usernameError !== undefined}
							aria-describedby="username-error-text"
							name="username"
							onChange={this.onChange}
							value={this.state.username}
						/>
					</div>
					<div className="form-group">
						<TextField
							id="password"
							label="Password"
							className={classes.textField}
							margin="normal"
							error={this.state.passwordError !== undefined}
							aria-describedby="password-error-text"
							name="password"
							type="password"
							onChange={this.onChange}
							value={this.state.password}
						/>
					</div>
					<div className="form-group">
						<Button
							type="submit"
							variant="contained"
							color="primary"
							className={classes.button}
							onClick={this.login}
						>
							Login
			  <Icon className={classes.rightIcon}>send</Icon>
						</Button>
					</div>
				{/* </form> */}
			</div>
		);
	}
}

const mapStateToProps = (state:any) => {
	return {
	  isLoginPending: state.isLoginPending,
	  isLoginSuccess: state.isLoginSuccess,
	  loginError: state.loginError
	};
  }

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Login as any));
