import React from 'react';

let columnStyle = {
  standardColumn: {
    fontFamily: 'Roboto, sans-serif',
    fontStyle: 'medium',
    fontSize: '12px',
    color: 'rgba(0,0,0,0.54)',
    height: '56px',
    paddingRight: '56px',
    textAlign: 'left'
  },
  sortedColumn: {
    fontSize: '12px',
    color: 'rgba(0,0,0,0.87)'
  }
};

export default class DefaultColumnComponent extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (<th style={columnStyle.standardColumn}>{this.props.column.name}</th>);
  }
}

DefaultColumnComponent.propTypes = {
  column: React.PropTypes.object.isRequired,
};
