// import classnames from "classnames";
import * as React from "react";

import {
  //Avatar,
  Button,
  //   Card,
  //   CardActions,
  //   CardContent,
  //   CardHeader,
  //   CardMedia,
  //   Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Typography
  //   IconButton,
  //MobileStepper,
  //   Typography
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import withStyles from "@material-ui/core/styles/withStyles";
// import Label from "@material-ui/icons/Label";
// import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
// import { default as ExpandMoreIcon } from "@material-ui/icons/ExpandMore";
// import CounterContainer from '../counter/CounterContainer';
// import { default as FavoriteIcon } from "@material-ui/icons/Favorite";
// import { default as MoreVertIcon } from "@material-ui/icons/MoreVert";
// import { default as ShareIcon } from "@material-ui/icons/Share";

// import { Counter } from '../counter/counter.container';

const styles = (theme: any) => ({
  // img: {
  //   height: 910,
  //   maxWidth: "100%",
  //   overflow: "hidden",
  //   width: "100%"
  // },
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

// const textAlign = {
//     textAlign: "center"
// }

// const bigImageContent = [
//   {
//     label: "How to be happy :)",
//     imgPath:
//       "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/rhpGzXc1Wj2c144qu/videoblocks-bird-eye-view-of-the-yantarny-resort-town-russia_r_qxv5gfb_thumbnail-full01.png"
//   }
// ];

interface IMyComponentProps {
  someDefaultValue: string;
  classes: any;
  align: any;
  theme: any;
}

interface IMyComponentState {
  name: string;
  open?: boolean;
  activeStep?: number;
  expanded?: boolean;
}

class Home extends React.Component<IMyComponentProps, IMyComponentState, any> {
  constructor(props: IMyComponentProps) {
    super(props);
    this.state.name = this.props.someDefaultValue;
  }

  state = {
    name: "",
    open: false,
    activeStep: 0,
    expanded: false
  };

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
    const { open } = this.state;
    //const maxSteps = sliderContent.length;

    return (
      <div>
        {/* Main page */}
        <Grid container={true} alignItems={"center"}>
          <Grid item={true} xs={12} sm={12}>
            <Typography variant="display3" align={"center"} color={"primary"}>
              Hexerent
            </Typography>
          </Grid>
          <Grid item={true} xs={3} sm={3}>
          </Grid>
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

            {/* <div className={classes.bgImage}>
            <Card className={classes.cardDiv}>
                <CardHeader
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Test Menu"
                  subheader="Date here"
                />
                <CardMedia
                  className={classes.BigPanelMedia}
                  image="/static/images/cards/paella.jpg"
                  title="Reptile"
                />
                <CardContent>
                  <Typography component="p">HI first</Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="Share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expanded
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                  >
                    <ExpandMoreIcon className="material-icons" />
                  </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                  <CardContent>Hi</CardContent>
                </Collapse>
              </Card>
               <img
                className={classes.bgImage}
                src={bigImageContent[0].imgPath}
              /> 
            </div> */}
            {/* {this.state.name} */}
            <div className={classes.root}>
              <Dialog open={open} onClose={this.handleClose}>
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
              {/* <Button
                variant="contained"
                color="secondary"
                onClick={this.handleClick}
              >
                Super Secret Password
              </Button> */}
            </div>
          </Grid>
          <Grid item={true} xs={3} sm={3}>
          </Grid>
          <Grid item={true} xs={12} sm={4}>
            {/* <Counter /> */}
          </Grid>
          <Grid item={true} xs={12} sm={4}>
            {/* ignored */}
          </Grid>
          <Grid item={true} xs={12} sm={4}>
            {/* ignored */}
          </Grid>
          {/* <input onChange={e => this.handleOnChange(e)} />
          <button name="Update" onClick={e => this.handleOnClick(e)}>
            Update
          </button> */}
          {/* Hello {this.state.name}! */}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Home);
