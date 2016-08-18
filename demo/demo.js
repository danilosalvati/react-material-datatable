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

    return (
      <div>
        <p>This is a first example for the table component</p>
        <Table columns={columns} data={data} onRowSelection={rowSelectionCallback} sortable={true}/>
      </div>
    )
  }
}
