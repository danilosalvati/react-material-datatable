export function dataValidator(props, propName, componentName) {

  if (Object.prototype.toString.call(props[propName]) !== '[object Array]') {
    console.error(`Warning: Invalid prop ${propName} type, it must be an array. Check data property passed to Table`);
    return new Error(`Invalid prop ${propName} type, it must be an array`);
  }

  let columns = props['columns'];
  let acceptedTags = ['selected'];
  props[propName].forEach(dataRow => {
    for (let col in dataRow) {

      let found = false;
      acceptedTags.forEach(tag => {
        found = found || (col === tag)
      });
      for (let i = 0; i < columns.length && !found; i++) {
        found = columns[i].id === col;
      }

      if (!found) {
        console.error(`Warning: Invalid column ${col} in data. Check data property passed to Table`);
        return new Error(`Invalid column ${col} in data`);
      }
    }
  });

}
