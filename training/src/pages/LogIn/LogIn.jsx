import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Mail';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({

  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  field: {
    paddingTop: '40px',
  },
});


class LogIn extends React.Component {
  checkoutNameSchema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .required()
      .min(8)
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/, 'Password can contain at least one upper and lower letter and at least one numeric and special character.'),
  });


  constructor(props) {
    super(props);
    this.state = {
      open: true,
      email: '',
      password: '',
      errorOccured: {
        email: '',
        password: '',
      },
      isTouched: {
        email: false,
        password: false,
      },
      hasError: {
        email: false,
        password: false,
      },
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  selectHandler = field => (event) => {
    const { errorOccured, isTouched } = this.state;
    this.setState({
      [field]: event.target.value,
      errorOccured: { ...errorOccured, [field]: '' },
      isTouched: { ...isTouched, [field]: true },
    });
  };

  selectEventHandler = field => () => {
    const {
      name, email, errorOccured, hasError, password, confirmPassword,
    } = this.state;
    this.checkoutNameSchema
      .validate({
        name, email, password, confirmPassword,
      }, { abortEarly: false })
      .then(() => {
        this.setState({
          errorOccured: { ...errorOccured, [field]: '' },
          hasError: { ...hasError, [field]: false },
        });
      })
      .catch((error) => {
        this.errorHandler(field, error);
      });
  };

  errorHandler = (field, error) => {
    const { errorOccured, hasError } = this.state;
    error.inner.forEach((element) => {
      if (element.path === field) {
        this.setState({
          errorOccured: { ...errorOccured, [field]: element.message },
          hasError: { ...hasError, [field]: true },
        });
      }
    });
  };

  forErrors = () => {
    const { hasError, isTouched } = this.state;
    const obj = Object.values(hasError);
    const objForTouched = Object.values(isTouched);
    let i;
    for (i = 0; i < obj.length; i += 1) {
      if (obj[i]) return false;
    }
    for (i = 0; i < objForTouched.length; i += 1) {
      if (!objForTouched[i]) return false;
    }
    return true;
  };

  render() {
    const { classes } = this.props;
    const { errorOccured } = this.state;
    console.log('State', this.state);
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
         Log In
          </Typography>
          <div>
            <Grid container spacing={24} className={classes.field}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-password-input"
                  label="Email"
                  style={{ margin: '3px', width: 350 }}
                  type="email"
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  onChange={this.selectHandler('email')}
                  onBlur={this.selectEventHandler('email')}
                  error={errorOccured.email}
                  helperText={errorOccured.email}
                  InputProps={{

                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton>{<Email />}</IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-search"
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  style={{ margin: '3px', width: 350 }}
                  onChange={this.selectHandler('password')}
                  onBlur={this.selectEventHandler('password')}
                  error={errorOccured.password}
                  helperText={errorOccured.password || ''}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="Toggle password visibility"
                        >
                          <VisibilityOff />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                { this.forErrors() ? (
                  <Button
                    onClick={this.handleClose}
                    color="primary"
                    disabled={false}
                    type="submit"
                    fullWidth
                    variant="contained"
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    onClick={this.handleClose}
                    color="primary"
                    disabled
                    type="submit"
                    fullWidth
                    variant="contained"
                  >
                          Submit
                  </Button>
                )}
              </Grid>
            </Grid>
          </div>
        </Paper>
      </main>
    );
  }
}

LogIn.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(LogIn);
