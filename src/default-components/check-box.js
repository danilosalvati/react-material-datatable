import React from 'react';

const UNDETERMINATED_MODE = 'undeterminated';
const SELECTED_MODE = 'selected';
const UNSELECTED_MODE = 'unselected';

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checkBoxMode: this.props.checkBoxMode};
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode() {
    // Now I can execute the listener defined by the user
    this.props.onChangeFunction();
  }

  render() {

    let fillOpacity = '0.87';
    if (this.props.isHeader) {
      fillOpacity = '0.54';
    }

    let path;
    switch (this.props.checkBoxMode) {
      case UNDETERMINATED_MODE:
        path = (<path fill='#2196F3' fillOpacity={fillOpacity}
                      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/>);
        break;
      case SELECTED_MODE:
        path = (<path fill='#2196F3' fillOpacity={fillOpacity}
                      d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9
        14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>);
        break;
      case UNSELECTED_MODE:
      default:
        path = (<path fillOpacity={fillOpacity}
                      d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>);
    }

    return (
      <div onClick={this.changeMode}>
        <svg style={{paddingLeft:'24px', paddingRight:'24px'}} width='24px' height='24px'>
          {path}
        </svg>
      </div>);
  }
}

CheckBox.propTypes = {
  checkBoxMode: React.PropTypes.oneOf([UNDETERMINATED_MODE, UNSELECTED_MODE, SELECTED_MODE]).isRequired,
  isHeader: React.PropTypes.bool.isRequired,
  onChangeFunction: React.PropTypes.func
};


CheckBox.defaultProps = {
  onChangeFunction: () => {
  }
};

