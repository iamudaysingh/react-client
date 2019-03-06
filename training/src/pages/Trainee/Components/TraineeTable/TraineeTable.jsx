import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 600,
  },
  row: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.grey[300],
    },
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.grey[400],
    },
  },
});


class SimpleTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const {
      classes,
      columns,
      data,
      id,
      onSort,
      onSelect,
      order,
      orderBy,
      actions,
      count,
      rowsPerPage,
      page,
      handleChangePage,
    } = this.props;


    return (
      <Paper className={classes.root}>
        <Table id={id} className={classes.table} onClick={this.handleCellClick}>
          <TableHead displaySelectAll={false}>
            <TableRow>
              {
                columns.map((column => (
                  <TableCell
                    align={column.align}
                  >
                    <TableSortLabel
                      align={column.align}
                      active={orderBy === column.label}
                      direction={order}
                      onClick={() => onSort(column.id, column.label)}
                    >
                      {column.label || column.field}
                    </TableSortLabel>
                  </TableCell>
                )))
              }

            </TableRow>
          </TableHead>
          <TableBody>
            { data.map(column => (
              <TableRow
                key={column.id}
                className={(classes.row)}
                onClick={() => onSelect(column.id)}
              >
                {
                  columns.map(cell => (

                    (
                      <TableCell key={cell.field} align={cell.align}>
                        {cell.format ? cell.format(((column[cell.field]))) : (column[cell.field])}
                      </TableCell>

                    )
                  ))


                }

                { actions.map(element => (
                  <Grid>

                    <Button

                      onClick={
                        (event) => {
                          element.handler(event,
                            column.name, column.email, column.id, column.createdAt);
                        }
                      }

                    >

                      {element.icon}
                    </Button>


                  </Grid>
                ))}

              </TableRow>

            ))

            }
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[]}
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                onChange={handleChangePage}
              />
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  id: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  onSort: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  order: PropTypes.string,
  orderBy: PropTypes.string.isRequired,
  actions: PropTypes.objectOf(PropTypes.array).isRequired,
  count: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handleChangePage: PropTypes.number.isRequired,
};
SimpleTable.defaultProps = {
  order: 'asc',
};

export default withStyles(styles)(SimpleTable);
