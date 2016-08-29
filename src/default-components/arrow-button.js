import React from 'react';

const PREVIOUS_ARROW = 'previous_arrow';
const NEXT_ARROW = 'next_arrow';

export default function ArrowButton({arrowType, isEnabled, onClickFunction}) {

  let fillOpacity = '0.54';
  if (!isEnabled) {
    fillOpacity = '0.20';
    onClickFunction = () => {};
  }

  let path;
  switch (arrowType) {
    case PREVIOUS_ARROW:
      path = (<path fill='#000' fillOpacity={fillOpacity}
                    d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>);
      break;
    case NEXT_ARROW:
      path = (<path fill='#000' fillOpacity={fillOpacity}
                    d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>);
      break;
  }

  return (
    <div style={{display:'inline-table', marginLeft:'12px', marginRight:'12px', verticalAlign:'middle'}} onClick={onClickFunction}>
      <svg width='24px' height='24px'>
        {path}
      </svg>
    </div>
  );
}

ArrowButton.propTypes = {
  arrowType: React.PropTypes.oneOf([PREVIOUS_ARROW, NEXT_ARROW]).isRequired,
  isEnabled: React.PropTypes.bool.isRequired,
  onClickFunction: React.PropTypes.func
};

ArrowButton.defaultProps = {
  onClickFunction: () => {
  }
};

