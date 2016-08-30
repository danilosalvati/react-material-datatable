import React from 'react';
import headerStyle from '../../styles/header-style'

import SearchButton from './search-button';
import AddButton from './add-button';
import DeleteButton from './delete-button'


export default class SingleSearchAndAddToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searching: false};
  }

  render() {

    let contentBar = ( <label style={{verticalAlign:'middle'}}>{this.props.title}</label>);
    if (this.state.searching) {
      contentBar = (<input type="text" placeholder='Search...'></input>);
    }

    return (
      <div style={headerStyle.toolbarStyle}>
        <div style={headerStyle.contentStyle}>
          {contentBar}
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
}

SingleSearchAndAddToolbar.propTypes = {
  title: React.PropTypes.string
};

SingleSearchAndAddToolbar.defaultProps = {
  title: ""
};
