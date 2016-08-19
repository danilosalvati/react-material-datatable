import React from 'react';
import CheckBox from './check-box';
import rowStyle from '../styles/row-style';

export default class DefaultRowComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {hovered: false};
    this.changeHoverMode = this.changeHoverMode.bind(this);
  }

  changeHoverMode() {
    this.setState({hovered: !this.state.hovered});
  }

  render() {

    let checkBoxMode = 'unselected';
    if (this.props.isSelected) {
      checkBoxMode = 'selected'
    }

    let cells = [];
    cells.push((
      <td key={"-1"}><CheckBox isHeader={false}
                               onChangeFunction={this.props.onRowSelection}
                               checkBoxMode={checkBoxMode}/>
      </td>));
    this.props.columns.forEach((column, index) => {
      cells.push((
        <td key={index} style={rowStyle.textCell}>{this.props.row[column.id]}</td>));
    });

    return (
      <tr
        style={this.state.hovered?rowStyle.hoveredRow: this.props.isSelected?rowStyle.selectedRow:rowStyle.standardRow}
        onMouseEnter={() => this.changeHoverMode()}
        onMouseLeave={() => this.changeHoverMode()}>{cells}</tr>
    );

  }
}

DefaultRowComponent.propTypes = {
  columns: React.PropTypes.array.isRequired,
  row: React.PropTypes.object.isRequired,
  isSelected: React.PropTypes.bool,
  onRowSelection: React.PropTypes.func.isRequired
};

DefaultRowComponent.defaultProps = {
  isSelected: false
};
