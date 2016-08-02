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
    return (
      <div>
        <p>This is a first example for the table component</p>
        <Table columns={columns} data={data}/>
      </div>
    )
  }
}
