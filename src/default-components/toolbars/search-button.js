import React from 'react';


export default function SearchButton({onClickFunction, isSelected}) {

  let fillOpacity = '0.54';
  let path = `M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,
              20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,
              3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z`;
  if (isSelected) {
    fillOpacity = '0.87';
    path = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
  }

  return (
    <div onClick={onClickFunction}>
      <svg width='24px' height='24px'>
        <path fillOpacity={fillOpacity}
              d={path}/>
      </svg>
    </div>
  );
}

SearchButton.propTypes = {
  onClickFunction: React.PropTypes.func,
  isSelected: React.PropTypes.bool,
};

SearchButton.defaultProps = {
  onClickFunction: () => {
  },
  isSelected: false
};

