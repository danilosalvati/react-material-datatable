let columnStyle = {
  standardColumn: {
    fontFamily: 'Roboto, sans-serif',
    fontStyle: 'medium',
    fontSize: '12px',
    color: 'rgba(0,0,0,0.54)',
    height: '56px',
    paddingLeft: '28px',
    paddingRight: '28px',
    textAlign: 'left'
  },
  sortedColumn: {
    fontSize: '12px',
    color: 'rgba(0,0,0,0.87)'
  }
};


export default ({column}) => (
  <th style={columnStyle.standardColumn}>{column.name}</th>
);
