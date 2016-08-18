export function numericComparator(a, b) {
  return a - b;
}

export function stringComparator(a, b) {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

export function dateComparator(a, b) {
  return a - b;
}
