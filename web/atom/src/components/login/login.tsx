import * as React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import { TextField, Button, Icon } from "@material-ui/core";
import { authenticationService } from "../../app/user/authentication";
import { RouteComponentProps } from "react-router";
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

interface IMyComponentProps extends RouteComponentProps<{}> {
  name: any;
  classes: any;
  theme: any;
}

// interface IMyComponentState {
//     name: any
//     password: string
//     multiline: string
//     currency: string
// }

interface LoginState {
  username?: string;
  usernameError?: string;
  password?: string;
  passwordError?: string;
  credentialsError?: string;
}

class Login extends React.Component<IMyComponentProps, LoginState, any> {
  constructor(props: IMyComponentProps) {
    super(props);

    this.state = {
      username: undefined,
      usernameError: undefined,
      password: undefined,
      passwordError: undefined,
      credentialsError: undefined
    };
    this.login = this.login.bind(this);

    // if (authenticationService.isAuthenticated()) {
    //   this.props.history.push("/");
    // }
  }

  login(e:any) {
    e.preventDefault();
    if (this.state.username && this.state.password) {
      authenticationService
        .login(this.state)
        .then((item: any) => {
        //   localStorage.setItem("token", item);
        //   console.log("token: " + item);
            console.log(item);
            
          this.props.history.push("/profile");
        //   window.location.reload();
        })
        .catch(error => {
          this.setState({
            credentialsError: "Username or password is not correct"
          });
        });
    }
  }

  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.validate();
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    } as LoginState);
  };

  validate() {
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
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <form onSubmit={this.login}>
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
            >
              Login
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Login);
