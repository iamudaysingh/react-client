
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import * as yup from 'yup';
import IconButton from '@material-ui/core/IconButton';
import Person from '@material-ui/icons/Person';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Mail';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default class FormDialog extends React.Component {
  checkoutNameSchema = yup.object().shape({
    name: yup
      .string()
      .required()
      .max(255),
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .required()
      .min(8)
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/, 'Password can contain at least one upper and lower letter and at least one numeric and special character.'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null])
      .required('Password confirm is required'),
  });


  constructor(props) {
    super(props);
    this.state = {
      open: true,
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorOccured: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      isTouched: {
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
      },
      hasError: {
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
      },
    };
  }

  styles = themes => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: themes.spacing.unit,
      marginRight: themes.spacing.unit,
    }
  })

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
      .then((valid) => {
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
    const { open, errorOccured } = this.state;
    console.log(this.state);

    return (
      <div>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter Trainee Details
            </DialogContentText>
          </DialogContent>
          <div>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-email-input"
                  label="Name"
                  fullWidth
                  width="100px"
                  style={{ margin: '3px', width: 590 }}
                  type="text"
                  name="name"
                  multiline="true"
                  autoComplete="name"
                  variant="outlined"
                  onChange={this.selectHandler('name')}
                  onBlur={this.selectEventHandler('name')}
                  error={errorOccured.name}
                  helperText={errorOccured.name}
                  InputProps={{

                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton>{<Person />}</IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-password-input"
                  label="Email"
                  style={{ margin: '3px', width: 590 }}
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
              <Grid item xs={6}>
                <TextField
                  id="outlined-search"
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
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
              <Grid item xs={6}>
                <TextField
                  id="outlined-confirm-password"
                  label="Confirm Password"
                  type="password"
                  helperText="Please enter your password again"
                  margin="normal"
                  variant="outlined"
                  onChange={this.selectHandler('confirmPassword')}
                  onBlur={this.selectEventHandler('confirmPassword')}
                  error={errorOccured.confirmPassword}
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
            </Grid>
          </div>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            { this.forErrors() ? (
              <Button onClick={this.handleClose} color="primary" disabled={false}>
              Submit
              </Button>
            ) : (
              <Button onClick={this.handleClose} color="primary" disabled>
            Submit
              </Button>
            )}
          </DialogActions>

        </Dialog>
      </div>
    );
  }
}
