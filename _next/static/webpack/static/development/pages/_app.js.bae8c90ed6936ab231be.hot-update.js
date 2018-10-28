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

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "morphBackground", function (pathname) {
      animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: _this.background,
        d: getShapes(pathname)[0],
        duration: 1000,
        easing: "easeInOutQuad"
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

    _this.state = {
      initialShape: getShapes(_this.props.pathname)[0]
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animateBackground(this.props.pathname);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.pathname !== prevProps.pathname) {
        this.timeout && clearTimeout(this.timeout);
        animejs__WEBPACK_IMPORTED_MODULE_1___default.a.remove(this.background);
        this.morphBackground(this.props.pathname);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          pathname = _this$props.pathname,
          children = _this$props.children;
      var initialShape = this.state.initialShape;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2648808584", [getBackgroundColor(pathname)]]]) + " " + "layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2648808584", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, pathname === "/projects" ? "Projects - Stefanus Thobi Sinaga" : "Stefanus Thobi Sinaga")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2648808584", [getBackgroundColor(pathname)]]]) + " " + "background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
        width: "1366",
        height: "768",
        viewBox: "0 0 1366 768",
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2648808584", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
        ref: function ref(el) {
          _this2.background = el;
        },
        d: initialShape,
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2648808584", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2648808584", [getBackgroundColor(pathname)]]]) + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        pathname: pathname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("main", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2648808584", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, children), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("footer", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2648808584", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: "https://github.com/sthobis/sthobis.github.io/tree/dev",
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2648808584", [getBackgroundColor(pathname)]]]) + " " + "source",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "< view source >"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2648808584", [getBackgroundColor(pathname)]]]) + " " + "socmed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: "https://twitter.com/iBoht",
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2648808584", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "twitter"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: "https://instagram.com/thobiisnaga",
        className: "jsx-3719379429 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2648808584", [getBackgroundColor(pathname)]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "instagram")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2648808584",
        css: ".layout.__jsx-style-dynamic-selector{position:relative;}.background.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;background-color:".concat(getBackgroundColor(pathname), ";-webkit-transition:1s;transition:1s;}svg.__jsx-style-dynamic-selector{width:100%;height:100%;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);-webkit-transition:1s;transition:1s;}svg.__jsx-style-dynamic-selector path.__jsx-style-dynamic-selector{fill:rgba(0,0,0,0.15);}.content.__jsx-style-dynamic-selector{position:relative;z-index:2;padding:50px;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}main.__jsx-style-dynamic-selector{-webkit-flex:auto;-ms-flex:auto;flex:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 75px;}footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.source.__jsx-style-dynamic-selector{color:#fff;-webkit-text-decoration:none;text-decoration:none;margin:0 0 0 10px;}.socmed.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 0 0 10px;}.socmed.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#fff;-webkit-text-decoration:none;text-decoration:none;margin:0 10px;}@media (orientation:portrait){svg.__jsx-style-dynamic-selector{-webkit-transform:scale(2.6) rotate(114deg);-ms-transform:scale(2.6) rotate(114deg);transform:scale(2.6) rotate(114deg);}}@media (max-width:767px){.content.__jsx-style-dynamic-selector{padding:30px;}.socmed.__jsx-style-dynamic-selector{right:30px;bottom:30px;}}@media (max-width:767px) and (orientation:landscape){main.__jsx-style-dynamic-selector{margin:0 55px;}}@media (max-width:767px) and (orientation:portrait){.content.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:calc(100vh - 60px);}main.__jsx-style-dynamic-selector{margin:0 10px;}footer.__jsx-style-dynamic-selector{display:none;}.socmed.__jsx-style-dynamic-selector{position:relative;right:auto;bottom:auto;writing-mode:lr;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 0 30px 0;}.socmed.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:block;height:30px;margin:0;}.socmed.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector+a.__jsx-style-dynamic-selector{margin-left:20px;}}@media (max-width:767px) and (orientation:landscape){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFIb0IsQUFHK0IsQUFJSCxBQVdKLEFBUWMsQUFJUCxBQVNSLEFBTUcsQUFNRixBQU1FLEFBS0YsQUFPMkIsQUFNdkIsQUFJRixBQU9HLEFBTUssQUFLTCxBQUlELEFBSUssQUFXSixBQU1HLFdBdkdQLEFBaUNTLEFBV0EsQUFpQlAsRUFKZCxBQTBCQSxDQWZBLEFBV0EsQUFtQmMsQ0E3R1IsRUFtSE4sQ0F2SEYsQUEyQlksQUEyRUcsR0FqR04sQ0FrQlQsQ0FQMkIsQUE2RHpCLEdBcUNXLEVBNUdBLEFBc0JFLENBMkVDLE1BWWQsSUE1R1ksRUFzQkssQUEyRUMsQ0FwRUwsU0E1QkgsTUFpR1UsQ0EzRVAsR0FyQmlDLEFBd0M1QixBQVdKLGFBbEJnQixBQVlaLENBT3BCLEFBNkNpQixJQXhEakIsYUFLQSxDQWtDa0MsY0EvRWxCLEdBT08sTUFvQlAsSUE2QmQsR0F3QkEsT0FwREYsRUFQd0IsV0FwQnhCLE1BZ0cyQixvQ0F6RlgsSUF5Qk8scUJBWHZCLFdBYkEsMkJBeUZzQixrQkFDcEIsd0JBakVGIiwiZmlsZSI6IkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5cclxuY29uc3QgZ2V0U2hhcGVzID0gcGF0aG5hbWUgPT4ge1xyXG4gIHN3aXRjaCAocGF0aG5hbWUpIHtcclxuICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgMjQ3LC0xMTAgNTk3LC03MiA3NDQsMCBzIDIwMSwxNTggNywyOTUgcyAtNjAzLC0xMTMgLTgwNCwwIFMgNjUuNSwzNDIuNSAzMTIuNSwyMzIuNSB6XCIsXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgMjczLjUsLTYwLjUgNjAyLjUsMjAuNSA3NDQsMCBzIDE2Ni41LDk0LjUgNywyOTUgcyAtNjA5LjUsLTI5LjUgLTgwNCwwIFMgMzksMjkzIDMxMi41LDIzMi41IHpcIlxyXG4gICAgICBdO1xyXG4gICAgY2FzZSBcIi9wcm9qZWN0c1wiOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIFwiTSAzMTIuNSwyMzIuNSBjIC0xMjgsLTE3MCA0MTEsLTMxNSA3NDQsMCBzIC0zMzgsNTQgNywyOTUgcyAtNjk2LDE3MyAtODA0LDAgUyA0NDAuNSw0MDIuNSAzMTIuNSwyMzIuNSB6XCIsXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgLTE2Ni41LC0yMzIuNSA1ODEuNSwtMjUyLjUgNzQ0LDAgcyAtMTk5LjUsODEuNSA3LDI5NSBzIC04MDguNSwxNzAuNSAtODA0LDAgUyA0NzksNDY1IDMxMi41LDIzMi41IHpcIlxyXG4gICAgICBdO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBcIk0gMzEyLjUsMjMyLjUgYyAyNDcsLTExMCA1OTcsLTcyIDc0NCwwIHMgMjAxLDE1OCA3LDI5NSBzIC02MDMsLTExMyAtODA0LDAgUyA2NS41LDM0Mi41IDMxMi41LDIzMi41IHpcIixcclxuICAgICAgICBcIk0gMzEyLjUsMjMyLjUgYyAyNzMuNSwtNjAuNSA2MDIuNSwyMC41IDc0NCwwIHMgMTY2LjUsOTQuNSA3LDI5NSBzIC02MDkuNSwtMjkuNSAtODA0LDAgUyAzOSwyOTMgMzEyLjUsMjMyLjUgelwiXHJcbiAgICAgIF07XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0QmFja2dyb3VuZENvbG9yID0gcGF0aG5hbWUgPT4ge1xyXG4gIHN3aXRjaCAocGF0aG5hbWUpIHtcclxuICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgIHJldHVybiBcIiMzNjNkYzJcIjtcclxuICAgIGNhc2UgXCIvcHJvamVjdHNcIjpcclxuICAgICAgcmV0dXJuIFwicmViZWNjYXB1cnBsZVwiO1xyXG4gICAgY2FzZSBcIi9hYm91dFwiOlxyXG4gICAgICByZXR1cm4gXCIjOGEyODU2XCI7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCIjMzYzZGMyXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW5pdGlhbFNoYXBlOiBnZXRTaGFwZXModGhpcy5wcm9wcy5wYXRobmFtZSlbMF1cclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5hbmltYXRlQmFja2dyb3VuZCh0aGlzLnByb3BzLnBhdGhuYW1lKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLnBhdGhuYW1lICE9PSBwcmV2UHJvcHMucGF0aG5hbWUpIHtcclxuICAgICAgdGhpcy50aW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICBhbmltZS5yZW1vdmUodGhpcy5iYWNrZ3JvdW5kKTtcclxuICAgICAgdGhpcy5tb3JwaEJhY2tncm91bmQodGhpcy5wcm9wcy5wYXRobmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3JwaEJhY2tncm91bmQgPSBwYXRobmFtZSA9PiB7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IHRoaXMuYmFja2dyb3VuZCxcclxuICAgICAgZDogZ2V0U2hhcGVzKHBhdGhuYW1lKVswXSxcclxuICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCJcclxuICAgIH0pLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGVCYWNrZ3JvdW5kKHBhdGhuYW1lKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGFuaW1hdGVCYWNrZ3JvdW5kID0gcGF0aG5hbWUgPT4ge1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiB0aGlzLmJhY2tncm91bmQsXHJcbiAgICAgIGQ6IGdldFNoYXBlcyhwYXRobmFtZSksXHJcbiAgICAgIGVhc2luZzogXCJsaW5lYXJcIixcclxuICAgICAgZHVyYXRpb246IDUwMDAsXHJcbiAgICAgIGRpcmVjdGlvbjogXCJhbHRlcm5hdGVcIixcclxuICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBwYXRobmFtZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IGluaXRpYWxTaGFwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICAgIHtwYXRobmFtZSA9PT0gXCIvcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgID8gXCJQcm9qZWN0cyAtIFN0ZWZhbnVzIFRob2JpIFNpbmFnYVwiXHJcbiAgICAgICAgICAgICAgOiBcIlN0ZWZhbnVzIFRob2JpIFNpbmFnYVwifVxyXG4gICAgICAgICAgPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTM2NlwiIGhlaWdodD1cIjc2OFwiIHZpZXdCb3g9XCIwIDAgMTM2NiA3NjhcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IGVsO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZD17aW5pdGlhbFNoYXBlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8SGVhZGVyIHBhdGhuYW1lPXtwYXRobmFtZX0gLz5cclxuICAgICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvdXJjZVwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zdGhvYmlzL3N0aG9iaXMuZ2l0aHViLmlvL3RyZWUvZGV2XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtgPCB2aWV3IHNvdXJjZSA+YH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY21lZFwiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2lCb2h0XCI+dHdpdHRlcjwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL3Rob2JpaXNuYWdhXCI+aW5zdGFncmFtPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5sYXlvdXQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtnZXRCYWNrZ3JvdW5kQ29sb3IocGF0aG5hbWUpfTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzdmcgcGF0aCB7XHJcbiAgICAgICAgICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNzVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc291cmNlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zb2NtZWQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNvY21lZCBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNikgcm90YXRlKDExNGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NtZWQge1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCA1NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NtZWQge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICAgICAgICBib3R0b206IGF1dG87XHJcbiAgICAgICAgICAgICAgd3JpdGluZy1tb2RlOiBscjtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NtZWQgYSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNvY21lZCBhICsgYSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9wYSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM2M2RjMjtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgdGV4dGFyZWEsXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb3BhIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl19 */\n/*@ sourceURL=F:\\Project\\sthobis-github-io\\components\\Layout.js */"),
        dynamic: [getBackgroundColor(pathname)],
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3719379429",
        css: "*{box-sizing:border-box;}html{font-size:10px;}body{color:#fff;margin:0;font-family:\"Ropa Sans\",sans-serif;font-size:2rem;line-height:1.5;background:#363dc2;overflow-x:hidden;}input,textarea,button{font-family:\"Ropa Sans\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFQMkIsQUFHbUMsQUFJUCxBQUlKLEFBWXlCLFdBWDNCLElBSlgsS0FLc0MsRUFUdEMsYUFvQkEsb0JBVmlCLGVBQ0MsZ0JBQ0csbUJBQ0Qsa0JBQ3BCIiwiZmlsZSI6IkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5cclxuY29uc3QgZ2V0U2hhcGVzID0gcGF0aG5hbWUgPT4ge1xyXG4gIHN3aXRjaCAocGF0aG5hbWUpIHtcclxuICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgMjQ3LC0xMTAgNTk3LC03MiA3NDQsMCBzIDIwMSwxNTggNywyOTUgcyAtNjAzLC0xMTMgLTgwNCwwIFMgNjUuNSwzNDIuNSAzMTIuNSwyMzIuNSB6XCIsXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgMjczLjUsLTYwLjUgNjAyLjUsMjAuNSA3NDQsMCBzIDE2Ni41LDk0LjUgNywyOTUgcyAtNjA5LjUsLTI5LjUgLTgwNCwwIFMgMzksMjkzIDMxMi41LDIzMi41IHpcIlxyXG4gICAgICBdO1xyXG4gICAgY2FzZSBcIi9wcm9qZWN0c1wiOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIFwiTSAzMTIuNSwyMzIuNSBjIC0xMjgsLTE3MCA0MTEsLTMxNSA3NDQsMCBzIC0zMzgsNTQgNywyOTUgcyAtNjk2LDE3MyAtODA0LDAgUyA0NDAuNSw0MDIuNSAzMTIuNSwyMzIuNSB6XCIsXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgLTE2Ni41LC0yMzIuNSA1ODEuNSwtMjUyLjUgNzQ0LDAgcyAtMTk5LjUsODEuNSA3LDI5NSBzIC04MDguNSwxNzAuNSAtODA0LDAgUyA0NzksNDY1IDMxMi41LDIzMi41IHpcIlxyXG4gICAgICBdO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBcIk0gMzEyLjUsMjMyLjUgYyAyNDcsLTExMCA1OTcsLTcyIDc0NCwwIHMgMjAxLDE1OCA3LDI5NSBzIC02MDMsLTExMyAtODA0LDAgUyA2NS41LDM0Mi41IDMxMi41LDIzMi41IHpcIixcclxuICAgICAgICBcIk0gMzEyLjUsMjMyLjUgYyAyNzMuNSwtNjAuNSA2MDIuNSwyMC41IDc0NCwwIHMgMTY2LjUsOTQuNSA3LDI5NSBzIC02MDkuNSwtMjkuNSAtODA0LDAgUyAzOSwyOTMgMzEyLjUsMjMyLjUgelwiXHJcbiAgICAgIF07XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0QmFja2dyb3VuZENvbG9yID0gcGF0aG5hbWUgPT4ge1xyXG4gIHN3aXRjaCAocGF0aG5hbWUpIHtcclxuICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgIHJldHVybiBcIiMzNjNkYzJcIjtcclxuICAgIGNhc2UgXCIvcHJvamVjdHNcIjpcclxuICAgICAgcmV0dXJuIFwicmViZWNjYXB1cnBsZVwiO1xyXG4gICAgY2FzZSBcIi9hYm91dFwiOlxyXG4gICAgICByZXR1cm4gXCIjOGEyODU2XCI7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCIjMzYzZGMyXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW5pdGlhbFNoYXBlOiBnZXRTaGFwZXModGhpcy5wcm9wcy5wYXRobmFtZSlbMF1cclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5hbmltYXRlQmFja2dyb3VuZCh0aGlzLnByb3BzLnBhdGhuYW1lKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLnBhdGhuYW1lICE9PSBwcmV2UHJvcHMucGF0aG5hbWUpIHtcclxuICAgICAgdGhpcy50aW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICBhbmltZS5yZW1vdmUodGhpcy5iYWNrZ3JvdW5kKTtcclxuICAgICAgdGhpcy5tb3JwaEJhY2tncm91bmQodGhpcy5wcm9wcy5wYXRobmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3JwaEJhY2tncm91bmQgPSBwYXRobmFtZSA9PiB7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IHRoaXMuYmFja2dyb3VuZCxcclxuICAgICAgZDogZ2V0U2hhcGVzKHBhdGhuYW1lKVswXSxcclxuICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCJcclxuICAgIH0pLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGVCYWNrZ3JvdW5kKHBhdGhuYW1lKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGFuaW1hdGVCYWNrZ3JvdW5kID0gcGF0aG5hbWUgPT4ge1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiB0aGlzLmJhY2tncm91bmQsXHJcbiAgICAgIGQ6IGdldFNoYXBlcyhwYXRobmFtZSksXHJcbiAgICAgIGVhc2luZzogXCJsaW5lYXJcIixcclxuICAgICAgZHVyYXRpb246IDUwMDAsXHJcbiAgICAgIGRpcmVjdGlvbjogXCJhbHRlcm5hdGVcIixcclxuICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBwYXRobmFtZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IGluaXRpYWxTaGFwZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICAgIHtwYXRobmFtZSA9PT0gXCIvcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgID8gXCJQcm9qZWN0cyAtIFN0ZWZhbnVzIFRob2JpIFNpbmFnYVwiXHJcbiAgICAgICAgICAgICAgOiBcIlN0ZWZhbnVzIFRob2JpIFNpbmFnYVwifVxyXG4gICAgICAgICAgPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTM2NlwiIGhlaWdodD1cIjc2OFwiIHZpZXdCb3g9XCIwIDAgMTM2NiA3NjhcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IGVsO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZD17aW5pdGlhbFNoYXBlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8SGVhZGVyIHBhdGhuYW1lPXtwYXRobmFtZX0gLz5cclxuICAgICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvdXJjZVwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zdGhvYmlzL3N0aG9iaXMuZ2l0aHViLmlvL3RyZWUvZGV2XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtgPCB2aWV3IHNvdXJjZSA+YH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY21lZFwiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2lCb2h0XCI+dHdpdHRlcjwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL3Rob2JpaXNuYWdhXCI+aW5zdGFncmFtPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5sYXlvdXQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtnZXRCYWNrZ3JvdW5kQ29sb3IocGF0aG5hbWUpfTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzdmcgcGF0aCB7XHJcbiAgICAgICAgICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNzVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc291cmNlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zb2NtZWQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNvY21lZCBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNikgcm90YXRlKDExNGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NtZWQge1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCA1NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NtZWQge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICAgICAgICBib3R0b206IGF1dG87XHJcbiAgICAgICAgICAgICAgd3JpdGluZy1tb2RlOiBscjtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NtZWQgYSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNvY21lZCBhICsgYSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9wYSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM2M2RjMjtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgdGV4dGFyZWEsXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb3BhIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl19 */\n/*@ sourceURL=F:\\Project\\sthobis-github-io\\components\\Layout.js */",
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.bae8c90ed6936ab231be.hot-update.js.map