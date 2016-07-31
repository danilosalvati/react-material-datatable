/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(2);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _demo = __webpack_require__(3);\n\nvar _demo2 = _interopRequireDefault(_demo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_reactDom2.default.render(_react2.default.createElement(_demo2.default), document.getElementById('demo'));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./demo/renderer.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./demo/renderer.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = React;\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"React\"\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22React%22?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = ReactDOM;\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"ReactDOM\"\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Demo = function (_React$Component) {\n  _inherits(Demo, _React$Component);\n\n  function Demo(props) {\n    _classCallCheck(this, Demo);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props));\n\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(Demo, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        \"Hello World!\"\n      );\n    }\n  }]);\n\n  return Demo;\n}(_react2.default.Component);\n\nexports.default = Demo;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./demo/demo.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./demo/demo.js?");

/***/ }
/******/ ]);