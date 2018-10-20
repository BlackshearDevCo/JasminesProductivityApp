webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Calendar.js":
/*!********************************!*\
  !*** ./components/Calendar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _css_calendar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/calendar.css */ "./css/calendar.css");
/* harmony import */ var _css_calendar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_calendar_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_changeCalendarNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/changeCalendarNames */ "./utils/changeCalendarNames.js");
var _jsxFileName = "/Users/aaronblackshear/PersonalProjects/jasmines-productiviy-app/components/Calendar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var CalendarComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarComponent, _Component);

  function CalendarComponent() {
    _classCallCheck(this, CalendarComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(CalendarComponent).apply(this, arguments));
  }

  _createClass(CalendarComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_utils_changeCalendarNames__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Calendar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }));
    }
  }]);

  return CalendarComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CalendarComponent);

/***/ }),

/***/ "./utils/changeCalendarNames.js":
/*!**************************************!*\
  !*** ./utils/changeCalendarNames.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var changeCalendarNames = function changeCalendarNames() {
  document.getElementsByClassName('ant-fullcalendar-column-header-inner')[0].innerHTML = 'Sunday';
  document.getElementsByClassName('ant-fullcalendar-column-header-inner')[1].innerHTML = 'Monday';
  document.getElementsByClassName('ant-fullcalendar-column-header-inner')[2].innerHTML = 'Tuesday';
  document.getElementsByClassName('ant-fullcalendar-column-header-inner')[3].innerHTML = 'Wednesday';
  document.getElementsByClassName('ant-fullcalendar-column-header-inner')[4].innerHTML = 'Thursday';
  document.getElementsByClassName('ant-fullcalendar-column-header-inner')[5].innerHTML = 'Friday';
  document.getElementsByClassName('ant-fullcalendar-column-header-inner')[6].innerHTML = 'Saturday';
};

/* harmony default export */ __webpack_exports__["default"] = (changeCalendarNames);

/***/ })

})
//# sourceMappingURL=index.js.ddc36bcf9cd3bd41877a.hot-update.js.map