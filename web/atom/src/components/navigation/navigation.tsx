import * as React from "react";
import spacing from "@material-ui/core/styles/spacing";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
// import { AccountCircle } from '@material-ui/icons';
import {
  AppBar,
  Button,
  IconButton,
  // Menu,
  // MenuItem,
  Toolbar,
  Typography
} from "@material-ui/core";
import { default as MenuIcon } from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

// import { Link } from 'react-router-dom';

const styles = (theme: any) => ({
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 200
  },
  root: {
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default
  }
});

class Navigation extends React.Component<any, any, any> {
  public state = {
    open: false,
    activeStep: 0,
    expanded: false,
    auth: true,
    anchorEl: null
  };

  protected handleChange = (event: any, checked: any) => {
    this.setState({ auth: checked });
  };

  protected handleMenu = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  protected handleClose = () => {
    this.setState({ anchorEl: null });
  };

  public renderLinks() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    if (this.props.authenticated) {
      return (
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                activeClassName="active"
                to="/"
              >
                Hexerent
              </NavLink>
            </Typography>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/signup"
            >
              <Button
                style={{ textDecoration: "none", color: "white" }}
                color="secondary"
              >
                Sign Up
              </Button>
            </NavLink>
          </Toolbar>
        </AppBar>
      );
    } else {
      return (
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                activeClassName="active"
                to="/"
              >
                Hexerent
              </NavLink>
            </Typography>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/tools"
            >
              <Button
                style={{ textDecoration: "none", color: "white" }}
                color="secondary"
              >
                Tools
              </Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/about"
            >
              <Button color="inherit">About</Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button
                style={{ textDecoration: "none", color: "white" }}
                color="primary"
              >
                Login
              </Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/signup"
            >
              <Button
                style={{ textDecoration: "none", color: "white" }}
                color="secondary"
              >
                Sign Up
              </Button>
            </NavLink>
          </Toolbar>
        </AppBar>
      );
    }
  }

  render() {
    false;

    return (
      <div>
        {/* Navbar start */}

        {this.renderLinks()}

        {/* <ul>
                            <li>
                                <NavLink activeClassName="active" to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: '/logs',
                                        search: '?filter=active',
                                        state: { fromNavBar: true }
                                    }}
                                >
                                    Logs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink replace={true} to="/children">Children</NavLink>
                            </li>
                        </ul> */}
        {/* {auth && (
                            <div>
                                <IconButton
                                    aria-owns={open !== undefined ? 'menu-appbar' : ''}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )} */}

        {/* Navbar end */}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated }
};

export default connect(mapStateToProps)( withStyles(styles, { withTheme: true })(Navigation));

// export default withStyles(styles, { withTheme: true })(Navigation);
