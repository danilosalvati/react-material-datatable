import React from 'react';
import ColumnComponent from './default-components/column-component';
import RowComponent from './default-components/row-component';

export default class Table extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>

        <thead>
        <tr>
          {this.props.columns.map(column => {
            return <ColumnComponent key={column.id} column={column}/>
          })}
        </tr>
        </thead>

        <tbody>
        {this.props.data.map((rowData, index) => {
          return (<RowComponent key={index} columns={this.props.columns} row={rowData}/>)
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

};

//Table.defaultProps = {};

