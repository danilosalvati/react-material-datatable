import React from 'react';

const DESCENDANT = 'descendant';
const ASCENDANT = 'ascendant';
const NOT_SORTED = 'not_sorted';

export default class SortArrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sortOrder: this.props.sortOrder};
    this.changeSortOrder = this.changeSortOrder.bind(this);
  }

  changeSortOrder() {
    // Now I can execute the listener defined by the user
    this.props.onChangeFunction();
  }

  render() {
    let path;
    switch (this.props.sortOrder) {
      case ASCENDANT:
        path = (<path fill='#000' fillOpacity={0.87}
                      d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"/>);
        break;
      case DESCENDANT:
        path = (<path fill='#000' fillOpacity={0.87}
                      d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"/>);
        break;
      case NOT_SORTED:
      default:
        path = (<path fillOpacity={0.87}/>);
    }

    return (
      <div style={{display:'inline', marginRight:'4px'}} onClick={this.changeSortOrder}>
        <svg  width='16px' height='16px' viewBox='0 0 24 24'>
          {path}
        </svg>
      </div>);
  }
}

SortArrow.propTypes = {
  sortOrder: React.PropTypes.oneOf([DESCENDANT, ASCENDANT, NOT_SORTED]).isRequired,
  onChangeFunction: React.PropTypes.func
};


SortArrow.defaultProps = {
  onChangeFunction: () => {
  }
};

