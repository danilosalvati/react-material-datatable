import React from 'react';


export default function InputSearch({searchCallback}) {


  return (
    <input type="text" placeholder='Search...' onChange={(event) => searchCallback(event.target.value)}/>
  );
}

InputSearch.propTypes = {
  searchCallback: React.PropTypes.func
};

InputSearch.defaultProps = {
  searchCallback: () => {
  }
};
