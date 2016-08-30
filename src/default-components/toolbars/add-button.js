import React from 'react';


export default function AddButton({onClickFunction}) {

  let fillOpacity = '0.54';

  return (
    <div onClick={onClickFunction}>
      <svg width='24px' height='24px'>
        <path fillOpacity={fillOpacity}
              d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
      </svg>
    </div>
  );
}

AddButton.propTypes = {
  onClickFunction: React.PropTypes.func
};

AddButton.defaultProps = {
  onClickFunction: () => {
  }
};

