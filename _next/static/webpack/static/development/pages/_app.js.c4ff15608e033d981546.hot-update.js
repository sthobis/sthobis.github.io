webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "F:\\Project\\sthobis-github-io\\components\\Layout.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var getShapes = function getShapes(pathname) {
  switch (pathname) {
    case "/":
      return ["M 312.5,232.5 c 247,-110 597,-72 744,0 s 201,158 7,295 s -603,-113 -804,0 S 65.5,342.5 312.5,232.5 z", "M 312.5,232.5 c 273.5,-60.5 602.5,20.5 744,0 s 166.5,94.5 7,295 s -609.5,-29.5 -804,0 S 39,293 312.5,232.5 z"];

    case "/projects":
      return ["M 312.5,232.5 c -128,-170 411,-315 744,0 s -338,54 7,295 s -696,173 -804,0 S 440.5,402.5 312.5,232.5 z", "M 312.5,232.5 c -166.5,-232.5 581.5,-252.5 744,0 s -199.5,81.5 7,295 s -808.5,170.5 -804,0 S 479,465 312.5,232.5 z"];

    default:
      return ["M 312.5,232.5 c 247,-110 597,-72 744,0 s 201,158 7,295 s -603,-113 -804,0 S 65.5,342.5 312.5,232.5 z", "M 312.5,232.5 c 273.5,-60.5 602.5,20.5 744,0 s 166.5,94.5 7,295 s -609.5,-29.5 -804,0 S 39,293 312.5,232.5 z"];
  }
};

var getBackgroundColor = function getBackgroundColor(pathname) {
  switch (pathname) {
    case "/":
      return "#363dc2";

    case "/projects":
      return "rebeccapurple";

    case "/about":
      return "#8a2856";

    default:
      return "#363dc2";
  }
};

var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "morphBackground", function (pathname) {
      animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: _this.background,
        d: getShapes(pathname)[0],
        duration: 1000,
        easing: "easeOutQuad"
      }).finished.then(function () {
        _this.animateBackground(pathname);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateBackground", function (pathname) {
      animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: _this.background,
        d: getShapes(pathname),
        easing: "linear",
        duration: 5000,
        direction: "alternate",
        loop: true
      });
    });

    return _this;
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animateBackground(this.props.pathname);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.pathname !== nextProps.pathname) {
        this.timeout && clearTimeout(this.timeout);
        animejs__WEBPACK_IMPORTED_MODULE_1___default.a.remove(this.background);
        this.morphBackground(nextProps.pathname);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          pathname = _this$props.pathname,
          children = _this$props.children;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]) + " " + "layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, pathname === "/projects" ? "Projects - Stefanus Thobi Sinaga" : "Stefanus Thobi Sinaga")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]) + " " + "background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
        width: "1366",
        height: "768",
        viewBox: "0 0 1366 768",
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
        ref: function ref(el) {
          _this2.background = el;
        },
        d: getShapes()[0],
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]) + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        pathname: pathname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("main", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, children), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("footer", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: "https://github.com/sthobis/sthobis.github.io/tree/dev",
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "< view source >"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]) + " " + "socmed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: "https://twitter.com/iBoht",
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "twitter"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: "https://instagram.com/thobiisnaga",
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "instagram")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3049801903",
        css: ".layout.__jsx-style-dynamic-selector{position:relative;}.background.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;background-color:".concat(getBackgroundColor(pathname), ";-webkit-transition:1s;transition:1s;}svg.__jsx-style-dynamic-selector{width:100%;height:100%;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);-webkit-transition:1s;transition:1s;}svg.__jsx-style-dynamic-selector path.__jsx-style-dynamic-selector{fill:rgba(0,0,0,0.15);}.content.__jsx-style-dynamic-selector{position:relative;z-index:2;padding:50px;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}main.__jsx-style-dynamic-selector{-webkit-flex:auto;-ms-flex:auto;flex:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 75px;}footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}footer.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#fff;-webkit-text-decoration:none;text-decoration:none;margin:0 0 0 10px;}.socmed.__jsx-style-dynamic-selector{position:absolute;z-index:3;right:50px;bottom:50px;text-align:right;-webkit-writing-mode:vertical-lr;-ms-writing-mode:tb;writing-mode:vertical-lr;}.socmed.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#fff;-webkit-text-decoration:none;text-decoration:none;margin:10px 0;}@media (orientation:portrait){svg.__jsx-style-dynamic-selector{-webkit-transform:scale(2.6) rotate(114deg);-ms-transform:scale(2.6) rotate(114deg);transform:scale(2.6) rotate(114deg);}}@media (max-width:767px){.content.__jsx-style-dynamic-selector{padding:30px;}.socmed.__jsx-style-dynamic-selector{right:30px;bottom:30px;}}@media (max-width:767px) and (orientation:landscape){main.__jsx-style-dynamic-selector{margin:0 55px;}}@media (max-width:767px) and (orientation:portrait){.content.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:calc(100vh - 60px);}main.__jsx-style-dynamic-selector{margin:0 10px;}footer.__jsx-style-dynamic-selector{display:none;}.socmed.__jsx-style-dynamic-selector{position:relative;right:auto;bottom:auto;writing-mode:lr;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 0 30px 0;}.socmed.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:block;height:30px;margin:0;}.socmed.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector+a.__jsx-style-dynamic-selector{margin-left:20px;}}@media (max-width:767px) and (orientation:landscape){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHb0IsQUFHK0IsQUFJSCxBQVdKLEFBUWMsQUFJUCxBQVNSLEFBTUcsQUFLRixBQU1PLEFBU1AsQUFPMkIsQUFNdkIsQUFJRixBQU9HLEFBTUssQUFLTCxBQUlELEFBSUssQUFXSixBQU1HLFdBMUdQLEFBZ0NTLEFBZUEsQUFpQlAsRUFKZCxBQTBCQSxDQWZBLEFBV0EsQUFtQmMsQ0FoSFIsRUFzSE4sQ0ExSEYsQUEyQlksQUEwQkEsQUFvREcsR0FwR04sQ0FrQlQsQ0FQMkIsQUFnRXpCLEdBcUNXLEVBL0dBLEFBc0JFLEFBMEJGLENBb0RHLE1BWWQsSUEvR1ksQUFnREEsRUExQkssQUE4RUMsQ0F2RUwsU0E1QkgsQUFnRE8sTUFvREcsQ0E5RVAsR0FyQmlDLEFBdUM1QixBQWVKLE9BTlcsTUFmSixDQXNCdkIsQUE2Q2lCLElBNURqQixjQTJDa0MsY0FsRmxCLEdBT08sTUFvQlAsSUFnQ2QsR0F3QkEsT0F2REYsRUFQd0IsV0FwQnhCLEdBK0NBLEdBb0QyQiwwQkFuRTNCLFVBekJnQix5QkFjaEIsV0FiQSwyQkE0RnNCLGtCQUNwQiIsImZpbGUiOiJGOlxcUHJvamVjdFxcc3Rob2Jpcy1naXRodWItaW9cXGNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmltZSBmcm9tIFwiYW5pbWVqc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuXHJcbmNvbnN0IGdldFNoYXBlcyA9IHBhdGhuYW1lID0+IHtcclxuICBzd2l0Y2ggKHBhdGhuYW1lKSB7XHJcbiAgICBjYXNlIFwiL1wiOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIFwiTSAzMTIuNSwyMzIuNSBjIDI0NywtMTEwIDU5NywtNzIgNzQ0LDAgcyAyMDEsMTU4IDcsMjk1IHMgLTYwMywtMTEzIC04MDQsMCBTIDY1LjUsMzQyLjUgMzEyLjUsMjMyLjUgelwiLFxyXG4gICAgICAgIFwiTSAzMTIuNSwyMzIuNSBjIDI3My41LC02MC41IDYwMi41LDIwLjUgNzQ0LDAgcyAxNjYuNSw5NC41IDcsMjk1IHMgLTYwOS41LC0yOS41IC04MDQsMCBTIDM5LDI5MyAzMTIuNSwyMzIuNSB6XCJcclxuICAgICAgXTtcclxuICAgIGNhc2UgXCIvcHJvamVjdHNcIjpcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBcIk0gMzEyLjUsMjMyLjUgYyAtMTI4LC0xNzAgNDExLC0zMTUgNzQ0LDAgcyAtMzM4LDU0IDcsMjk1IHMgLTY5NiwxNzMgLTgwNCwwIFMgNDQwLjUsNDAyLjUgMzEyLjUsMjMyLjUgelwiLFxyXG4gICAgICAgIFwiTSAzMTIuNSwyMzIuNSBjIC0xNjYuNSwtMjMyLjUgNTgxLjUsLTI1Mi41IDc0NCwwIHMgLTE5OS41LDgxLjUgNywyOTUgcyAtODA4LjUsMTcwLjUgLTgwNCwwIFMgNDc5LDQ2NSAzMTIuNSwyMzIuNSB6XCJcclxuICAgICAgXTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgMjQ3LC0xMTAgNTk3LC03MiA3NDQsMCBzIDIwMSwxNTggNywyOTUgcyAtNjAzLC0xMTMgLTgwNCwwIFMgNjUuNSwzNDIuNSAzMTIuNSwyMzIuNSB6XCIsXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgMjczLjUsLTYwLjUgNjAyLjUsMjAuNSA3NDQsMCBzIDE2Ni41LDk0LjUgNywyOTUgcyAtNjA5LjUsLTI5LjUgLTgwNCwwIFMgMzksMjkzIDMxMi41LDIzMi41IHpcIlxyXG4gICAgICBdO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldEJhY2tncm91bmRDb2xvciA9IHBhdGhuYW1lID0+IHtcclxuICBzd2l0Y2ggKHBhdGhuYW1lKSB7XHJcbiAgICBjYXNlIFwiL1wiOlxyXG4gICAgICByZXR1cm4gXCIjMzYzZGMyXCI7XHJcbiAgICBjYXNlIFwiL3Byb2plY3RzXCI6XHJcbiAgICAgIHJldHVybiBcInJlYmVjY2FwdXJwbGVcIjtcclxuICAgIGNhc2UgXCIvYWJvdXRcIjpcclxuICAgICAgcmV0dXJuIFwiIzhhMjg1NlwiO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiIzM2M2RjMlwiO1xyXG4gIH1cclxufTtcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmFuaW1hdGVCYWNrZ3JvdW5kKHRoaXMucHJvcHMucGF0aG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLnBhdGhuYW1lICE9PSBuZXh0UHJvcHMucGF0aG5hbWUpIHtcclxuICAgICAgdGhpcy50aW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICBhbmltZS5yZW1vdmUodGhpcy5iYWNrZ3JvdW5kKTtcclxuICAgICAgdGhpcy5tb3JwaEJhY2tncm91bmQobmV4dFByb3BzLnBhdGhuYW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vcnBoQmFja2dyb3VuZCA9IHBhdGhuYW1lID0+IHtcclxuICAgIGFuaW1lKHtcclxuICAgICAgdGFyZ2V0czogdGhpcy5iYWNrZ3JvdW5kLFxyXG4gICAgICBkOiBnZXRTaGFwZXMocGF0aG5hbWUpWzBdLFxyXG4gICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgZWFzaW5nOiBcImVhc2VPdXRRdWFkXCJcclxuICAgIH0pLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGVCYWNrZ3JvdW5kKHBhdGhuYW1lKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGFuaW1hdGVCYWNrZ3JvdW5kID0gcGF0aG5hbWUgPT4ge1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiB0aGlzLmJhY2tncm91bmQsXHJcbiAgICAgIGQ6IGdldFNoYXBlcyhwYXRobmFtZSksXHJcbiAgICAgIGVhc2luZzogXCJsaW5lYXJcIixcclxuICAgICAgZHVyYXRpb246IDUwMDAsXHJcbiAgICAgIGRpcmVjdGlvbjogXCJhbHRlcm5hdGVcIixcclxuICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBwYXRobmFtZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICB7cGF0aG5hbWUgPT09IFwiL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICA/IFwiUHJvamVjdHMgLSBTdGVmYW51cyBUaG9iaSBTaW5hZ2FcIlxyXG4gICAgICAgICAgICAgIDogXCJTdGVmYW51cyBUaG9iaSBTaW5hZ2FcIn1cclxuICAgICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgPHN2ZyB3aWR0aD1cIjEzNjZcIiBoZWlnaHQ9XCI3NjhcIiB2aWV3Qm94PVwiMCAwIDEzNjYgNzY4XCI+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBlbDtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGQ9e2dldFNoYXBlcygpWzBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8SGVhZGVyIHBhdGhuYW1lPXtwYXRobmFtZX0gLz5cclxuICAgICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N0aG9iaXMvc3Rob2Jpcy5naXRodWIuaW8vdHJlZS9kZXZcIj5cclxuICAgICAgICAgICAgICB7YDwgdmlldyBzb3VyY2UgPmB9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jbWVkXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pQm9odFwiPnR3aXR0ZXI8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL3Rob2JpaXNuYWdhXCI+aW5zdGFncmFtPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5sYXlvdXQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtnZXRCYWNrZ3JvdW5kQ29sb3IocGF0aG5hbWUpfTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzdmcgcGF0aCB7XHJcbiAgICAgICAgICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNzVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZm9vdGVyIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNvY21lZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNvY21lZCBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNikgcm90YXRlKDExNGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NtZWQge1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCA1NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NtZWQge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICAgICAgICBib3R0b206IGF1dG87XHJcbiAgICAgICAgICAgICAgd3JpdGluZy1tb2RlOiBscjtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NtZWQgYSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNvY21lZCBhICsgYSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9wYSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM2M2RjMjtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgdGV4dGFyZWEsXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb3BhIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl19 */\n/*@ sourceURL=F:\\Project\\sthobis-github-io\\components\\Layout.js */"),
        dynamic: [getBackgroundColor(pathname)],
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3719379429",
        css: "*{box-sizing:border-box;}html{font-size:10px;}body{color:#fff;margin:0;font-family:\"Ropa Sans\",sans-serif;font-size:2rem;line-height:1.5;background:#363dc2;overflow-x:hidden;}input,textarea,button{font-family:\"Ropa Sans\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThPMkIsQUFHbUMsQUFJUCxBQUlKLEFBWXlCLFdBWDNCLElBSlgsS0FLc0MsRUFUdEMsYUFvQkEsb0JBVmlCLGVBQ0MsZ0JBQ0csbUJBQ0Qsa0JBQ3BCIiwiZmlsZSI6IkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5cclxuY29uc3QgZ2V0U2hhcGVzID0gcGF0aG5hbWUgPT4ge1xyXG4gIHN3aXRjaCAocGF0aG5hbWUpIHtcclxuICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgMjQ3LC0xMTAgNTk3LC03MiA3NDQsMCBzIDIwMSwxNTggNywyOTUgcyAtNjAzLC0xMTMgLTgwNCwwIFMgNjUuNSwzNDIuNSAzMTIuNSwyMzIuNSB6XCIsXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgMjczLjUsLTYwLjUgNjAyLjUsMjAuNSA3NDQsMCBzIDE2Ni41LDk0LjUgNywyOTUgcyAtNjA5LjUsLTI5LjUgLTgwNCwwIFMgMzksMjkzIDMxMi41LDIzMi41IHpcIlxyXG4gICAgICBdO1xyXG4gICAgY2FzZSBcIi9wcm9qZWN0c1wiOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIFwiTSAzMTIuNSwyMzIuNSBjIC0xMjgsLTE3MCA0MTEsLTMxNSA3NDQsMCBzIC0zMzgsNTQgNywyOTUgcyAtNjk2LDE3MyAtODA0LDAgUyA0NDAuNSw0MDIuNSAzMTIuNSwyMzIuNSB6XCIsXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgLTE2Ni41LC0yMzIuNSA1ODEuNSwtMjUyLjUgNzQ0LDAgcyAtMTk5LjUsODEuNSA3LDI5NSBzIC04MDguNSwxNzAuNSAtODA0LDAgUyA0NzksNDY1IDMxMi41LDIzMi41IHpcIlxyXG4gICAgICBdO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBcIk0gMzEyLjUsMjMyLjUgYyAyNDcsLTExMCA1OTcsLTcyIDc0NCwwIHMgMjAxLDE1OCA3LDI5NSBzIC02MDMsLTExMyAtODA0LDAgUyA2NS41LDM0Mi41IDMxMi41LDIzMi41IHpcIixcclxuICAgICAgICBcIk0gMzEyLjUsMjMyLjUgYyAyNzMuNSwtNjAuNSA2MDIuNSwyMC41IDc0NCwwIHMgMTY2LjUsOTQuNSA3LDI5NSBzIC02MDkuNSwtMjkuNSAtODA0LDAgUyAzOSwyOTMgMzEyLjUsMjMyLjUgelwiXHJcbiAgICAgIF07XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0QmFja2dyb3VuZENvbG9yID0gcGF0aG5hbWUgPT4ge1xyXG4gIHN3aXRjaCAocGF0aG5hbWUpIHtcclxuICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgIHJldHVybiBcIiMzNjNkYzJcIjtcclxuICAgIGNhc2UgXCIvcHJvamVjdHNcIjpcclxuICAgICAgcmV0dXJuIFwicmViZWNjYXB1cnBsZVwiO1xyXG4gICAgY2FzZSBcIi9hYm91dFwiOlxyXG4gICAgICByZXR1cm4gXCIjOGEyODU2XCI7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCIjMzYzZGMyXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuYW5pbWF0ZUJhY2tncm91bmQodGhpcy5wcm9wcy5wYXRobmFtZSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgaWYgKHRoaXMucHJvcHMucGF0aG5hbWUgIT09IG5leHRQcm9wcy5wYXRobmFtZSkge1xyXG4gICAgICB0aGlzLnRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAgIGFuaW1lLnJlbW92ZSh0aGlzLmJhY2tncm91bmQpO1xyXG4gICAgICB0aGlzLm1vcnBoQmFja2dyb3VuZChuZXh0UHJvcHMucGF0aG5hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW9ycGhCYWNrZ3JvdW5kID0gcGF0aG5hbWUgPT4ge1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiB0aGlzLmJhY2tncm91bmQsXHJcbiAgICAgIGQ6IGdldFNoYXBlcyhwYXRobmFtZSlbMF0sXHJcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICBlYXNpbmc6IFwiZWFzZU91dFF1YWRcIlxyXG4gICAgfSkuZmluaXNoZWQudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMuYW5pbWF0ZUJhY2tncm91bmQocGF0aG5hbWUpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYW5pbWF0ZUJhY2tncm91bmQgPSBwYXRobmFtZSA9PiB7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IHRoaXMuYmFja2dyb3VuZCxcclxuICAgICAgZDogZ2V0U2hhcGVzKHBhdGhuYW1lKSxcclxuICAgICAgZWFzaW5nOiBcImxpbmVhclwiLFxyXG4gICAgICBkdXJhdGlvbjogNTAwMCxcclxuICAgICAgZGlyZWN0aW9uOiBcImFsdGVybmF0ZVwiLFxyXG4gICAgICBsb29wOiB0cnVlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHBhdGhuYW1lLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICAgIHtwYXRobmFtZSA9PT0gXCIvcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgID8gXCJQcm9qZWN0cyAtIFN0ZWZhbnVzIFRob2JpIFNpbmFnYVwiXHJcbiAgICAgICAgICAgICAgOiBcIlN0ZWZhbnVzIFRob2JpIFNpbmFnYVwifVxyXG4gICAgICAgICAgPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTM2NlwiIGhlaWdodD1cIjc2OFwiIHZpZXdCb3g9XCIwIDAgMTM2NiA3NjhcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IGVsO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZD17Z2V0U2hhcGVzKClbMF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxIZWFkZXIgcGF0aG5hbWU9e3BhdGhuYW1lfSAvPlxyXG4gICAgICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc3Rob2Jpcy9zdGhvYmlzLmdpdGh1Yi5pby90cmVlL2RldlwiPlxyXG4gICAgICAgICAgICAgIHtgPCB2aWV3IHNvdXJjZSA+YH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NtZWRcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2lCb2h0XCI+dHdpdHRlcjwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vdGhvYmlpc25hZ2FcIj5pbnN0YWdyYW08L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmxheW91dCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2dldEJhY2tncm91bmRDb2xvcihwYXRobmFtZSl9O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHN2ZyBwYXRoIHtcclxuICAgICAgICAgICAgZmlsbDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICAgIGZsZXg6IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA3NXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmb290ZXIgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc29jbWVkIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICByaWdodDogNTBweDtcclxuICAgICAgICAgICAgYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc29jbWVkIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMi42KSByb3RhdGUoMTE0ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNvY21lZCB7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDU1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNvY21lZCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogYXV0bztcclxuICAgICAgICAgICAgICB3cml0aW5nLW1vZGU6IGxyO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDMwcHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNvY21lZCBhIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc29jbWVkIGEgKyBhIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb3BhIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzYzZGMyO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICB0ZXh0YXJlYSxcclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvcGEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXX0= */\n/*@ sourceURL=F:\\Project\\sthobis-github-io\\components\\Layout.js */",
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.c4ff15608e033d981546.hot-update.js.map