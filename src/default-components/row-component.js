import React from 'react';
import CheckBox from './check-box';

let rowStyle = {
  standardRow: {
    backgroundColor: '#FFFFFF',
    height: '48px',
    border: '1px solid rgba(0,0,0,0.10)',
    borderStyle: 'solid none none none',
  },
  hoveredRow: {
    backgroundColor: '#EEEEEE',
    height: '48px',
    border: '1px solid rgba(0,0,0,0.10)',
    borderStyle: 'solid none none none',
  },
  selectedRow: {
    backgroundColor: '#F5F5F5',
    height: '48px',
    border: '1px solid rgba(0,0,0,0.10)',
    borderStyle: 'solid none none none',
  },
  textCell: {
    textAlign: 'left',
  },
  numericCell: {
    textAlign: 'right',
  }
};

export default class DefaultRowComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {hovered: false, selected: false};
    this.changeHoverMode = this.changeHoverMode.bind(this);
    this.changeSelectedMode = this.changeSelectedMode.bind(this);
  }

  changeHoverMode() {
    this.setState({hovered: !this.state.hovered});
  }

  changeSelectedMode() {
    this.setState({selected: !this.state.selected});
  }

  render() {

    let cells = [];
    cells.push((
      <td key={"-1"}><CheckBox isHeader={false} onChangeFunction={this.changeSelectedMode} checkBoxMode='unselected'/>
      </td>));
    this.props.columns.forEach((column, index) => {
      cells.push((
        <td key={index} style={rowStyle.textCell}>{this.props.row[column.id]}</td>));
    });

    return (
      <tr style={this.state.selected?rowStyle.selectedRow: this.state.hovered?rowStyle.hoveredRow:rowStyle.standardRow}
          onMouseEnter={() => this.changeHoverMode()}
          onMouseLeave={() => this.changeHoverMode()}>{cells}</tr>
    );

  }
}

DefaultRowComponent.propTypes = {
  columns: React.PropTypes.array.isRequired,
  row: React.PropTypes.object.isRequired
};
