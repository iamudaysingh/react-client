import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class EditDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


    };
  }

  render() {
    const {
      editState, toggleDialog, name, email, newEdit,
    } = this.props;
    return (
      <div>
        <Dialog
          open={editState}
          onClose={toggleDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Remove Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Do you really want to delete trainee?
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              onChange={event => newEdit(event, event.target.value, email)}
              defaultValue={name}
              id="name"
              label="name"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              onChange={event => newEdit(event, name, event.target.value)}
              defaultValue={email}
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={toggleDialog} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
EditDialog.propTypes = {
  toggleDialog: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  newEdit: PropTypes.func.isRequired,
  editState: PropTypes.bool.isRequired,
};
