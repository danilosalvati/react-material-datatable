/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _demo = __webpack_require__(3);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(_demo2.default), document.getElementById('demo'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _faker = __webpack_require__(4);
	
	var _index = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Demo = function (_React$Component) {
	  _inherits(Demo, _React$Component);
	
	  function Demo(props) {
	    _classCallCheck(this, Demo);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props));
	
	    _this.state = {};
	    return _this;
	  }
	
	  _createClass(Demo, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'p',
	          null,
	          'This is a first example for the table component'
	        ),
	        _react2.default.createElement(_index.Table, { columns: _faker.columns, data: _faker.data, pippo: 5 })
	      );
	    }
	  }]);
	
	  return Demo;
	}(_react2.default.Component);
	
	exports.default = Demo;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var columns = exports.columns = [{
	  id: "#col1",
	  name: "col1",
	  position: 0,
	  sortable: true
	}, {
	  id: "#col2",
	  name: "col2",
	  position: 1,
	  sortable: true,
	  searchable: true
	}, {
	  id: "#col3",
	  name: "col3",
	  position: 2,
	  sortable: true,
	  searchable: true
	}];
	
	var data = exports.data = [{
	  "#col1": "1",
	  "#col2": "2",
	  "#col3": "3"
	}, {
	  "#col1": "4",
	  "#col2": "5",
	  "#col32": "6"
	}, {
	  "#col1": "7",
	  "#col2": "8",
	  "#col3": "9"
	}, {
	  "#col1": "10",
	  "#col2": "11",
	  "#col3": "12"
	}];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Table = undefined;
	
	var _table = __webpack_require__(6);
	
	var _table2 = _interopRequireDefault(_table);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Table = _table2.default;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _columnComponent = __webpack_require__(7);
	
	var _columnComponent2 = _interopRequireDefault(_columnComponent);
	
	var _rowComponent = __webpack_require__(8);
	
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

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (_ref) {
	  var column = _ref.column;
	  return React.createElement(
	    "th",
	    null,
	    column.name
	  );
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);
//# sourceMappingURL=demo.build.js.map