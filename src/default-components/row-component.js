export default ({columns, row}) => {
  let cells = [];
  columns.forEach(column => {
    cells.push((<td>{row[column.id]}</td>));
  });
  return <tr>{cells}</tr>;
};
