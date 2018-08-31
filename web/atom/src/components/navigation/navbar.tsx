import * as React from 'react';
import spacing from '@material-ui/core/styles/spacing';
import withStyles from '@material-ui/core/styles/withStyles';
import {
	AppBar,
	Button,
	IconButton,
	Toolbar,
	Typography
	} from '@material-ui/core';
import { connect } from 'react-redux';
import { default as MenuIcon } from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
;

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

interface NavigationBarState {
	isAuthenticated: boolean;
	open: boolean;
	anchorEl?: HTMLElement;
}

class Navbar extends React.Component<any, NavigationBarState, any> {
	constructor(props: {}) {
		super(props);

		this.state = {
			isAuthenticated: false,
			open: false,
			anchorEl: undefined
		};

		this.logout = this.logout.bind(this);
	}

	componentDidMount() {
		this.checkAuthenticationStatus();
	}

	public checkAuthenticationStatus() {
		if (
			localStorage.getItem("token") !== null ||
			localStorage.getItem("token") !== undefined
		) {
			this.setState({
				isAuthenticated: true
			});
		}
	}

	handleClick = (event: React.MouseEvent<HTMLElement>) => {
		this.setState({ open: true, anchorEl: event.currentTarget });
	};

	logout() {
		localStorage.setItem("token", "");
		localStorage.clear();
		this.setState({
			isAuthenticated: false
		});
	}

	protected handleMenu = (event: any) => {
		this.setState({ anchorEl: event.currentTarget });
	};

	render() {
		const { classes } = this.props;

		return (
			<div>
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
						{this.state.isAuthenticated && (
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
						)}
						<NavLink
							style={{ textDecoration: "none", color: "white" }}
							to="/about"
						>
							<Button color="inherit">About</Button>
						</NavLink>
						{!this.state.isAuthenticated && (
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
						)}
						{!this.state.isAuthenticated && (
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
						)}
						{this.state.isAuthenticated && (
							<NavLink
								style={{ textDecoration: "none", color: "white" }}
								to="/"
							>
								<Button
									style={{ textDecoration: "none", color: "white" }}
									color="secondary"
									onClick={this.logout}
								>
									Logout
                </Button>
							</NavLink>
						)}
					</Toolbar>
				</AppBar>
				{/* Navbar end */}
			</div>
		);
	}
}

const mapStateToProps = (state: any) => {
	return { authenticated: state.authenticated };
};

export default connect(mapStateToProps)(
	withStyles(styles, { withTheme: true })(Navbar)
);
