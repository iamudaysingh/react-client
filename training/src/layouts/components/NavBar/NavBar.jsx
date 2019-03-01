import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const styles = {
  root: {
    marginBottom: '10px',
  },
  grow: {
    flexGrow: 1,
  },
  logout: {
    flexGrow: 0.07,
  },
};


class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5 " color="inherit" className={classes.grow}>
          TRAINEE PORTAL
            </Typography>
            <Link component={RouterLink} to="/trainee" color="inherit" underline="none">
              <Button color="inherit">TRAINEE</Button>
            </Link>
            <Link component={RouterLink} to="/textfielddemo" color="inherit" underline="none">
              <Button color="inherit" className={classes.link}>TEXTFIELDDEMO</Button>
            </Link>
            <Link component={RouterLink} to="/inputdemo" color="inherit" underline="none">
              <Button color="inherit">INPUTDEMO</Button>
            </Link>
            <Link component={RouterLink} to="/childrendemo" color="inherit" underline="none">
              <Button color="inherit">CHILDRENDEMO</Button>
            </Link>
            <Link component={RouterLink} to="/logout" color="inherit" underline="none">
              <Button color="inherit" className={classes.logout}>LOGOUT</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Navbar);
