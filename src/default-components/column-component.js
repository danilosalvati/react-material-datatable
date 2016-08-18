import React from 'react';
import SortArrow from './sort-arrow';

const DESCENDANT = 'descendant';
const ASCENDANT = 'ascendant';
const NOT_SORTED = 'not_sorted';

let columnStyle = {
  standardColumn: {
    fontFamily: 'Roboto, sans-serif',
    fontStyle: 'medium',
    fontSize: '12px',
    color: 'rgba(0,0,0,0.54)',
    height: '56px',
    paddingRight: '56px',
    textAlign: 'left',
  },
  sortedColumn: {
    color: 'rgba(0,0,0,0.87)'
  }
};

export default class DefaultColumnComponent extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    let style = {...columnStyle.standardColumn};
    if(this.props.sortOrder === ASCENDANT || this.props.sortOrder === DESCENDANT) {
      style = {...style, ...columnStyle.sortedColumn}
    }

    return (<th style={style}>
      <SortArrow sortOrder={this.props.sortOrder}/>
      {this.props.column.name}</th>);
  }
}

DefaultColumnComponent.propTypes = {
  column: React.PropTypes.object.isRequired,
  sortOrder: React.PropTypes.oneOf([DESCENDANT, ASCENDANT, NOT_SORTED]).isRequired,
};
