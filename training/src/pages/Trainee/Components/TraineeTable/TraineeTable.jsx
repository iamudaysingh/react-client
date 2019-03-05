import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
              </TableRow>
            ))
            }
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
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default withStyles(styles)(SimpleTable);
