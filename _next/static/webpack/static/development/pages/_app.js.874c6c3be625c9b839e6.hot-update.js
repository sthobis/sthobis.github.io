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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      transitionInlineStyle: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateBackground", function (pathname) {
      _this.animation = animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: "#morphing path",
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
        this.setState({
          transitionInlineStyle: {
            transition: "1s"
          }
        }, function () {
          return animejs__WEBPACK_IMPORTED_MODULE_1___default.a.remove("#morphing path");
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.pathname !== this.props.pathname) {
        this.timeout = setTimeout(function () {
          _this2.setState({
            transitionInlineStyle: {}
          }, function () {
            return _this2.animateBackground(_this2.props.pathname);
          });
        }, 1000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pathname = _this$props.pathname,
          children = _this$props.children;
      var transitionInlineStyle = this.state.transitionInlineStyle;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]) + " " + "layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, pathname === "/projects" ? "Projects - Stefanus Thobi Sinaga" : "Stefanus Thobi Sinaga")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]) + " " + "background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
        id: "morphing",
        width: "1366",
        height: "768",
        viewBox: "0 0 1366 768",
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
        d: getShapes(pathname)[0],
        style: transitionInlineStyle,
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]) + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        pathname: pathname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("main", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, children), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("footer", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: "https://github.com/sthobis/sthobis.github.io/tree/dev",
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "< view source >"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]) + " " + "socmed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: "https://twitter.com/iBoht",
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "twitter"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: "https://instagram.com/thobiisnaga",
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3049801903", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "instagram")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3049801903",
        css: ".layout.__jsx-style-dynamic-selector{position:relative;}.background.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;background-color:".concat(getBackgroundColor(pathname), ";-webkit-transition:1s;transition:1s;}svg.__jsx-style-dynamic-selector{width:100%;height:100%;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);-webkit-transition:1s;transition:1s;}svg.__jsx-style-dynamic-selector path.__jsx-style-dynamic-selector{fill:rgba(0,0,0,0.15);}.content.__jsx-style-dynamic-selector{position:relative;z-index:2;padding:50px;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}main.__jsx-style-dynamic-selector{-webkit-flex:auto;-ms-flex:auto;flex:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 75px;}footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}footer.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#fff;-webkit-text-decoration:none;text-decoration:none;margin:0 0 0 10px;}.socmed.__jsx-style-dynamic-selector{position:absolute;z-index:3;right:50px;bottom:50px;text-align:right;-webkit-writing-mode:vertical-lr;-ms-writing-mode:tb;writing-mode:vertical-lr;}.socmed.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#fff;-webkit-text-decoration:none;text-decoration:none;margin:10px 0;}@media (orientation:portrait){svg.__jsx-style-dynamic-selector{-webkit-transform:scale(2.6) rotate(114deg);-ms-transform:scale(2.6) rotate(114deg);transform:scale(2.6) rotate(114deg);}}@media (max-width:767px){.content.__jsx-style-dynamic-selector{padding:30px;}.socmed.__jsx-style-dynamic-selector{right:30px;bottom:30px;}}@media (max-width:767px) and (orientation:landscape){main.__jsx-style-dynamic-selector{margin:0 55px;}}@media (max-width:767px) and (orientation:portrait){.content.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:calc(100vh - 60px);}main.__jsx-style-dynamic-selector{margin:0 10px;}footer.__jsx-style-dynamic-selector{display:none;}.socmed.__jsx-style-dynamic-selector{position:relative;right:auto;bottom:auto;writing-mode:lr;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 0 30px 0;}.socmed.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:block;height:30px;margin:0;}.socmed.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector+a.__jsx-style-dynamic-selector{margin-left:20px;}}@media (max-width:767px) and (orientation:landscape){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlIb0IsQUFHK0IsQUFJSCxBQVdKLEFBUWMsQUFJUCxBQVNSLEFBTUcsQUFLRixBQU1PLEFBU1AsQUFPMkIsQUFNdkIsQUFJRixBQU9HLEFBTUssQUFLTCxBQUlELEFBSUssQUFXSixBQU1HLFdBMUdQLEFBZ0NTLEFBZUEsQUFpQlAsRUFKZCxBQTBCQSxDQWZBLEFBV0EsQUFtQmMsQ0FoSFIsRUFzSE4sQ0ExSEYsQUEyQlksQUEwQkEsQUFvREcsR0FwR04sQ0FrQlQsQ0FQMkIsQUFnRXpCLEdBcUNXLEVBL0dBLEFBc0JFLEFBMEJGLENBb0RHLE1BWWQsSUEvR1ksQUFnREEsRUExQkssQUE4RUMsQ0F2RUwsU0E1QkgsQUFnRE8sTUFvREcsQ0E5RVAsR0FyQmlDLEFBdUM1QixBQWVKLE9BTlcsTUFmSixDQXNCdkIsQUE2Q2lCLElBNURqQixjQTJDa0MsY0FsRmxCLEdBT08sTUFvQlAsSUFnQ2QsR0F3QkEsT0F2REYsRUFQd0IsV0FwQnhCLEdBK0NBLEdBb0QyQiwwQkFuRTNCLFVBekJnQix5QkFjaEIsV0FiQSwyQkE0RnNCLGtCQUNwQiIsImZpbGUiOiJGOlxcUHJvamVjdFxcc3Rob2Jpcy1naXRodWItaW9cXGNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmltZSBmcm9tIFwiYW5pbWVqc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuXHJcbmNvbnN0IGdldFNoYXBlcyA9IHBhdGhuYW1lID0+IHtcclxuICBzd2l0Y2ggKHBhdGhuYW1lKSB7XHJcbiAgICBjYXNlIFwiL1wiOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIFwiTSAzMTIuNSwyMzIuNSBjIDI0NywtMTEwIDU5NywtNzIgNzQ0LDAgcyAyMDEsMTU4IDcsMjk1IHMgLTYwMywtMTEzIC04MDQsMCBTIDY1LjUsMzQyLjUgMzEyLjUsMjMyLjUgelwiLFxyXG4gICAgICAgIFwiTSAzMTIuNSwyMzIuNSBjIDI3My41LC02MC41IDYwMi41LDIwLjUgNzQ0LDAgcyAxNjYuNSw5NC41IDcsMjk1IHMgLTYwOS41LC0yOS41IC04MDQsMCBTIDM5LDI5MyAzMTIuNSwyMzIuNSB6XCJcclxuICAgICAgXTtcclxuICAgIGNhc2UgXCIvcHJvamVjdHNcIjpcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBcIk0gMzEyLjUsMjMyLjUgYyAtMTI4LC0xNzAgNDExLC0zMTUgNzQ0LDAgcyAtMzM4LDU0IDcsMjk1IHMgLTY5NiwxNzMgLTgwNCwwIFMgNDQwLjUsNDAyLjUgMzEyLjUsMjMyLjUgelwiLFxyXG4gICAgICAgIFwiTSAzMTIuNSwyMzIuNSBjIC0xNjYuNSwtMjMyLjUgNTgxLjUsLTI1Mi41IDc0NCwwIHMgLTE5OS41LDgxLjUgNywyOTUgcyAtODA4LjUsMTcwLjUgLTgwNCwwIFMgNDc5LDQ2NSAzMTIuNSwyMzIuNSB6XCJcclxuICAgICAgXTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgMjQ3LC0xMTAgNTk3LC03MiA3NDQsMCBzIDIwMSwxNTggNywyOTUgcyAtNjAzLC0xMTMgLTgwNCwwIFMgNjUuNSwzNDIuNSAzMTIuNSwyMzIuNSB6XCIsXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgMjczLjUsLTYwLjUgNjAyLjUsMjAuNSA3NDQsMCBzIDE2Ni41LDk0LjUgNywyOTUgcyAtNjA5LjUsLTI5LjUgLTgwNCwwIFMgMzksMjkzIDMxMi41LDIzMi41IHpcIlxyXG4gICAgICBdO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldEJhY2tncm91bmRDb2xvciA9IHBhdGhuYW1lID0+IHtcclxuICBzd2l0Y2ggKHBhdGhuYW1lKSB7XHJcbiAgICBjYXNlIFwiL1wiOlxyXG4gICAgICByZXR1cm4gXCIjMzYzZGMyXCI7XHJcbiAgICBjYXNlIFwiL3Byb2plY3RzXCI6XHJcbiAgICAgIHJldHVybiBcInJlYmVjY2FwdXJwbGVcIjtcclxuICAgIGNhc2UgXCIvYWJvdXRcIjpcclxuICAgICAgcmV0dXJuIFwiIzhhMjg1NlwiO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiIzM2M2RjMlwiO1xyXG4gIH1cclxufTtcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICB0cmFuc2l0aW9uSW5saW5lU3R5bGU6IHt9XHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmFuaW1hdGVCYWNrZ3JvdW5kKHRoaXMucHJvcHMucGF0aG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLnBhdGhuYW1lICE9PSBuZXh0UHJvcHMucGF0aG5hbWUpIHtcclxuICAgICAgdGhpcy50aW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRyYW5zaXRpb25JbmxpbmVTdHlsZTogeyB0cmFuc2l0aW9uOiBcIjFzXCIgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4gYW5pbWUucmVtb3ZlKFwiI21vcnBoaW5nIHBhdGhcIilcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIGlmIChwcmV2UHJvcHMucGF0aG5hbWUgIT09IHRoaXMucHJvcHMucGF0aG5hbWUpIHtcclxuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbklubGluZVN0eWxlOiB7fVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICgpID0+IHRoaXMuYW5pbWF0ZUJhY2tncm91bmQodGhpcy5wcm9wcy5wYXRobmFtZSlcclxuICAgICAgICApO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFuaW1hdGVCYWNrZ3JvdW5kID0gcGF0aG5hbWUgPT4ge1xyXG4gICAgdGhpcy5hbmltYXRpb24gPSBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IFwiI21vcnBoaW5nIHBhdGhcIixcclxuICAgICAgZDogZ2V0U2hhcGVzKHBhdGhuYW1lKSxcclxuICAgICAgZWFzaW5nOiBcImxpbmVhclwiLFxyXG4gICAgICBkdXJhdGlvbjogNTAwMCxcclxuICAgICAgZGlyZWN0aW9uOiBcImFsdGVybmF0ZVwiLFxyXG4gICAgICBsb29wOiB0cnVlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHBhdGhuYW1lLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgdHJhbnNpdGlvbklubGluZVN0eWxlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgICAge3BhdGhuYW1lID09PSBcIi9wcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgPyBcIlByb2plY3RzIC0gU3RlZmFudXMgVGhvYmkgU2luYWdhXCJcclxuICAgICAgICAgICAgICA6IFwiU3RlZmFudXMgVGhvYmkgU2luYWdhXCJ9XHJcbiAgICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cclxuICAgICAgICAgIDxzdmcgaWQ9XCJtb3JwaGluZ1wiIHdpZHRoPVwiMTM2NlwiIGhlaWdodD1cIjc2OFwiIHZpZXdCb3g9XCIwIDAgMTM2NiA3NjhcIj5cclxuICAgICAgICAgICAgPHBhdGggZD17Z2V0U2hhcGVzKHBhdGhuYW1lKVswXX0gc3R5bGU9e3RyYW5zaXRpb25JbmxpbmVTdHlsZX0gLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPEhlYWRlciBwYXRobmFtZT17cGF0aG5hbWV9IC8+XHJcbiAgICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zdGhvYmlzL3N0aG9iaXMuZ2l0aHViLmlvL3RyZWUvZGV2XCI+XHJcbiAgICAgICAgICAgICAge2A8IHZpZXcgc291cmNlID5gfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY21lZFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaUJvaHRcIj50d2l0dGVyPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbS90aG9iaWlzbmFnYVwiPmluc3RhZ3JhbTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAubGF5b3V0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Z2V0QmFja2dyb3VuZENvbG9yKHBhdGhuYW1lKX07XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3ZnIHBhdGgge1xyXG4gICAgICAgICAgICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBtYWluIHtcclxuICAgICAgICAgICAgZmxleDogYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDc1cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZvb3RlciBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zb2NtZWQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zb2NtZWQgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyLjYpIHJvdGF0ZSgxMTRkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc29jbWVkIHtcclxuICAgICAgICAgICAgICByaWdodDogMzBweDtcclxuICAgICAgICAgICAgICBib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICBtYWluIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgNTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtYWluIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc29jbWVkIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgYm90dG9tOiBhdXRvO1xyXG4gICAgICAgICAgICAgIHdyaXRpbmctbW9kZTogbHI7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMzBweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc29jbWVkIGEge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NtZWQgYSArIGEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICoge1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvcGEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNjNkYzI7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgIHRleHRhcmVhLFxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9wYSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdfQ== */\n/*@ sourceURL=F:\\Project\\sthobis-github-io\\components\\Layout.js */"),
        dynamic: [getBackgroundColor(pathname)],
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3719379429",
        css: "*{box-sizing:border-box;}html{font-size:10px;}body{color:#fff;margin:0;font-family:\"Ropa Sans\",sans-serif;font-size:2rem;line-height:1.5;background:#363dc2;overflow-x:hidden;}input,textarea,button{font-family:\"Ropa Sans\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9QMkIsQUFHbUMsQUFJUCxBQUlKLEFBWXlCLFdBWDNCLElBSlgsS0FLc0MsRUFUdEMsYUFvQkEsb0JBVmlCLGVBQ0MsZ0JBQ0csbUJBQ0Qsa0JBQ3BCIiwiZmlsZSI6IkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5cclxuY29uc3QgZ2V0U2hhcGVzID0gcGF0aG5hbWUgPT4ge1xyXG4gIHN3aXRjaCAocGF0aG5hbWUpIHtcclxuICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgMjQ3LC0xMTAgNTk3LC03MiA3NDQsMCBzIDIwMSwxNTggNywyOTUgcyAtNjAzLC0xMTMgLTgwNCwwIFMgNjUuNSwzNDIuNSAzMTIuNSwyMzIuNSB6XCIsXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgMjczLjUsLTYwLjUgNjAyLjUsMjAuNSA3NDQsMCBzIDE2Ni41LDk0LjUgNywyOTUgcyAtNjA5LjUsLTI5LjUgLTgwNCwwIFMgMzksMjkzIDMxMi41LDIzMi41IHpcIlxyXG4gICAgICBdO1xyXG4gICAgY2FzZSBcIi9wcm9qZWN0c1wiOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIFwiTSAzMTIuNSwyMzIuNSBjIC0xMjgsLTE3MCA0MTEsLTMxNSA3NDQsMCBzIC0zMzgsNTQgNywyOTUgcyAtNjk2LDE3MyAtODA0LDAgUyA0NDAuNSw0MDIuNSAzMTIuNSwyMzIuNSB6XCIsXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgLTE2Ni41LC0yMzIuNSA1ODEuNSwtMjUyLjUgNzQ0LDAgcyAtMTk5LjUsODEuNSA3LDI5NSBzIC04MDguNSwxNzAuNSAtODA0LDAgUyA0NzksNDY1IDMxMi41LDIzMi41IHpcIlxyXG4gICAgICBdO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBcIk0gMzEyLjUsMjMyLjUgYyAyNDcsLTExMCA1OTcsLTcyIDc0NCwwIHMgMjAxLDE1OCA3LDI5NSBzIC02MDMsLTExMyAtODA0LDAgUyA2NS41LDM0Mi41IDMxMi41LDIzMi41IHpcIixcclxuICAgICAgICBcIk0gMzEyLjUsMjMyLjUgYyAyNzMuNSwtNjAuNSA2MDIuNSwyMC41IDc0NCwwIHMgMTY2LjUsOTQuNSA3LDI5NSBzIC02MDkuNSwtMjkuNSAtODA0LDAgUyAzOSwyOTMgMzEyLjUsMjMyLjUgelwiXHJcbiAgICAgIF07XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0QmFja2dyb3VuZENvbG9yID0gcGF0aG5hbWUgPT4ge1xyXG4gIHN3aXRjaCAocGF0aG5hbWUpIHtcclxuICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgIHJldHVybiBcIiMzNjNkYzJcIjtcclxuICAgIGNhc2UgXCIvcHJvamVjdHNcIjpcclxuICAgICAgcmV0dXJuIFwicmViZWNjYXB1cnBsZVwiO1xyXG4gICAgY2FzZSBcIi9hYm91dFwiOlxyXG4gICAgICByZXR1cm4gXCIjOGEyODU2XCI7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCIjMzYzZGMyXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHRyYW5zaXRpb25JbmxpbmVTdHlsZToge31cclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuYW5pbWF0ZUJhY2tncm91bmQodGhpcy5wcm9wcy5wYXRobmFtZSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgaWYgKHRoaXMucHJvcHMucGF0aG5hbWUgIT09IG5leHRQcm9wcy5wYXRobmFtZSkge1xyXG4gICAgICB0aGlzLnRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbklubGluZVN0eWxlOiB7IHRyYW5zaXRpb246IFwiMXNcIiB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiBhbmltZS5yZW1vdmUoXCIjbW9ycGhpbmcgcGF0aFwiKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgaWYgKHByZXZQcm9wcy5wYXRobmFtZSAhPT0gdGhpcy5wcm9wcy5wYXRobmFtZSkge1xyXG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uSW5saW5lU3R5bGU6IHt9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgKCkgPT4gdGhpcy5hbmltYXRlQmFja2dyb3VuZCh0aGlzLnByb3BzLnBhdGhuYW1lKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZUJhY2tncm91bmQgPSBwYXRobmFtZSA9PiB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1lKHtcclxuICAgICAgdGFyZ2V0czogXCIjbW9ycGhpbmcgcGF0aFwiLFxyXG4gICAgICBkOiBnZXRTaGFwZXMocGF0aG5hbWUpLFxyXG4gICAgICBlYXNpbmc6IFwibGluZWFyXCIsXHJcbiAgICAgIGR1cmF0aW9uOiA1MDAwLFxyXG4gICAgICBkaXJlY3Rpb246IFwiYWx0ZXJuYXRlXCIsXHJcbiAgICAgIGxvb3A6IHRydWVcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgcGF0aG5hbWUsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgeyB0cmFuc2l0aW9uSW5saW5lU3R5bGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICB7cGF0aG5hbWUgPT09IFwiL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICA/IFwiUHJvamVjdHMgLSBTdGVmYW51cyBUaG9iaSBTaW5hZ2FcIlxyXG4gICAgICAgICAgICAgIDogXCJTdGVmYW51cyBUaG9iaSBTaW5hZ2FcIn1cclxuICAgICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgPHN2ZyBpZD1cIm1vcnBoaW5nXCIgd2lkdGg9XCIxMzY2XCIgaGVpZ2h0PVwiNzY4XCIgdmlld0JveD1cIjAgMCAxMzY2IDc2OFwiPlxyXG4gICAgICAgICAgICA8cGF0aCBkPXtnZXRTaGFwZXMocGF0aG5hbWUpWzBdfSBzdHlsZT17dHJhbnNpdGlvbklubGluZVN0eWxlfSAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8SGVhZGVyIHBhdGhuYW1lPXtwYXRobmFtZX0gLz5cclxuICAgICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N0aG9iaXMvc3Rob2Jpcy5naXRodWIuaW8vdHJlZS9kZXZcIj5cclxuICAgICAgICAgICAgICB7YDwgdmlldyBzb3VyY2UgPmB9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jbWVkXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pQm9odFwiPnR3aXR0ZXI8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL3Rob2JpaXNuYWdhXCI+aW5zdGFncmFtPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5sYXlvdXQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtnZXRCYWNrZ3JvdW5kQ29sb3IocGF0aG5hbWUpfTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzdmcgcGF0aCB7XHJcbiAgICAgICAgICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNzVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZm9vdGVyIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNvY21lZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNvY21lZCBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNikgcm90YXRlKDExNGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NtZWQge1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCA1NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NtZWQge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICAgICAgICBib3R0b206IGF1dG87XHJcbiAgICAgICAgICAgICAgd3JpdGluZy1tb2RlOiBscjtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NtZWQgYSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNvY21lZCBhICsgYSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9wYSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM2M2RjMjtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgdGV4dGFyZWEsXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb3BhIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl19 */\n/*@ sourceURL=F:\\Project\\sthobis-github-io\\components\\Layout.js */",
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/lib/head */ "./node_modules/next/dist/lib/head.js")


/***/ })

})
//# sourceMappingURL=_app.js.874c6c3be625c9b839e6.hot-update.js.map