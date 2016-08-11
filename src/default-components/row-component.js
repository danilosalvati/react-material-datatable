import React from 'react';

let rowStyle = {
  standardRow: {
    backgroundColor: '#FFFFFF',
    height: '48px',
    border: '1px solid rgba(0,0,0,0.10)',
    borderStyle: 'solid none none none',
  },
  hoveredRow: {
    backgroundColor: '#F5F5F5',
    height: '48px',
    border: '1px solid rgba(0,0,0,0.10)',
    borderStyle: 'solid none none none',
  },
  textCell: {
    textAlign: 'left',
    paddingLeft: '28px',
    paddingRight: '28px',

  },
  numericCell: {
    textAlign: 'right',
    paddingLeft: '28px',
    paddingRight: '28px',

  }
};

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

    let cells = [];
    this.props.columns.forEach((column, index) => {
      cells.push((<td key={index} style={rowStyle.textCell}>{this.props.row[column.id]}</td>));
    });

    return (
      <tr style={this.state.hovered?rowStyle.hoveredRow:rowStyle.standardRow}
          onMouseEnter={() => this.changeHoverMode()}
          onMouseLeave={() => this.changeHoverMode()}>{cells}</tr>
    );

  }
}

DefaultRowComponent.propTypes = {
  columns: React.PropTypes.array.isRequired,
  row: React.PropTypes.object.isRequired
};
