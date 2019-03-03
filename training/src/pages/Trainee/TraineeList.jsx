
import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import FormDialog from './Components/AddDialog/AddDialog';
import trainees from './data/trainee';
import SimpleTable from './Components/TraineeTable/TraineeTable';

export default class TraineeList extends React.Component {
  state = {
    dialoge: false,
  };


  handleClickOpen = () => {
    this.setState({ dialoge: true });
  };


  findTrainee = () => {
      
    return (
        <ul>
          {trainees.map(item => (
            <li>
              <Link to={`/trainee/${item.id}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      );
  }


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
          <SimpleTable  id="Trainee-Table"
          data={trainees}
          columns={[
            {
              field: 'name',
              label: 'Name',
              align: 'center',
            },
            {
              field: 'email',
              label: 'Email Address',
            },
          ]}/>
        </div>
        <div>
        { dialoge ? <FormDialog /> : '' }
        </div>
        <div>
            {this.findTrainee()}
        </div>
      </>
    );
  }
}
