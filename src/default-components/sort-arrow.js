import React from 'react';

const DESCENDANT = 'descendant';
const ASCENDANT = 'ascendant';
const NOT_SORTED = 'not_sorted';

export default function SortArrow({sortOrder, onChangeFunction, fillOpacity}) {
  let path;
  switch (sortOrder) {
    case ASCENDANT:
      path = (<path fill='#000' fillOpacity={fillOpacity}
                    d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"/>);
      break;
    case DESCENDANT:
      path = (<path fill='#000' fillOpacity={fillOpacity}
                    d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"/>);
      break;
    case NOT_SORTED:
    default:
      path = (<path fillOpacity={fillOpacity}/>);
  }

  return (
    <div style={{display:'inline', marginRight:'4px'}} onClick={onChangeFunction}>
      <svg  width='16px' height='16px' viewBox='0 0 24 24'>
        {path}
      </svg>
    </div>);
}

SortArrow.propTypes = {
  sortOrder: React.PropTypes.oneOf([DESCENDANT, ASCENDANT, NOT_SORTED]).isRequired,
  onChangeFunction: React.PropTypes.func,
  fillOpacity: React.PropTypes.number.isRequired
};


SortArrow.defaultProps = {
  onChangeFunction: () => {
  }
};

