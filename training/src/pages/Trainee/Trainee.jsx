
import React from 'react';
import Button from '@material-ui/core/Button';
import FormDialog from './Components/AddDialog/AddDialog';


export default class Trainee extends React.Component {
  state = {
    dialoge: false,
  };


  handleClickOpen = () => {
    this.setState({ dialoge: true });
  };


  render() {
    const { dialoge } = this.state;
    return (
      <>
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleClickOpen}
          >
          ADD TRAINEE
          </Button>
        </div>
        { dialoge ? <FormDialog /> : '' }
      </>
    );
  }
}
