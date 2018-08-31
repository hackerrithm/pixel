import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { red } from '@material-ui/core/colors';
import {
	//Avatar,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Grid,
	TextField,
	Typography
} from "@material-ui/core";

const styles = (theme: any) => ({
	card: {
		maxWidth: 400,
		top: 700
	},
	cardDiv: {
		maxWidth: 400,
		padding: 15,
		right: 0,
		top: 0
	},
	bgImage: {
		height: 910,
		maxWidth: "100%",
		width: "100%",
		opacity: 1
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
		marginTop: -8
	},
	BigPanelMedia: {
		height: 0,
		paddingTop: "56.25%", // 16:9
		marginTop: 12
	},
	actions: {
		display: "flex"
	},
	expand: {
		transform: "rotate(0deg)",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest
		}),
		marginLeft: "auto"
	},
	expandOpen: {
		transform: "rotate(180deg)"
	},
	avatar: {
		backgroundColor: red[500]
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		marginTop: theme.spacing.unit * 40,
		marginButtom: theme.spacing.unit * 40
	},
	bootstrapRoot: {
		padding: 0,
		"label + &": {
			marginTop: theme.spacing.unit * 3
		},
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		marginTop: theme.spacing.unit * 30,
		marginButtom: theme.spacing.unit * 40
	},
	bootstrapInput: {
		borderRadius: 2,
		backgroundColor: theme.palette.common.white,
		border: "1px solid #ced4da",
		fontSize: 16,
		padding: "10px 12px",
		width: "calc(100% - 24px)",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(","),
		"&:focus": {
			borderColor: "#80bdff",
			boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
		}
	},
	bootstrapFormLabel: {
		fontSize: 18
	}
});

interface WelcomeState {
	email: string;
	balance: any;
	currency: any;
}

interface IMyComponentProps {
	someDefaultValue: string;
	classes: any;
	align: any;
	theme: any;
}

interface IMyComponentState extends WelcomeState {
	name: string;
	open?: boolean;
	activeStep?: number;
	expanded?: boolean;
}

class Profile extends React.Component<
	IMyComponentProps,
	IMyComponentState,
	any
	> {
	constructor(props: IMyComponentProps) {
		super(props);

		this.state = {
			email: "",
			balance: "",
			currency: "",
			name: this.props.someDefaultValue,
			open: false,
			activeStep: 0,
			expanded: false
		};

	}

	componentDidMount() {
		let token: string = localStorage.getItem("token") as string;
		if (token !== null || token !== undefined || token !== 'undefined') {
			// exampleDataService.getAccount(token).then(item =>
			//   // this.setState({
			//   //   email: item.email,
			//   //   balance: item.result,
			//   //   currency: item.currency
			//   // })
			//    { console.log(item); }

			// );
			// console.log("logged in success");
		}
	}

	public handleChange(event: any): void {
		this.setState({ name: "Selena" });
	}

	public handleOnChange(event: any): void {
		this.setState({ name: event.target.value });
	}

	public handleOnClick(event: any): void {
		this.setState({ name: "Kemar" });
	}

	public handleNext = () => {
		this.setState((prevState: any) => ({
			activeStep: prevState.activeStep + 1
		}));
	};

	public handleBack = () => {
		this.setState((prevState: any) => ({
			activeStep: prevState.activeStep - 1
		}));
	};

	public handleClose = () => {
		this.setState({
			open: false
		});
	};

	public handleClick = () => {
		this.setState({
			open: true
		});
	};

	handleExpandClick = () => {
		this.setState((state: any) => ({ expanded: !state.expanded }));
	};

	render() {
		const { classes } = this.props;
		//const { open } = this.state;
		//const maxSteps = sliderContent.length;

		return (
			<div>
				{/* {authenticationService.isAuthenticated() && ( */}
					<Grid container={true} alignItems={"center"}>
						<Grid item={true} xs={12} sm={12}>
							<Typography variant="display3" align={"center"} color={"primary"}>
								Loggen in Hexerent
              </Typography>
						</Grid>
						<Grid item={true} xs={3} sm={3} />
						<Grid item={true} xs={6}>
							<form className={classes.container} noValidate autoComplete="off">
								<TextField
									defaultValue=""
									label=""
									placeholder="Search here"
									id="bootstrap-input"
									InputProps={{
										disableUnderline: true,
										classes: {
											root: classes.bootstrapRoot,
											input: classes.bootstrapInput
										}
									}}
									InputLabelProps={{
										shrink: true,
										className: classes.bootstrapFormLabel
									}}
									fullWidth
								/>
							</form>
							<div className={classes.root}>
								<Dialog open={false} onClose={this.handleClose}>
									<DialogTitle>Super Secret Password</DialogTitle>
									<DialogContent>
										<DialogContentText>1-2-3-4-5</DialogContentText>
									</DialogContent>
									<DialogActions>
										<Button color="primary" onClick={this.handleClose}>
											OK
                    					</Button>
									</DialogActions>
								</Dialog>
							</div>
							<h3>Did you know that fancy colors?</h3>
							{() => {
								console.log("profile match");
							}}
						</Grid>
						<Grid item={true} xs={3} sm={3} />
						<Grid item={true} xs={12} sm={4}>
							{/* <Counter /> */}
						</Grid>
						<Grid item={true} xs={12} sm={4}>

						</Grid>
						<Grid item={true} xs={12} sm={4}>
							{/* ignored */}
						</Grid>
					</Grid>
				{/* )} */}
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Profile as any);
