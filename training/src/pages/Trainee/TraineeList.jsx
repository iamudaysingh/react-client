
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FormDialog from './Components/AddDialog/AddDialog';
import trainees from './data/trainee';
import SimpleTable from './Components/TraineeTable/TraineeTable';
import EditDialog from './Components/EditDialog';
import { RemoveDialog } from './Components';

export default class TraineeList extends React.Component {
  state = {
    dialoge: false,
    editDialog: false,
    orderBy: '',
    order: 'asc',
    edit: false,
    remove: false,
    toggle: '',
    name: '',
    email: '',
    id: '',
    createdAt: '',
    page: '0',
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


  handleEditIconOpen = (event, name, email) => {
    event.stopPropagation();
    this.setState({ edit: true, name, email });
  }

  handleRemoveDialogOpen = (event, name, email, id, createdAt) => {
    event.stopPropagation();
    this.setState({
      remove: true, name, email, id, createdAt,
    });
  }

  toggle = () => {
    this.setState(prevState => ({ edit: !prevState.edit }));
  }

  toggleRemove = () => {
    this.setState(prevState => ({ remove: !prevState.remove }));
  }

  handleChangePage = () => {
    this.setState(prevState => ({ page: prevState.page }));
  }

  render() {
    const {
      dialoge, order, orderBy, edit, remove, name, email, page,
    } = this.state;

    if (!(edit || remove)) { console.log(this.state); }


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
            count={100}
            page={page}
            rowsPerPage={10}
            onChangePage={this.handleChangePage}
            actions={[
              {
                icon: <EditIcon />,
                handler: this.handleEditIconOpen,
              },
              {
                icon: <DeleteIcon />,
                handler: this.handleRemoveDialogOpen,
              },
            ]}
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
                align: 'left',
                format: this.getDateFormat,
              },
            ]}
          />
        </div>
        <div>
          { dialoge ? <FormDialog /> : '' }
        </div>
        <div>
          <EditDialog
            editState={edit}
            toggleDialog={this.toggle}
            name={name}
            email={email}
            newEdit={this.handleEditIconOpen}
          />
        </div>
        <div>
          <RemoveDialog removeState={remove} toggleDialog={this.toggleRemove} />
        </div>
        <div>
          {this.findTrainee()}
        </div>
      </>
    );
  }
}

TraineeList.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
