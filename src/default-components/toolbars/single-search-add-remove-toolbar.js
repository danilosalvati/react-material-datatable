import React from 'react';
import headerStyle from '../../styles/header-style'

import SearchButton from './search-button';
import AddButton from './add-button';
import DeleteButton from './delete-button'

export default function SingleSearchAndAddToolbar({title}) {

  return (
    <div style={headerStyle.toolbarStyle}>
      <div style={headerStyle.contentStyle}>
        <label style={{verticalAlign:'middle'}}>{title}</label>
        <div style={headerStyle.buttonsBar}>
          <div style={{paddingLeft:'24px'}}>
            <SearchButton/>
          </div>
          <div style={{paddingLeft:'24px'}}>
            <DeleteButton isEnabled={false}/>
          </div>
          <div style={{paddingLeft:'24px'}}>
            <AddButton/>
          </div>
        </div>
      </div>
    </div>
  );
}

SingleSearchAndAddToolbar.propTypes = {
  title: React.PropTypes.string
};

SingleSearchAndAddToolbar.defaultProps = {
  title: ""
};
