import React from 'react';
import DefaultColumnComponent from './default-components/column-component';
import DefaultRowComponent from './default-components/row-component';
import tableStyle from './table-style';
import CheckBox from './default-components/check-box';

export default class Table extends React.Component {

  constructor(props) {
    super(props);

    let columns = this.props.columns.sort(this._orderColumnsByPosition);
    let rows = [];
    this.props.data.forEach(row => {
      if (!row.hasOwnProperty('selected')) {
        row.selected = false;
      }
      rows.push(row);
    });

    this.state = {columns, rows};

    this.selectionCallback = this.selectionCallback.bind(this);
  }

  _orderColumnsByPosition(column1, column2) {
    return column1.position - column2.position;
  }

  selectionCallback(currentValue, index, array) {
    array[index].selected = !array[index].selected
    this.setState({rows: array});

    // Execute user callback
    this.props.onRowSelection(currentValue, index, array);
  }

  render() {
    return (
      <table style={tableStyle}>

        <thead>
        <tr>
          <th><CheckBox isHeader={true} checkBoxMode='unselected'/></th>
          {this.state.columns.map(column => {
            return <DefaultColumnComponent key={column.id} column={column}/>
          })}
        </tr>
        </thead>

        <tbody>
        {this.state.rows.map((row, index, array) => {
          return <DefaultRowComponent key={index}
                                      columns={this.state.columns}
                                      row={row}
                                      isSelected={row.selected}
                                      onRowSelection={() => this.selectionCallback(row,index, array)}/>
        })}
        </tbody>

      </table>);
  }
}

Table.propTypes = {
  columns: React.PropTypes.array.isRequired,
  data: function (props, propName, componentName) {

    if (Object.prototype.toString.call(props[propName]) !== '[object Array]') {
      console.error(`Warning: Invalid prop ${propName} type, it must be an array. Check data property passed to Table`);
      return new Error(`Invalid prop ${propName} type, it must be an array`);
    }

    let columns = props['columns'];
    let acceptedTags = ['selected'];
    props[propName].forEach(dataRow => {
      for (let col in dataRow) {
        
        let found = false;
        acceptedTags.forEach(tag => {
          found = found || (col === tag)
        });
        for (let i = 0; i < columns.length && !found; i++) {
          found = columns[i].id === col;
        }

        if (!found) {
          console.error(`Warning: Invalid column ${col} in data. Check data property passed to Table`);
          return new Error(`Invalid column ${col} in data`);
        }
      }
    });

  },

  columnComponent: React.PropTypes.func,
  rowComponent: React.PropTypes.func,
  onRowSelection: React.PropTypes.func

};

Table.defaultProps = {
  columnComponent: DefaultColumnComponent,
  rowComponent: DefaultRowComponent,
  onRowSelection: () => null
};

