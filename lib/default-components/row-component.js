"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var columns = _ref.columns;
  var row = _ref.row;

  var cells = [];
  columns.forEach(function (column) {
    cells.push(React.createElement(
      "td",
      null,
      row[column.id]
    ));
  });
  return React.createElement(
    "tr",
    null,
    cells
  );
};