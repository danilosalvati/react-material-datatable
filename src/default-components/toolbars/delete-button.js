import React from 'react';


export default function DeleteButton({isEnabled, onClickFunction}) {

  let fillOpacity = '0.54';
  if (!isEnabled) {
    fillOpacity = '0.20';
    onClickFunction = () => {};
  }

  return (
    <div onClick={onClickFunction}>
      <svg width='24px' height='24px'>
        <path fillOpacity={fillOpacity}
              d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
      </svg>
    </div>
  );
}

DeleteButton.propTypes = {
  onClickFunction: React.PropTypes.func,
  isEnabled:React.PropTypes.bool
};

DeleteButton.defaultProps = {
  onClickFunction: () => {
  },
  isEnabled:true
};

