import * as React from "react";

// import { Link } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationAction
} from "@material-ui/core";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme: any) => ({
  root: {
    width: 1800,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit * 58,
    marginButtom: theme.spacing.unit * 100
  }
});

class NavigationBelow extends React.Component<any, any, any> {
  public state = {
    value: 0
  };

  protected handleChange = (event: any, checked: any) => {
    this.setState({ auth: checked });
  };

  render() {
    false;
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NavigationBelow);
