import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

export default class DeleteDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      removeState, toggleDialog,
    } = this.props;
    return (
      <div>
        <Dialog
          open={removeState}
          onClose={toggleDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" width="100">Remove Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you really want to delete trainee ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={toggleDialog} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
DeleteDialog.propTypes = {
  toggleDialog: PropTypes.func.isRequired,
  removeState: PropTypes.bool.isRequired,
};
