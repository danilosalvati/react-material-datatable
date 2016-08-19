import {stringComparator, numericComparator, dateComparator} from './comparators';

/** A function for table rows sorting */
export function sortRows(column, sortOrder, rows) {
  let compareFunction;
  switch (column.type) {
    case 'numeric':
      compareFunction = numericComparator;
      break;
    case 'date':
      compareFunction = dateComparator;
      break;
    case 'string':
    default:
      compareFunction = stringComparator;
  }

  let factor = sortOrder === 'ascendant' ? 1 : -1;
  rows.sort((a, b) => {
    return factor * compareFunction(a[column.id], b[column.id]);
  });

  return rows;
}

export function selectAllRows(rowArray) {
  rowArray.forEach(row => {
    row.selected = true;
  });

  return rowArray;
}

export function unselectAllRows(rowArray) {
  rowArray.forEach(row => {
    row.selected = false;
  });

  return rowArray;
}

