import React from 'react';
import DefaultColumnComponent from './default-components/column-component';
import DefaultRowComponent from './default-components/row-component';
import tableStyle from './styles/table-style';
import CheckBox from './default-components/check-box';
import Card from './default-components/card';
import Paginator from './default-components/paginator';
import {dataValidator} from './utils/validators';
import {sortRows, selectAllRows, unselectAllRows} from './utils/utilities';

import SingleSearchAndAddToolbar from './default-components/toolbars/single-search-add-remove-toolbar';

export default class Table extends React.Component {

  constructor(props) {
    super(props);

    let columns = this.props.columns.sort((column1, column2) => {
      return column1.position - column2.position;
    });

    let rows = [];
    let selectedCount = 0;
    this.props.data.forEach(row => {
      if (!row.hasOwnProperty('selected')) {
        row.selected = false;
      } else if (row.selected) {
        selectedCount++;
      }
      rows.push(row);
    });

    let checkAllState = 'unselected';
    if (selectedCount === rows.length) {
      checkAllState = "selected";
    } else if (selectedCount > 0) {
      checkAllState = 'undeterminated';
    }

    columns.map(column => {
      column.sortOrder = 'not_sorted'
    });

    if (this.props.sortable) {
      columns[0].sortOrder = 'ascendant';
      rows = sortRows(columns[0], 'ascendant', rows);
    }

    /* Get only visible rows (useful for pagination) */
    let visibleRows = rows.slice(this.props.rowsPerPage * (this.props.page - 1),
      this.props.rowsPerPage * this.props.page);

    this.state = {
      columns,
      rows,
      visibleRows,
      checkAllState,
      page: this.props.page,
      rowsPerPage: this.props.rowsPerPage
    };

    this.selectionCallback = this.selectionCallback.bind(this);
    this.sortCallback = this.sortCallback.bind(this);
    this.changePage = this.changePage.bind(this);
    this.changePagePerRows = this.changePagePerRows.bind(this);
  }

  /** Sorting **/

  sortCallback(currentValue, index, array) {

    let previousOrder = array[index].sortOrder;

    array.map(column => {
      column.sortOrder = 'not_sorted';
    });

    let rows;

    if (previousOrder === 'descendant' || previousOrder === "not_sorted") {
      array[index].sortOrder = 'ascendant';
      rows = sortRows(currentValue, 'ascendant', this.state.rows);
    } else {
      array[index].sortOrder = 'descendant';
      rows = sortRows(currentValue, 'descendant', this.state.rows);
    }

    let visibleRows = rows.slice(this.state.rowsPerPage * (this.state.page - 1),
      this.state.rowsPerPage * this.state.page);

    this.setState({columns: array, rows, visibleRows});

    this.props.onColumnSelection(currentValue, index, array);
  }

  /** Selection **/

  selectionCallback(currentValue, index, array) {
    array[index].selected = !array[index].selected;

    let count = 0;
    array.forEach(row => {
      if (row.selected) {
        count++;
      }
    });

    let checkAllState = 'unselected';
    if (count === array.length) {
      checkAllState = "selected";
    } else if (count > 0) {
      checkAllState = 'undeterminated';
    }

    this.setState({rows: array, checkAllState});

    // Execute user callback
    this.props.onRowSelection(currentValue, index, array);
  }

  checkAllCallback(columns, rows) {
    switch (this.state.checkAllState) {
      case 'unselected':
        this.setState({checkAllState: 'selected', rows: selectAllRows(rows)});
        break;
      case 'selected':
      case 'undeterminated':
        this.setState({checkAllState: 'unselected', rows: unselectAllRows(rows)});
    }

    this.props.onSelectAll(columns, rows);

  }

  /** Pagination **/
  changePage(newPage) {
    let visibleRows = this.state.rows.slice(this.state.rowsPerPage * (newPage - 1),
      this.state.rowsPerPage * newPage);

    this.setState({page: newPage, visibleRows});
  }

  changePagePerRows(newPagePerRows) {

    let firstElementToShow = this.state.rowsPerPage * (this.state.page - 1);
    let newPage = Math.floor(firstElementToShow / newPagePerRows) + 1;

    let visibleRows = this.state.rows.slice(newPagePerRows * (newPage - 1),
      newPagePerRows * newPage);

    this.setState({rowsPerPage: newPagePerRows, page: newPage, visibleRows});
  }

  render() {

    let toolbarComponent;
    switch (this.props.toolbar) {
      case 'singleSearchAddRemove':
        toolbarComponent = (<SingleSearchAndAddToolbar title="MyToolbar"/>);
        break;
      case 'none':
      default:
        toolbarComponent = null;
    }

    let tableComponent = (<table style={{...tableStyle, width: this.props.width, height:this.props.height}}>
      <thead>
      <tr>
        <th style={{width:'24px'}}><CheckBox isHeader={true}
                                             checkBoxMode={this.state.checkAllState}
                                             onChangeFunction={() => this.checkAllCallback(this.state.columns,this.state.rows)}/>
        </th>
        {this.state.columns.map((column, index, array) => {
          let onColumnSelection = () => {
          };

          if (this.props.sortable) {
            onColumnSelection = () => this.sortCallback(column, index, array)
          }

          return <DefaultColumnComponent key={column.id}
                                         column={column}
                                         isSortable={this.props.sortable}
                                         sortOrder={column.sortOrder}
                                         onColumnSelection={() => onColumnSelection(column, index, array)}/>
        })}
      </tr>
      </thead>

      <tbody>
      {this.state.visibleRows.map((row, index, array) => {
        return <DefaultRowComponent key={index}
                                    columns={this.state.columns}
                                    row={row}
                                    isSelected={row.selected}
                                    onRowSelection={() => this.selectionCallback(row,
                                    this.state.rowsPerPage * (this.state.page - 1) + index,
                                    this.state.rows)}/>
      })}
      </tbody>

    </table>);

    if (this.props.useCard) {
      return (
        <Card width={this.props.width} height={this.props.height}>
          {toolbarComponent}
          {tableComponent}
          <Paginator page={this.state.page}
                     totalRows={this.state.rows.length}
                     rowsPerPage={this.state.rowsPerPage}
                     onChangePageFunction={(newPage) => this.changePage(newPage)}
                     onChangePagePerRowsFunction={(newPagePerRows) => this.changePagePerRows(newPagePerRows)}/>
        </Card>);
    }

    return (<div style={{width:this.props.width, height: this.props.height, overflow:'auto'}}>
      {tableComponent}
    </div>);
  }
}

Table.propTypes = {
  columns: React.PropTypes.array.isRequired,
  data: dataValidator,
  columnComponent: React.PropTypes.func,
  rowComponent: React.PropTypes.func,
  onRowSelection: React.PropTypes.func,
  onColumnSelection: React.PropTypes.func,
  onSelectAll: React.PropTypes.func,
  sortable: React.PropTypes.bool,
  useCard: React.PropTypes.bool,
  width: React.PropTypes.string,
  height: React.PropTypes.string,
  rowsPerPage: React.PropTypes.oneOf([5, 10, 15]),
  page: React.PropTypes.number,
  toolbar: React.PropTypes.oneOfType([
    React.PropTypes.func,
    React.PropTypes.oneOf(['none', 'singleSearchAddRemove']),
  ])
};

Table.defaultProps = {
  columnComponent: DefaultColumnComponent,
  rowComponent: DefaultRowComponent,
  onRowSelection: () => null,
  onColumnSelection: () => null,
  onSelectAll: () => null,
  sortable: true,
  useCard: true,
  width: '100%',
  height: '100%',
  rowsPerPage: 5,
  page: 1,
  toolbar: 'none'
};

