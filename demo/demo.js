"use strict";

import React from 'react';
import {columns, data} from './utils/faker';
import {Table} from '../src/index';

export default class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    let rowSelectionCallback = (currentValue, index, array) => {
      if (currentValue.selected) {
        console.log(`row ${index} selected`);
      } else {
        console.log(`row ${index} unselected`);
      }
    };

    let onSelectAllCallback = (columns, rows) => {
      if (rows[0].selected) {
        console.log("Selected all rows");
      } else {
        console.log("Unselected all rows");
      }
    };

    return (
      <div>
        <p>This is a first example for the table component</p>
        <Table columns={columns}
               data={data}
               onRowSelection={rowSelectionCallback}
               onSelectAll={onSelectAllCallback}
               sortable={true}
               useCard={true}
               width="600px"
               toolbar='singleSearchAddRemove'
        />
      </div>
    )
  }
}
