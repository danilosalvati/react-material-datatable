import React from 'react';
import headerStyle from '../../styles/header-style'

import SearchButton from './search-button';
import AddButton from './add-button';
import DeleteButton from './delete-button'
import InputSearch from './input-search';


export default class SingleSearchAndAddToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searching: false};
  }

  render() {

    let contentBar = ( <label style={{verticalAlign:'middle'}}>{this.props.title}</label>);
    if (this.state.searching) {
      contentBar = (<InputSearch searchCallback={this.props.searchCallback}/>);
    }

    return (
      <div style={headerStyle.toolbarStyle}>
        <div style={headerStyle.contentStyle}>
          {contentBar}
          <div style={headerStyle.buttonsBar}>
            <div style={{paddingLeft:'24px'}}>
              <SearchButton onClickFunction={() => this.setState({searching: !this.state.searching})}
                            isSelected={this.state.searching}/>
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
  title: React.PropTypes.string,
  searchCallback: React.PropTypes.func
};

SingleSearchAndAddToolbar.defaultProps = {
  title: "",
  searchCallback: () => {
  }
};
