import React from 'react';
import DefaultColumnComponent from './default-components/column-component';
import DefaultRowComponent from './default-components/row-component';
import tableStyle from './table-style';

export default class Table extends React.Component {

  constructor(props) {
    super(props);

    let columns = this.props.columns.sort(this._orderColumnsByPosition);
    this.state = {columns};
  }

  _orderColumnsByPosition(column1, column2) {
    return column1.position - column2.position;
  }

  render() {
    return (
      <table style={tableStyle}>

        <thead>
        <tr>
          {this.state.columns.map(column => {
            return <DefaultColumnComponent key={column.id} column={column}/>
          })}
        </tr>
        </thead>

        <tbody>
        {this.props.data.map((rowData, index) => {
          return <DefaultRowComponent key={index} columns={this.state.columns} row={rowData}/>
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
    props[propName].forEach(dataRow => {
      for (let col in dataRow) {

        let found = false;
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

};

Table.defaultProps = {
  columnComponent: DefaultColumnComponent,
  rowComponent: DefaultRowComponent
};

