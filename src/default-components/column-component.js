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
  },
  hoveredColumn: {
    cursor: 'pointer'
  },
  sortArrow: {
    fillOpacity: 0.87
  },

  hoveredsortArrow: {
    fillOpacity: 0.38
  }
};

export default class DefaultColumnComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hovered: false};
    this.changeHoverMode = this.changeHoverMode.bind(this);
  }

  changeHoverMode() {
    this.setState({hovered: !this.state.hovered});
  }


  render() {

    let style = {...columnStyle.standardColumn};
    if (this.props.sortOrder === ASCENDANT || this.props.sortOrder === DESCENDANT) {
      style = {...style, ...columnStyle.sortedColumn}
    }

    let fillOpacity = columnStyle.sortArrow.fillOpacity;
    let sortOrder = this.props.sortOrder;
    if (this.state.hovered) {
      if (this.props.isSortable) {
        style = {...style, ...columnStyle.hoveredColumn};

        if (this.props.sortOrder === NOT_SORTED) {
          fillOpacity = columnStyle.hoveredsortArrow.fillOpacity;
          sortOrder = ASCENDANT;
        }
      }
    }

    return (<th style={style}
                onClick={this.props.onColumnSelection}
                onMouseEnter={() => {console.log("CIAO"); this.changeHoverMode()}}
                onMouseLeave={() => {console.log("CIAO2"); this.changeHoverMode()}}>
      <SortArrow sortOrder={sortOrder}
                 fillOpacity={fillOpacity}/>
      {this.props.column.name}</th>);
  }
}

DefaultColumnComponent.propTypes = {
  column: React.PropTypes.object.isRequired,
  isSortable: React.PropTypes.bool.isRequired,
  sortOrder: React.PropTypes.oneOf([DESCENDANT, ASCENDANT, NOT_SORTED]),
  onColumnSelection: React.PropTypes.func
};
