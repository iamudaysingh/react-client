
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormDialog from './Components/AddDialog/AddDialog';
import trainees from './data/trainee';
import SimpleTable from './Components/TraineeTable/TraineeTable';

export default class TraineeList extends React.Component {
  state = {
    dialoge: false,
    orderBy: '',
    order: 'asc',
  };


  selectHandler = (value) => {
    const { history } = this.props;
    history.push(`/trainee/${value}`);
  };

  sortHandler = (id, field) => {
    const { order, orderBy } = this.state;
    if (orderBy === field && order === 'asc') {
      return this.setState({ order: 'desc', orderBy: field });
    }
    return this.setState({ order: 'asc', orderBy: field });
  }


  handleClickOpen = () => {
    this.setState({ dialoge: true });
  };


  findTrainee = () => (
    <ul>
      {trainees.map(item => (
        <li>
          <Link to={`/trainee/${item.id}`}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )

  getDateFormat = (value) => {
    const formattedDate = moment(value).format('dddd, MMMM Do YYYY, h:mm:ss ');
    return formattedDate;
  }


  render() {
    console.log(this.state);
    const { dialoge, order, orderBy } = this.state;
    return (
      <>
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleClickOpen}
          >
          ADD TRAINEE DETAILS
          </Button>
          <SimpleTable
            id="Trainee-Table"
            data={trainees}
            onSelect={this.selectHandler}
            onSort={this.sortHandler}
            order={order}
            orderBy={orderBy}
            columns={[
              {
                field: 'name',
                label: 'Name',
                align: 'center',
              },
              {
                field: 'email',
                label: 'Email Address',
                format: value => value && value.toUpperCase(),
              },
              {
                field: 'createdAt',
                label: 'Date',
                align: 'right',
                format: this.getDateFormat,
              },
            ]}
          />
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

TraineeList.propTypes = {
  history: PropTypes.node.isRequired,
};
