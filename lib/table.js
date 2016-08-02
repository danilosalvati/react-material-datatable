'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _columnComponent = require('./default-components/column-component');

var _columnComponent2 = _interopRequireDefault(_columnComponent);

var _rowComponent = require('./default-components/row-component');

var _rowComponent2 = _interopRequireDefault(_rowComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Table).call(this, props));
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'table',
        null,
        _react2.default.createElement(
          'tr',
          null,
          this.props.columns.map(function (column) {
            return _react2.default.createElement(_columnComponent2.default, { column: column });
          })
        ),
        this.props.data.map(function (rowData) {
          return _react2.default.createElement(_rowComponent2.default, { columns: _this2.props.columns, row: rowData });
        })
      );
    }
  }]);

  return Table;
}(_react2.default.Component);

exports.default = Table;


Table.propTypes = {
  pippo: _react2.default.PropTypes.string.isRequired,
  columns: _react2.default.PropTypes.object.isRequired,
  // data: React.PropTypes.array.isRequired,
  data: function (props, propName, componentName) {

    console.log("ENTER HERE");

    if (!/matchme/.test(props[propName])) {
      return new Error('Invalid prop ' + propName + ' supplied to\n        ' + componentName + '. Validation failed');
    }

    if (Object.prototype.toString.call(props[propName]) !== '[object Array]') {
      return new Error('Invalid prop ' + propName + ' type, it must be an array');
    }

    var columns = props['columns'];
    props[propName].forEach(function (dataRow) {
      for (var col in dataRow) {

        var found = false;
        console.log("CIAO");
        for (var i = 0; i < columns.length && !found; i++) {
          found = columns.hasOwnProperty(col);
        }

        if (!found) {
          console.log("CIAO");
          return new Error('Invalid column ' + col + ' in data');
        }
      }
    });
  }.isRequired

};

//Table.defaultProps = {};